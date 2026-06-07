"""pytest suite for the symbolic sidecar. Run: `pytest services/symbolic`."""
import sys
import time

import pytest
from fastapi.testclient import TestClient

import app as svc

client = TestClient(svc.app)


def equiv(a, b, mode):
    r = client.post("/equivalent", json={"a": a, "b": b, "mode": mode})
    return r


def test_health():
    assert client.get("/health").json() == {"ok": True}


def test_simplify_equivalence():
    assert equiv("x^2+2x+1", "(x+1)^2", "simplify").json() == {"equivalent": True}
    assert equiv("sin(x)^2+cos(x)^2", "1", "simplify").json() == {"equivalent": True}
    assert equiv("x+1", "x+2", "simplify").json() == {"equivalent": False}


def test_derivative_mode():
    # a ≡ d/dx(b)
    assert equiv("2*x", "x^2", "derivative").json() == {"equivalent": True}
    assert equiv("x^2", "x^2", "derivative").json() == {"equivalent": False}


def test_antiderivative_mode():
    # equal up to an additive constant ⇒ True
    assert equiv("x^3/3 + 5", "x^3/3", "antiderivative").json() == {"equivalent": True}
    # not antiderivatives of a common function ⇒ False
    assert equiv("x^2", "x^3/3", "antiderivative").json() == {"equivalent": False}


def test_classify_form():
    surd = client.post("/classify-form", json={"expr": "sqrt(2)"}).json()
    assert surd["hasSurd"] is True and surd["isExact"] is True and surd["isBareDecimal"] is False

    dec = client.post("/classify-form", json={"expr": "1.41"}).json()
    assert dec["isBareDecimal"] is True and dec["isExact"] is False

    frac = client.post("/classify-form", json={"expr": "1/2"}).json()
    assert frac["hasFraction"] is True and frac["isExact"] is True

    cpi = client.post("/classify-form", json={"expr": "pi"}).json()
    assert cpi["isExact"] is True and cpi["isBareDecimal"] is False


@pytest.mark.parametrize(
    "evil",
    ["__import__('os').system('ls')", "exec('x=1')", "eval('1+1')", "lambda: 1", "x.__class__"],
)
def test_malicious_input_rejected(evil):
    r = client.post("/equivalent", json={"a": evil, "b": "1", "mode": "simplify"})
    assert r.status_code == 400
    r2 = client.post("/classify-form", json={"expr": evil})
    assert r2.status_code == 400


def test_overlong_input_rejected():
    big = "1+" * 200  # > 256 chars
    assert client.post("/classify-form", json={"expr": big}).status_code == 400
    assert client.post("/equivalent", json={"a": big, "b": "1", "mode": "simplify"}).status_code == 400


@pytest.mark.skipif(sys.platform == "win32", reason="fork-based hard timeout test (POSIX only)")
def test_hard_timeout_terminates_worker():
    # Register a deliberately slow computation; the fork worker inherits it.
    svc._FNS["__sleep"] = lambda payload: (time.sleep(5), {"equivalent": True})[1]
    try:
        assert svc.run_with_timeout("__sleep", {}, timeout=0.3) is None  # terminated
    finally:
        svc._FNS.pop("__sleep", None)
