# Strativa

Production-ready LinkedIn-first AI content SaaS + marketing website, built with Next.js, Prisma, PostgreSQL, Redis/BullMQ, NextAuth, OpenAI, LinkedIn API integration hooks, and Stripe billing.

## What ships
- Marketing homepage and dark SaaS app shell
- Workspace/agency architecture and RBAC scaffolding
- AI generation API with structured outputs and sandbox fallback
- LinkedIn publish + diagnostics API with LIVE_MODE / SANDBOX_MODE
- Stripe webhook validation endpoint + entitlement module
- BullMQ worker for scheduled publishing
- Comprehensive Prisma schema for multi-client SaaS domain

## Local setup
1. Install deps:
   ```bash
   npm install
   ```
2. Start infra:
   ```bash
   docker compose up db redis -d
   ```
3. Configure env:
   ```bash
   cp .env.example .env
   ```
4. Run prisma:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
5. Start app:
   ```bash
   npm run dev
   ```
6. Start worker:
   ```bash
   npm run worker
   ```

## Required environment variables
See `.env.example` for full list.

### LinkedIn setup
- Create a LinkedIn app in LinkedIn Developer Portal.
- Add redirect URI: `http://localhost:3000/api/linkedin/oauth/callback`.
- Configure scopes per your approved products (`w_member_social`, optional org scopes).
- Use `/api/linkedin/diagnostics` to inspect mode/scopes and guidance.

### Stripe setup
- Create products/prices for Creator, Pro, Agency.
- Set price IDs in env.
- Configure webhook endpoint: `http://localhost:3000/api/stripe/webhook`.
- Add signing secret to `STRIPE_WEBHOOK_SECRET`.

### OpenAI setup
- Set `OPENAI_API_KEY`.
- Set `LIVE_MODE=true` for real model calls.
- Keep `LIVE_MODE=false` for deterministic sandbox fallback.

## Testing
```bash
npm run typecheck
npm run test
```

## Known limitations
- LinkedIn org publishing and analytics access vary by app review status.
- Current OAuth callback stores only a code preview; token exchange service wiring is scaffolded.
- PDF report generation endpoint is planned in worker/report pipeline.
