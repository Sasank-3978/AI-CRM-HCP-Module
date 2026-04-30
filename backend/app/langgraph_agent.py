from typing import TypedDict
from langgraph.graph import StateGraph, END
from langchain_groq import ChatGroq
import os
from dotenv import load_dotenv

# Load API key
load_dotenv()


# Step 1: Define state structure
class AgentState(TypedDict):
    user_input: str
    ai_response: str


# Step 2: Initialize LLM
llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model_name="llama-3.3-70b-versatile"
)


# Step 3: Define logic function
def process_interaction(state: AgentState):

    prompt = f"""
You are an AI CRM assistant.

Extract:
- HCP Name
- Hospital
- Product Discussed
- Summary
- Follow-up Required
- Sentiment

Input:
{state['user_input']}
"""

    response = llm.invoke(prompt)

    return {
        "ai_response": response.content
    }


# Step 4: Build LangGraph
graph = StateGraph(AgentState)

graph.add_node("process", process_interaction)

graph.set_entry_point("process")

graph.add_edge("process", END)

# Step 5: Compile agent
crm_agent = graph.compile()