# flystr

flystr (later branded **tripfixed**) was a flight-deal discovery product. Users picked
their home airports and travel preferences, and the platform continuously crawled fare
data to surface unusually cheap flights and bundled trip deals — then notified users when
a matching deal appeared.

This repository is the **customer-facing web application** and the canonical entry point
to the project. It is the pinned showcase repo: the full architecture overview for the
whole family of services lives here.

## Multi-repo architecture

flystr was built as a set of small, independently deployable services rather than a
monolith. Each repo does one job and is containerised and shipped via CircleCI.

| Repo | Role |
|------|------|
| **flystr** (this repo) | React single-page app + Node/Express SSR server. The product UI: search, deal browsing, accounts, checkout. |
| **flystr-api** | GraphQL API (Apollo Server + Express) backed by MongoDB. Auth, users, deals, trips, payments. The system of record. |
| **flystr-crawler** | Headless background worker. Continuously crawls flight fares, computes deals from airport city-pairs, persists them, and pushes notifications to subscribed users. |
| **flystr-images** | Tiny Express image service. Serves destination imagery resized on demand, with hash-based caching and graceful fallbacks. |
| **nuxt-tripfixed** | Server-side-rendered marketing / landing site (Nuxt 2 + TypeScript) under the later *tripfixed* brand. |

Request flow: the **crawler** populates MongoDB with fresh deals → the **API** exposes
them over GraphQL → this **web app** renders them and handles accounts and Stripe
checkout → **flystr-images** supplies destination photography → **nuxt-tripfixed** is the
public landing site that funnels visitors into the app.

## This app's stack

- **React 16** SPA bootstrapped with Create React App (`react-scripts`), routed with
  React Router 5.
- **Redux** for state — `redux-thunk` and `redux-promise-middleware` for async API calls.
- **Express SSR server** (`server/`) renders the app server-side for fast first paint and
  SEO, with `helmet` for security headers and a custom `build.js` pipeline.
- **Emotion** + **Material-UI v4** for styling; Storybook for component development.
- **Formik** + **Yup** for forms and validation.
- **Stripe Elements** for payments, **Google OAuth** for sign-in, **JWT** for sessions.
- **Sentry** for error monitoring; **Jest** for tests; **CircleCI** + **Docker** for CI/CD.

## Notable technical decisions

- **Service-per-concern over a monolith.** Crawling fares is bursty and CPU-heavy;
  serving the UI is latency-sensitive. Splitting them into separate repos and containers
  let each scale and deploy on its own cadence, and kept the crawler's failures from
  taking down the storefront.
- **GraphQL as the single API contract.** With a React web client (and a Nuxt landing
  site) consuming the same data, GraphQL let each frontend request exactly the fields it
  needed instead of maintaining bespoke REST endpoints per view.
- **Server-side rendering for a deal marketplace.** Deal pages need to be indexable and
  fast on first load. The web app runs its own Express SSR layer, and the marketing site
  is a separate SSR Nuxt app — SEO was treated as a first-class requirement, not an
  afterthought.
- **A dedicated image service.** Destination photography is heavy and repeated across
  many deal cards. Isolating resizing + hash-based caching into `flystr-images` kept
  image delivery off the critical path of both the API and the app.

## Running locally

```bash
npm install
npm start        # CRA dev server
npm run build    # production build via build.js
npm test         # Jest
```

Environment configuration lives in `.env.development` / `.env.production` (API endpoint,
Stripe keys, Google OAuth client ID, Sentry DSN).

---

*This is a portfolio / archive repository documenting a previously operated product.*
