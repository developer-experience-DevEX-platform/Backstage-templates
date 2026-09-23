from fastapi import FastAPI

app = FastAPI(title="${{ values.name }}")


@app.get("/health")
def health() -> dict[str, str | bool]:
    return {
        "status": "healthy",
        "ready": True,
        "service": "${{ values.name }}",
    }


@app.get("/ready")
def ready() -> dict[str, bool]:
    return {"ready": True}
