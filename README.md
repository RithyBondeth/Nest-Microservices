<div align="center">

# Nest Microservices

**A NestJS microservices boilerplate organized as a Turborepo monorepo.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)

</div>

---

## Overview

Nest Microservices is a starting point for building a NestJS microservices system inside a single Turborepo monorepo. It sets up three independent NestJS services (users, products, and orders) alongside shared ESLint, TypeScript, and UI packages. Turborepo builds, runs, and lints them together.

## Features

- **Three NestJS 11 services:** `users-service`, `products-service`, and `orders-service`, each independently runnable and testable.
- **Turborepo pipelines** for `build`, `dev`, `lint`, and `check-types` across every workspace.
- **Shared configuration packages** for ESLint and TypeScript.
- **Jest and Supertest** set up in each service.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | NestJS 11 |
| Language | TypeScript |
| Monorepo | Turborepo, npm workspaces |
| Testing | Jest, Supertest |
| Tooling | ESLint, Prettier |

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone https://github.com/RithyBondeth/Nest-Microservices.git
cd Nest-Microservices
npm install
npm run start:dev
```

Each service listens on `PORT` (default `3000`). Give each one its own port when running them together.

### Scripts

| Command | Description |
| --- | --- |
| `npm run start:dev` | Start every service in watch mode |
| `npm run build` | Build all workspaces |
| `npm run lint` | Lint all workspaces |
| `npm run check-types` | Type-check all workspaces |
| `npm run format` | Format with Prettier |

## Project Structure

```text
Nest-Microservices/
├── apps/
│   ├── users-service/
│   ├── products-service/
│   └── orders-service/
├── packages/
│   ├── eslint-config/       # Shared ESLint config
│   ├── typescript-config/   # Shared tsconfig presets
│   └── ui/                  # Shared UI package
└── turbo.json
```

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
