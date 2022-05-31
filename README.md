# Project Frontendista

Monorepo containing all repositories related to **[frontendista.cz 🚀](https://frontendista.cz)** project.

## 1 Applications

| Name                            | CI Status                                                                                                                                                             |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[frontend](./apps/frontend)** | ![CI status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Ffrontendista%2Ffrontendista.cz%2Fbadge%3Fref%3Dmain&style=for-the-badge) |
| **[cms](./apps/cms)**           | TODO                                                                                                                                                                  |
| **[api](./apps/api)**           | TODO                                                                                                                                                                  |

## 2 Getting started

### 2.1 Prerequisites

1. Install **[node.js](https://nodejs.org/en)** (>=16)
2. Install **[pnpm](https://pnpm.io/installation)** (>=7)
3. Configure your **[hosts file](<https://en.wikipedia.org/wiki/Hosts_(file)>)** to map `127.0.0.1 frontendista.test`

### 2.2 Installation

```sh
# Clone repository
git clone git@github.com:frontendista/frontendista.cz.git
cd frontendista.cz

# Configure your .env file (see step 1.2) then continue

# Install dependencies
pnpm install
```

### 2.3 Common commands

```sh
# Start development server
pnpm dev
```
