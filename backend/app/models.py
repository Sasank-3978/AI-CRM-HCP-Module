from sqlalchemy import Column, Integer, String, Text
from app.database import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)
    hcp_name = Column(String(255))
    hospital_name = Column(String(255))
    interaction_details = Column(Text)
    ai_summary = Column(Text)