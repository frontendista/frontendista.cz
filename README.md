# Project Frontendista

Monorepo containing all repositories related to **[frontendista.cz 🚀](https://frontendista.cz)** project.

## 1 Applications

| Name                            | CI Status                                                                                        | CD Status                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **[frontend](./apps/frontend)** | ![](https://github.com/frontendista/frontendista.cz/actions/workflows/frontend-ci.yml/badge.svg) | ![](https://github.com/frontendista/frontendista.cz/actions/workflows/frontend-cd.yml/badge.svg) |
| **[cms](./apps/cms)**           | ![](https://github.com/frontendista/frontendista.cz/actions/workflows/cms-ci.yml/badge.svg)      | ![](https://github.com/frontendista/frontendista.cz/actions/workflows/cms-cd.yml/badge.svg)      |
| **[api](./apps/api)**           | -                                                                                                | ![](https://github.com/frontendista/frontendista.cz/actions/workflows/api-cd.yml/badge.svg)      |

## 2 Getting started

### 2.1 Prerequisites

1. Install **[node.js](https://nodejs.org/en)** (>=16)
2. Install **[pnpm](https://pnpm.io/installation)** (>=7)
3. Configure your **[hosts file](<https://en.wikipedia.org/wiki/Hosts_(file)>)** to map `127.0.0.1 frontendista.test`

### 2.2 Environment variables

TODO

### 2.3 Installation

```sh
# Clone repository
git clone git@github.com:frontendista/frontendista.cz.git
cd frontendista.cz

# Configure your .env file (see step 2.2) then continue

# Install dependencies
pnpm install
```

### 2.4 Common commands

```sh
# Start development server
pnpm dev
```
