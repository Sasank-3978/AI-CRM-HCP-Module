from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.interaction import router
from app.services.groq_service import ask_groq
from app.database import engine
from app.models import Base
app = FastAPI()
Base.metadata.create_all(bind=engine)
# CORS Fix
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
def home():
    return {"message": "CRM Backend Running Successfully"}


# Tool 2 → Edit Interaction API
@app.post("/edit-interaction")
def edit_interaction(user_input: str):
    prompt = f"""
You are an AI CRM assistant for pharma sales.

The user wants to edit an existing HCP interaction.

Updated details:
{user_input}

Please provide:
1. Updated HCP Name
2. Updated Hospital Name
3. Updated Product Discussion
4. Updated Follow-up Action
5. Final Summary
"""

    ai_response = ask_groq(prompt)

    return {
        "status": "success",
        "ai_response": ai_response
    }