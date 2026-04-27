<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/cfa9c605-e7c1-4319-8efc-b60b58c53ca2

## Run Locally

**Prerequisites:**  [Bun](https://bun.sh) (recommended) and Node.js-compatible tooling as needed

1. Install dependencies from the repository root: `bun install`
2. Set `GEMINI_API_KEY` in [apps/web/.env.local](apps/web/.env.local) (or copy from `apps/web/.env.example`)
3. Run the app: `bun run dev` (serves the Vite app in [apps/web](apps/web) on port 3000)
