from fastapi import APIRouter

from app.langgraph_agent import crm_agent   # LangGraph

from app.tools.edit_tool import edit_interaction
from app.tools.hcp_profile_tool import get_hcp_profile
from app.tools.followup_tool import get_followup_recommendation
from app.tools.competitor_tool import get_competitor_intelligence

from app.schemas.interaction_schema import LogResponse, EditResponse

from app.database import SessionLocal
from app.models import Interaction

router = APIRouter()


# ✅ 1. Log Interaction (Main Feature)
@router.post("/log-interaction", response_model=LogResponse)
def log_hcp_interaction(user_input: str):

    # Step A: Call LangGraph Agent
    result = crm_agent.invoke({
        "user_input": user_input
    })

    ai_output = result["ai_response"]

    # Step B: Save into MySQL
    db = SessionLocal()

    new_interaction = Interaction(
        hcp_name="Dr. Rao",   # Demo static
        hospital_name="Apollo Hospital",
        interaction_details=user_input,
        ai_summary=ai_output
    )

    db.add(new_interaction)
    db.commit()
    db.close()

    # Step C: Return response
    return {
        "status": "success",
        "ai_response": ai_output
    }


# ✅ 2. Edit Interaction
@router.post("/edit-interaction", response_model=EditResponse)
def edit_hcp_interaction(existing_data: str, update_request: str):

    result = edit_interaction(existing_data, update_request)

    return {
        "status": "success",
        "edit_response": result
    }


# ✅ 3. HCP Profile
@router.get("/hcp-profile")
def fetch_hcp_profile(hcp_name: str):

    result = get_hcp_profile(hcp_name)

    return {
        "status": "success",
        "profile_data": result
    }


# ✅ 4. Follow-up Recommendation
@router.get("/followup-recommendation")
def followup_recommendation(hcp_name: str):

    return get_followup_recommendation(hcp_name)


# ✅ 5. Competitor Intelligence
@router.get("/competitor-intelligence")
def competitor_intelligence(product_name: str):

    return get_competitor_intelligence(product_name)