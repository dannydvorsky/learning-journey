
# Git & .gitignore Project Setup Checklist

## ✅ 1. Create Your Project Directory
```bash
mkdir your-project-name
cd your-project-name
```

## ✅ 2. Create a `.gitignore` File and Populate It
Create the file:
```bash
touch .gitignore
```

Recommended content for Node.js (edit based on your stack):
```bash
# Node modules
node_modules/

# Environment variables
.env
.env.local
.env.*.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# OS generated files
.DS_Store
Thumbs.db

# IDE and editor folders
.vscode/
.idea/

# Coverage reports
coverage/

# Build output
dist/
build/

# Temporary files
*.tgz
*.tar.gz

# npm cache
.npm

# SQLite DBs
*.sqlite

# TypeScript cache
*.tsbuildinfo
```

## ✅ 3. Initialize a Git Repository
```bash
git init
```

## ✅ 4. Check Git Status
```bash
git status
```

## ✅ 5. Add All Files (except those ignored)
```bash
git add -A
```

## ✅ 6. Commit Changes
```bash
git commit -m "Initial commit"
```

## ✅ 7. Create a New GitHub Repository
- Go to [github.com](https://github.com)
- Create a new repository (without README if your local repo already has one)
- Copy the SSH URL (example: `git@github.com:your-username/your-repo.git`)

## ✅ 8. Add Remote Origin
```bash
git remote add origin git@github.com:your-username/your-repo.git
```

## ✅ 9. Push to GitHub and Set Upstream
```bash
git push --set-upstream origin main
```

## ✅ 10. Confirm Everything
```bash
git status
git remote -v
git log --oneline
```

---

> ✅ **Optional Add-On:**  
Set VS Code as your global Git editor:
```bash
git config --global core.editor "code --wait"
```

> ✅ **Optional:** Check SSH connection:
```bash
ssh -T git@github.com
```

