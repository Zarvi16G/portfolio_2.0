# 🌌 Cyberpunk Portfolio 2.0

A high-performance, visually stunning developer portfolio built with a **Cyberpunk 3D Aesthetic**. This project features a robust Django REST API backend and a cutting-edge React frontend powered by Tailwind CSS v4.

---

## 🚀 Key Features

### 🎨 Design & UI

- **Animated 3D Visualizer**: A recursive Fibonacci lattice point-cloud sphere that reacts to mouse movement.
- **Dynamic Theme System**: Seamless toggle between "Neon Dark" and "Crystal Light" modes.
- **Interactive Components**: Smooth grid-transition card expansions and scroll-triggered reveal animations.
- **Tailwind CSS v4**: Utilizing the latest CSS-first theming system and modern design tokens.

### 🛡️ Security & Backend

- **Advanced Authentication**: JWT-based session management with secure HTTP-only cookies.
- **Two-Factor Authentication (2FA)**: OTP/TOTP multi-factor security for the admin dashboard.
- **RESTful API**: Clean, scalable API architecture using Django REST Framework.
- **Email Integration**: Automated contact message processing via Zoho ZeptoMail.

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS v4, Vanilla CSS (Glassmorphism)
- **Visuals**: HTML5 Canvas (3D Math-based animations)
- **Animation**: Intersection Observer API for scroll reveals

### Backend

- **Framework**: Django 6.0
- **API**: Django REST Framework (DRF)
- **Database**: SQLite3 (Dev) / Easily portable to PostgreSQL
- **Security**: SimpleJWT, Django Two-Factor Auth, python-dotenv
- **Email**: Zoho ZeptoMail API

---

## ⚙️ Setup & Installation

### 1. Prerequisites

- Python 3.12+
- Node.js 20+
- `pip` and `npm`

### 2. Backend Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio_2.0/backend

# Install dependencies
pip install -r requirements.txt

# Configure Environment
cp .env.example .env
# Edit .env with your ZOHO_ZEPTOMAIL_API_KEY_TOKEN and SECRET_KEY

# Run Database Migrations
python manage.py migrate

# Start Server
python manage.py runserver
```

### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Start Development Server
npm run dev
```

---

## 📂 Project Structure

```text
portfolio_2.0/
├── backend/            # Django REST API (Python)
│   ├── admin_portfolio/ # Core logic & Models
│   └── backend/        # Global settings
├── frontend/           # React Application (TypeScript)
│   ├── src/
│   │   ├── components/  # Cyberpunk UI elements
│   │   └── context/     # Theme & State management
│   └── index.css       # Tailwind v4 Configuration
└── README.md           # Documentation
```

---

## 📜 License

Distribute under the MIT License. See `LICENSE` for more information.
