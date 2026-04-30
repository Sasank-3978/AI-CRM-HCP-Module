# 🚀 AI CRM HCP Module

AI-powered CRM system for Healthcare Professionals (HCPs) using:
- LangGraph (agent workflow)
- Groq LLM (AI processing)
- FastAPI (backend)
- React (frontend)
- MySQL (database)

---

## 📌 Features

- 🧠 AI-powered interaction logging
- ✏️ Edit HCP details using AI
- 📊 HCP Profile insights
- 🔔 Automated follow-up suggestions
- 🏆 Competitor analysis

---

## 🏗️ Project Structure

backend/
 └── app/
     ├── routes/
     ├── services/
     ├── tools/
     └── main.py

frontend/
 └── React UI

---

## ⚙️ Setup Instructions

### 1. Clone repo
git clone https://github.com/Sasank-3978/AI-CRM-HCP-Module.git
cd AI-CRM-HCP-Module

---

### 2. Backend Setup
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt

Create `.env` file:
GROQ_API_KEY=your_api_key_here

Run backend:
uvicorn app.main:app --reload

---

### 3. Frontend Setup
cd frontend
npm install
npm run dev

---

## 🧠 Tech Stack

- FastAPI
- React
- LangGraph
- Groq LLM
- MySQL

---

## 🎥 Demo

(Add your demo video link here)

---

## 👨‍💻 Author

Sasank Reddy
