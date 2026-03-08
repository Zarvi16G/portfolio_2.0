# 1. Use an official Python runtime
FROM python:3.12-slim

# 2. Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# 3. Set work directory
WORKDIR /code

# 4. Install system dependencies (for psycopg2, etc.)
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# 5. Install Python dependencies
COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

# 6. Copy project
COPY . /code/

# 7. Expose the port
EXPOSE 8000

# 8. Start the server (using Gunicorn for production)
# Replace 'myproject' with the name of your folder containing wsgi.py
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
