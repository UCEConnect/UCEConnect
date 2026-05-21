# UCEConnect — Backend

REST API for the UCEConnect incident management system, built for Universidad Central del Ecuador. Allows students to report academic incidents and enables managers and administrators to track, assign, and resolve them.

---

## Architecture

This project follows **Domain-Driven Design (DDD)** combined with **Hexagonal Architecture** (Ports & Adapters).

```
src/
├── domain/           # Business logic — zero external dependencies
│   ├── incidents/
│   ├── users/
│   ├── notifications/
│   └── shared/
├── application/      # Use cases — orchestrates domain logic
│   ├── incidents/
│   ├── users/
│   └── notifications/
└── infrastructure/   # Adapters — Express, PostgreSQL, OpenAI, Cloudinary
    ├── db/
    ├── repositories/
    ├── services/
    └── http/
```

**Dependency rule:** Domain ← Application ← Infrastructure. The domain layer never imports Express, pg, or any external library.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express |
| Database | PostgreSQL (Supabase) |
| Auth | JWT + refresh tokens |
| AI Classification | OpenAI GPT-4o-mini |
| File Storage | Cloudinary |
| Deploy | Render.com |
| Containers | Docker Compose |

---

## Team

| Name | Role |
|---|---|
| Adrian Lumbi | Backend & Database |
| Nayeli Guayas | Frontend & UI/UX |
| Luis Paspuezán | DevOps & QA |

---

## Project Status

> Semana 0 — Base structure and architecture defined. Development starts Week 1.

---

*Universidad Central del Ecuador — Programación Web 2026*