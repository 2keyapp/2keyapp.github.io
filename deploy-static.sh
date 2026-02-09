#!/bin/bash

# Build the static site
echo "Building static site..."
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "Error: Build failed or 'out' folder not found"
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Checkout static branch (create if it doesn't exist)
echo "Switching to static branch..."
git checkout static 2>/dev/null || git checkout -b static

# Remove all files except .git
echo "Cleaning static branch..."
git rm -rf . --ignore-unmatch 2>/dev/null || true
find . -maxdepth 1 ! -name '.' ! -name '.git' ! -name 'out' -exec rm -rf {} + 2>/dev/null || true

# Copy contents of out/ to root
echo "Copying static files..."
cp -r out/* .
cp out/.nojekyll . 2>/dev/null || true

# Add all files
git add -A

# Commit
echo "Committing static files..."
git commit -m "Deploy static site - $(date +%Y-%m-%d)" || echo "No changes to commit"

# Push to static branch
echo "Pushing to static branch..."
git push origin static --force

# Switch back to original branch
echo "Switching back to $CURRENT_BRANCH branch..."
git checkout $CURRENT_BRANCH

echo "Deployment complete! Static files are now in the static branch."






