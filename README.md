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
