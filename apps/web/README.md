# Web

## 1. Local development

### 1.1 Environment variables

| Name       | Value                                      | Default       |
| ---------- | ------------------------------------------ | ------------- |
| VERCEL_ENV | `development` or `preview` or `production` | `development` |
| GITHUB_PERSONAL_TOKEN | See [**.env.example**](./.env.example) | - |

### 1.2 Commands

```sh
cd apps/web

# Development server
pnpm dev

# Build
pnpm build

# Build & preview
pnpm build:preview

# E2E tests
pnpm test
```
