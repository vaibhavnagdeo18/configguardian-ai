# ConfigGuardian AI

> Predicts which config changes will crash production — before you deploy.

## What it does
ConfigGuardian AI analyzes infrastructure configuration changes using 
three Amazon Nova agents running in parallel. It returns a risk verdict 
(BLOCK / REVIEW / APPROVE) in 8 seconds, matched against 52 real-world 
infrastructure disasters including CrowdStrike, AWS DynamoDB, and Intel.

## Tech Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- AI: AWS Bedrock (Amazon Nova)
- Database: Disaster incident database (52 real-world outages)

## How it works
1. Submit your config change or YAML diff
2. Three Nova agents analyze in parallel:
   - Pattern Recognition Agent
   - Blast Radius Agent  
   - Financial Impact Agent
3. Returns risk score (0-100), confidence %, matched incident, 
   estimated downtime, financial exposure, and safer alternative config

## Real incidents in the database
- CrowdStrike Falcon Update — July 2024 — $3B loss, 8.5M systems
- AWS DynamoDB — October 2025 — 1,000+ services, 7hr downtime
- Intel VMIn Bug — 2024 — Billions in warranty cost

## Run locally
```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend/configguardian
npm install
npm run dev
```

## Built for
Amazon Nova Hackathon 2026
