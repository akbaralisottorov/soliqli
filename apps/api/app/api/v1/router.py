from fastapi import APIRouter

api_router = APIRouter()

@api_router.get("/health", tags=["Health Probe"])
async def health_check():
    return {
        "status": "healthy",
        "service": "Soliqly API Core",
        "version": "1.0.0"
    }
