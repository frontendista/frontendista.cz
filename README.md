<p align="center">
  <a href="https://frontendista.cz">
    <img src="https://raw.githubusercontent.com/frontendista/frontendista.cz/main/apps/web/public/favicon.svg" alt="Frontendista.cz logo" height="128">
  </a>
  <h1 align="center">frontendista.cz</h1>
  <p align="center">
    <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
      <img alt="" src="https://img.shields.io/badge/Pavel_Sušický-SW Engineer-magenta?style=for-the-badge&labelColor=000000">
    </a>
  </p>
  <p align="center">Collection of personal websites and associated projects of <a href="https://frontendista.cz"><b>frontendista.cz</b></a> domain owned by Pavel Sušický.</p>
</p>

## 1. Local development

### 1.1 Prerequisites

- [**node.js**](https://nodejs.org)
- [**pnpm**](https://pnpm.io)

### 1.2 Optional prerequisites

These are used for less common tasks (font generation, performance testing).

- [**python3**](https://python.org)

### 1.2 **Installation**

```sh
git clone git@github.com:frontendista/frontendista.cz.git

cd frontendista.cz

pnpm install
```

### 1.3 Development

See each app's README for more details.

## 2. Projects

| Name                                | Description                                                                   | Port                               |
| ----------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------- |
| [**API**](./apps/api)               | API documentation using [**redoc**](https://github.com/Redocly/redoc)         | 3002                               |
| [**Blog**](./apps/blog)             | Blog website in [**Astro.js**](https://github.com/withastro/astro)            | 3004                                |
| [**Cloudflare**](./apps/cloudflare) | API using [**Cloudflare Workers**](https://github.com/cloudflare/workers-sdk) | 3003                               |
| [**Web**](./apps/web)               | Personal website in [**Astro.js**](https://github.com/withastro/astro)        | 3000 for `dev`, 3001 for `preview` |

## 3. Packages

| Name                                                  | Description                                 |
| ----------------------------------------------------- | ------------------------------------------- |
| [**@frontendista/validation**](./packages/validation) | Validation rules shared across the projects |
| [**@frontendista/email**](./packages/email)           | -                                           |
