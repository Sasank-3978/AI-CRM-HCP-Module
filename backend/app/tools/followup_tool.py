from app.services.groq_service import ask_groq

def get_followup_recommendation(hcp_name):
    prompt = f"""
    Based on previous interactions with {hcp_name},
    suggest the best follow-up strategy.

    Return:
    - Best day to follow-up
    - Best discussion topic
    - Suggested product focus
    - Priority level
    """

    response = ask_groq(prompt)

    return {
        "status": "success",
        "followup_data": response
    }