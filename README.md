# 📝 Fullstack To-Do App

A responsive and minimal task management web application built with **React.js** and **Django REST Framework**, featuring full **CRUD** operations and a sleek GitHub-style **dark mode** interface.

## 🚀 Live Demo

Access the live frontend here:  
🔗 [https://fullstack-todo-app-eosin.vercel.app](https://fullstack-todo-app-eosin.vercel.app)

## 🔧 Tech Stack

### Frontend:
- React.js (Functional components with hooks)
- Tailwind CSS for styling
- Axios for API requests

### Backend:
- Django 4.x
- Django REST Framework (DRF)
- SQLite for local database
- CORS support for cross-origin requests

---

## ✅ Features
- Add new tasks with title and status (Pending or Completed)
- Edit, delete, or toggle the status of existing tasks
- Fully responsive dark-themed UI
- Task list updates instantly after each operation
- RESTful API with structured endpoints

---

## 📁 Project Structure
```
fullstack-todo-app/
├── backend/       # Django + DRF (API at /api/tasks/)
└── frontend/      # React + Tailwind (UI at localhost:3000)
```

---

## 🚀 Getting Started

### Backend (Django)
```bash
cd backend
python -m venv venv
venv\Scripts\activate      # Windows
# source venv/bin/activate  # Linux/macOS
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
Runs on: `http://127.0.0.1:8000/api/tasks/`

---

### Frontend (React)
```bash
cd frontend
npm install
npm start
```
Runs on: `http://localhost:3000`

---

## 📌 Notes
- Backend and frontend must run simultaneously
- All data stored locally in SQLite
- Can be extended with user auth, categories, or deadline support

---

## 🧑‍💻 Author

**Nayan Das**  
📧 [nayan271997@gmail.com](mailto:nayan271997@gmail.com)  
🔗 [GitHub](https://github.com/onlynayan)  
🔗 [Portfolio](https://onlynayan.github.io/portfolio)