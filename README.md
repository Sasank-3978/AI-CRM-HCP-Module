# 🚀 AI CRM HCP Module

An AI-powered CRM system for Healthcare Professionals (HCPs) built using LangGraph, Groq LLM, FastAPI, and React.

---

## 📌 Overview

This project demonstrates how AI agents can be integrated into a CRM system to automate workflows like interaction logging, follow-ups, and insights generation.

It uses **LangGraph** for workflow orchestration and **Groq LLM** for intelligent decision-making.

---

## 🧩 Problem Statement

Managing Healthcare Professionals (HCPs) manually in traditional CRM systems is time-consuming and lacks intelligent insights.

This project solves that by:

* Automating interaction logging
* Providing smart follow-up suggestions
* Generating AI-driven insights
* Assisting decision-making using LLMs

---

## ✨ Features

* 🧠 AI-powered interaction logging
* ✏️ Edit HCP details using AI
* 📊 HCP Profile insights
* 🔔 Automated follow-up suggestions
* 🏆 Competitor analysis

---

## 🏗️ Project Structure

AI_CRM_HCP_Module/

├── backend/
│   └── app/
│       ├── routes/
│       ├── services/
│       ├── tools/
│       └── main.py
│
├── frontend/
│   └── React UI
│
├── README.md
└── .gitignore

---

## 🔍 How the System Works

This project follows an AI-agent-based architecture using LangGraph.

### 🔄 Workflow Overview

1. User interacts with the **React frontend**
2. Request is sent to **FastAPI backend**
3. Backend forwards request to **LangGraph agent**
4. LangGraph:

   * Understands intent using Groq LLM
   * Selects appropriate tool
   * Executes the tool
5. Tool performs action (DB/API logic)
6. Response flows back to frontend

---

### 🧠 Role of LangGraph

* Acts as decision engine
* Connects multiple tools
* Dynamically selects tools
* Enables reasoning workflows

---

### 🛠️ Tool Execution Flow

* **Log Tool** → Stores interaction
* **Edit Tool** → Updates HCP data
* **Profile Tool** → Generates insights
* **Follow-up Tool** → Suggests next steps
* **Competitor Tool** → Provides competitor analysis

---

### 🗄️ Database Interaction

* Uses MySQL
* Stores structured HCP data
* Supports read/write operations

---

### ⚡ API Layer

FastAPI endpoints:

* `/ask` → Main AI interaction endpoint
* `/hcp` → HCP operations

---

### 🖥️ Frontend Behavior

* Built with React
* Sends user queries to backend
* Displays AI responses

---

### 🔐 Environment Handling

* API keys stored in `.env`
* Loaded using `python-dotenv`
* Prevents key exposure

---

## 📊 Architecture Flow

User → React → FastAPI → LangGraph → Tools → Database
← Response flows back same path

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Sasank-3978/AI-CRM-HCP-Module.git
cd AI-CRM-HCP-Module
```

---

### 2. Backend Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

Create `.env` file:

```
GROQ_API_KEY=your_api_key_here
MODEL_NAME=llama-3.3-70b-versatile
```

Run backend:

```bash
uvicorn app.main:app --reload
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## ▶️ API Usage Example

Open:

http://127.0.0.1:8000/docs

Example request:

```json
{
  "prompt": "Show profile insights for HCP John"
}
```

---

## 🧪 Example Queries

* "Log interaction with Dr. Smith"
* "Update HCP specialty to cardiology"
* "Give profile insights for Dr. John"
* "Suggest follow-up for last meeting"
* "Analyze competitor performance"

---

## 🛠️ Tech Stack

* FastAPI
* React (Vite)
* LangGraph
* Groq LLM
* MySQL

---

## 🎥 Demo

(Add your demo video link here)

---

## 📌 What I Learned

* Building AI workflows using LangGraph
* Integrating LLMs into applications
* Designing modular backend systems
* Connecting frontend with AI APIs

---

## ⚠️ Important Notes

* `.env` file is not included for security reasons
* Add your own Groq API key

---

## 👨‍💻 Author

**Sasank Reddy**
