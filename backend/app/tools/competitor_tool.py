from app.services.groq_service import ask_groq

def get_competitor_intelligence(product_name):
    prompt = f"""
    Provide competitor intelligence for {product_name}.

    Return:
    - Competitor product names
    - Key advantages
    - Weaknesses
    - Suggested sales strategy
    """

    response = ask_groq(prompt)

    return {
        "status": "success",
        "competitor_data": response
    }