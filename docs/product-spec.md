# Strativa Product Spec (inferred)

## Sitemap
- Marketing: `/`
- App shell: `/app/*`
  - Dashboard, Editor, Calendar, Billing, Settings
- API:
  - Auth (`/api/auth/*`), AI (`/api/ai/generate`), LinkedIn diagnostics/oauth/publish,
  - Stripe webhook, analytics CSV export

## Core Flows
1. Signup/login via NextAuth credentials (magic link extension point).
2. Workspace creation and membership with OWNER/ADMIN/EDITOR/VIEWER roles.
3. Client setup under agency workspace with LinkedIn connections + brand kit.
4. Draft content generation via AI structured task endpoint.
5. Optional approval by client stakeholders.
6. Schedule publication to BullMQ queue; worker publishes to LinkedIn live/sandbox.
7. Ingest metrics and export CSV/PDF reports.

## Permissions model
- OWNER/ADMIN: full workspace admin + approvals
- EDITOR: draft + schedule operations
- VIEWER: read-only analytics
- row-level isolation by workspaceId/clientId in data access layer

## Entitlements
- Creator, Pro, Agency plan matrix with server-side checks.
- DEV_BYPASS_BILLING for local development.

## LinkedIn reliability strategy
- LIVE_MODE: make actual API calls.
- SANDBOX_MODE: fallback fake IDs, unblock UX, surface diagnostics.
