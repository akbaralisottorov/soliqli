import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "Soliqly API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Environment
    ENVIRONMENT: str = "local"
    DEBUG: bool = True
    
    # Database
    DATABASE_URL: str = "postgresql+asyncpg://soliqly:soliqly@localhost:5432/soliqly_dev"
    
    # Security
    JWT_SECRET_KEY: str = "change-this-to-a-secure-random-64-character-secret-in-production"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
