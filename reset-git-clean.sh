#!/bin/bash
# reset-git-clean.sh
# Run this inside your zemba-website folder

echo "⚠️  Removing old git history..."
rm -rf .git

echo "📝 Creating .gitignore..."
cat > .gitignore <<'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Next.js build output
.next/
out/

# Production
/build

# Testing
coverage/

# Misc
.DS_Store
*.pem

# Local env
.env
.env.local
.env.*.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
EOF

echo "📦 Initializing fresh git repo..."
git init
git add .
git commit -m "Initial commit (clean, without node_modules)"
git branch -M main

echo "🔗 Adding remote..."
# Replace with your PAT if you want to skip password prompts
git remote add origin https://github.com/wandering-green/zemba-website.git

echo "🚀 Pushing clean repo..."
git push -u origin main --force

echo "✅ Done! Repo is clean and pushed without node_modules."
