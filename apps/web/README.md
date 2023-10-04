# Web

## 1. Local development

### 1.1 Environment variables

#### 1.1.1 Required

| Name                  | Value                                      | Default       |
| --------------------- | ------------------------------------------ | ------------- |
| VERCEL_ENV            | `development` or `preview` or `production` | `development` |
| GITHUB_PERSONAL_TOKEN | See [**.env.example**](./.env.example)     | -             |
| SPOTIFY_CLIENT_ID     | See [**.env.example**](./.env.example)     | -             |
| SPOTIFY_CLIENT_SECRET | See [**.env.example**](./.env.example)     | -             |
| SPOTIFY_REFRESH_TOKEN | See [**.env.example**](./.env.example)     | -             |

#### 1.1.2 Optional

| Name         | Value                                         | Default |
| ------------ | --------------------------------------------- | ------- |
| ENABLE_MOCKS | `0` or `1` [**.env.example**](./.env.example) | `0`     |

### 1.2 Commands

```sh
cd apps/web

# Development server
pnpm dev

# Build
pnpm build

# Build & preview
pnpm build:preview

# Build & preview with production environment
pnpm build:preview:prod

# E2E tests
pnpm test
```
