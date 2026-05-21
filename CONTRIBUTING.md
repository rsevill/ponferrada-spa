# Git Workflow — Ponferrada Polymedic SPA

## Branch Structure

| Branch | Purpose |
|--------|---------|
| `main` | Production — live at ponferrada-spa.vercel.app |
| `develop` | Staging — tested and reviewed changes |
| `feature/xxx` | Your own working branch |

---

## First Time Setup

1. Accept the GitHub invitation (check your email)
2. Install the tools:
   - Git: https://git-scm.com
   - Node.js (LTS): https://nodejs.org
   - VS Code: https://code.visualstudio.com
3. Clone the repo:
```
git clone https://github.com/rsevill/ponferrada-spa.git
cd ponferrada-spa
npm install
```

---

## Daily Workflow

### 1. Start a new task — create your branch
```
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```
> Example: `feature/update-doctors-list`, `feature/fix-hours-page`

### 2. Make your changes in VS Code
```
npm run dev
```
Preview at `http://localhost:5173`

### 3. Save and push your work
```
git add .
git commit -m "brief description of what you changed"
git push origin feature/your-feature-name
```

### 4. Open a Pull Request
- Go to: https://github.com/rsevill/ponferrada-spa/pulls
- Click **"New pull request"**
- Set: `feature/your-feature-name` → `develop`
- Add a short description of your changes
- Click **"Create pull request"**

> Wait for the repo owner to review and merge.

---

## Rules
- ❌ Never push directly to `main` or `develop`
- ✅ Always branch off `develop`
- ✅ Always pull latest `develop` before creating a new branch
- ✅ One feature per branch — keep changes small and focused
