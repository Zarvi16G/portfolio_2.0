server {
    listen 80;
    server_name 134.199.195.154 santiagoboada.dev www.santiagoboada.dev;

    location / {
        # Redirects to your React Container (running on port 5173 via Docker)
        proxy_pass http://localhost:5173;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /api/ {
        # Redirects to your Django Container (running on port 8000 via Docker)
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
