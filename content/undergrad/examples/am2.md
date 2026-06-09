# am2 — Asymptotic Expansion of Integrals; Watson's Lemma (exemplars)

Source: Cambridge DAMTP "Asymptotic Methods" Example Sheets (D16a Q9–13, D16b Q1–2),
Michaelmas 2025, H. Latter. STYLE/DIFFICULTY template only — generate new questions that
are mathematically different (no reused integrands or constants).
Level: Part II applied maths. Techniques: integration by parts, Watson's lemma,
Laplace's method, optimal truncation, Stirling's formula.

1. (Stieltjes integral) For \( F(x) = \int_0^\infty \frac{\rho(t)}{1+xt}\,dt \) with
   \( 0 \le \rho(t) \le C e^{-\epsilon t} \), show \( F(x) \sim \sum_{n=0}^\infty (-1)^n a_n x^n \)
   as \( x\to 0^+ \), \( a_n = \int_0^\infty t^n \rho(t)\,dt \). For \( \rho = e^{-t} \) deduce
   \( F(x) \sim \sum (-1)^n n!\,x^n \). For \( G(x)=\int_0^\infty \frac{e^{-t}}{(1+xt)^2}dt \) find
   the term of smallest magnitude and use optimal truncation to estimate \( G(0.1) \).

2. (Exponential integral) Use integration by parts to find, as \( x\to\infty \),
   \( E_1(x) = \int_x^\infty \frac{e^{-t}}{t}\,dt \sim e^{-x}(b_1 x^{-1} + b_2 x^{-2} + \cdots) \),
   bounding the remainder. Check via the substitution \( t = x(1+s) \) and Watson's lemma.

3. Find asymptotic expansions, as \( x \to \infty \), of
   \( I_1(x) = \int_0^1 e^{-x t (1-t)^2}\,dt \) and \( I_2(x) = \int_0^\infty e^{-x t(1-t)^2}\,dt \),
   to \( O(x^{-1}) \).

4. (Laplace's method) Show the first two terms, as \( x\to\infty \), of
   \( I(x) = \int_0^{\pi/2} \exp(-x\,t^3 \cos t)\,dt \) are
   \( I(x) \sim \tfrac{1}{3x^{1/3}}\Gamma(\tfrac13) + \big(\tfrac16 + \tfrac{8}{\pi^3}\big)\tfrac1x + \cdots \).

5. (Stirling correction) Obtain the first correction in
   \( \Gamma(x+1) \sim \sqrt{2\pi x}\,(x/e)^x \big(1 + \tfrac{1}{12x} + \cdots\big) \) as \( x\to\infty \).

6. Derive \( \int_0^{\pi/2} e^{-x\sin^2 t}\,dt \sim (\tfrac{\pi}{4x})^{1/2}\big(1 + \tfrac{1}{4x}\cdot\tfrac{1}{1!}\tfrac{1}{2^2}\cdots\big) \)
   as \( x\to\infty \), and use it to find an expansion of the Bessel function
   \( I_0(x) = \tfrac1\pi \int_0^\pi e^{x\cos\theta}\,d\theta \).
