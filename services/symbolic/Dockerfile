FROM python:3.12-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY app.py .

# Internal service: attach to a private network and do NOT publish this port to
# the public internet. 0.0.0.0 here only lets sibling containers on the internal
# network reach it.
EXPOSE 8765
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8765"]
