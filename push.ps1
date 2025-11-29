# GitHub Push Script for Mr & Mrs Popcorn (PowerShell)
# This script helps you quickly commit and push changes to GitHub

Write-Host "🍿 Mr & Mrs Popcorn - GitHub Push Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
    git remote add origin https://github.com/charansaikondilla/mrandmrspopcorn.git
}

# Show current status
Write-Host "📊 Current status:" -ForegroundColor Yellow
git status --short
Write-Host ""

# Add all changes
Write-Host "➕ Adding all changes..." -ForegroundColor Yellow
git add .

# Get commit message from user or use default
$commitMsg = Read-Host "💬 Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m $commitMsg

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "🌐 Your site will be available at:" -ForegroundColor Cyan
Write-Host "   https://charansaikondilla.github.io/mrandmrspopcorn/" -ForegroundColor White
Write-Host ""
Write-Host "⏰ Note: It may take 1-2 minutes for changes to appear on the live site." -ForegroundColor Yellow
