from app.services.groq_service import ask_groq

def log_interaction(user_input):
    prompt = f"""
    Extract the following details from this doctor interaction:

    Input: {user_input}

    Return:
    - HCP Name
    - Hospital
    - Product Discussed
    - Summary
    - Follow-up Required
    - Sentiment
    """

    result = ask_groq(prompt)
    return result