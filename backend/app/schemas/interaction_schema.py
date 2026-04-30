from pydantic import BaseModel

class LogResponse(BaseModel):
    status: str
    ai_response: str

class EditResponse(BaseModel):
    status: str
    edit_response: dict