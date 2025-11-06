#!/bin/bash

# GitHub Push Script for Mr & Mrs Popcorn
# This script helps you quickly commit and push changes to GitHub

echo "🍿 Mr & Mrs Popcorn - GitHub Push Script"
echo "========================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git remote add origin https://github.com/charansaikondilla/mrandmrspopcorn.git
fi

# Show current status
echo "📊 Current status:"
git status --short
echo ""

# Add all changes
echo "➕ Adding all changes..."
git add .

# Get commit message from user or use default
if [ -z "$1" ]; then
    read -p "💬 Enter commit message (or press Enter for default): " COMMIT_MSG
    if [ -z "$COMMIT_MSG" ]; then
        COMMIT_MSG="Update: $(date +"%Y-%m-%d %H:%M")"
    fi
else
    COMMIT_MSG="$1"
fi

# Commit changes
echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo "🌐 Your site will be available at:"
echo "   https://charansaikondilla.github.io/mrandmrspopcorn/"
echo ""
echo "⏰ Note: It may take 1-2 minutes for changes to appear on the live site."
