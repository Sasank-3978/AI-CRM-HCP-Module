import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq

load_dotenv()

groq_api_key = os.getenv("GROQ_API_KEY")

def ask_groq(prompt):
    try:
        if not groq_api_key:
            return "Error: GROQ_API_KEY not found in .env file"

        llm = ChatGroq(
            groq_api_key=groq_api_key,
            model_name="llama-3.3-70b-versatile"
        )

        response = llm.invoke(prompt)
        return response.content

    except Exception as e:
        return f"Groq Error: {str(e)}"