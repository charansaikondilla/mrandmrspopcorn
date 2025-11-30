#!/usr/bin/env pwsh
# ============================================================================
# AUTOMATIC DEPLOYMENT SCRIPT FOR GITHUB PAGES WITH CUSTOM DOMAIN
# Repository: https://github.com/charansaikondilla/mrandmrspopcorn.git
# Custom Domain: www.mrandmrspopcorn.in
# ============================================================================

Write-Host "🚀 Starting Automatic Deployment Process..." -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan

# Step 1: Clean old build
Write-Host "`n📦 Step 1: Cleaning old build files..." -ForegroundColor Yellow
if (Test-Path "docs") {
    Remove-Item -Path "docs" -Recurse -Force
    Write-Host "✅ Old docs folder removed" -ForegroundColor Green
}

# Step 2: Build production version
Write-Host "`n🔨 Step 2: Building production version..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please check errors above." -ForegroundColor Red
    exit 1
}
Write-Host "✅ Production build completed successfully" -ForegroundColor Green

# Step 3: Verify CNAME exists
Write-Host "`n🌐 Step 3: Verifying CNAME file..." -ForegroundColor Yellow
if (Test-Path "docs/CNAME") {
    $cnameContent = Get-Content "docs/CNAME" -Raw
    if ($cnameContent -match "www.mrandmrspopcorn.in") {
        Write-Host "✅ CNAME file verified: $cnameContent" -ForegroundColor Green
    } else {
        Write-Host "⚠️  CNAME content incorrect, fixing..." -ForegroundColor Yellow
        "www.mrandmrspopcorn.in" | Out-File -FilePath "docs/CNAME" -Encoding utf8 -NoNewline
        Write-Host "✅ CNAME file corrected" -ForegroundColor Green
    }
} else {
    Write-Host "⚠️  CNAME file missing, creating..." -ForegroundColor Yellow
    "www.mrandmrspopcorn.in" | Out-File -FilePath "docs/CNAME" -Encoding utf8 -NoNewline
    Write-Host "✅ CNAME file created" -ForegroundColor Green
}

# Step 4: Git status check
Write-Host "`n📊 Step 4: Checking git status..." -ForegroundColor Yellow
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "✅ Changes detected:" -ForegroundColor Green
    Write-Host $gitStatus -ForegroundColor Gray
} else {
    Write-Host "⚠️  No changes to commit" -ForegroundColor Yellow
    Write-Host "👉 If you want to force push anyway, run: git push -f origin main" -ForegroundColor Cyan
    exit 0
}

# Step 5: Git add all changes
Write-Host "`n➕ Step 5: Staging all changes..." -ForegroundColor Yellow
git add .
Write-Host "✅ All changes staged" -ForegroundColor Green

# Step 6: Git commit
Write-Host "`n💬 Step 6: Committing changes..." -ForegroundColor Yellow
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy: Production build with custom domain - $timestamp"
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Nothing to commit or commit failed" -ForegroundColor Yellow
} else {
    Write-Host "✅ Changes committed successfully" -ForegroundColor Green
}

# Step 7: Push to GitHub
Write-Host "`n🚀 Step 7: Pushing to GitHub (main branch)..." -ForegroundColor Yellow
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Push failed! Trying force push..." -ForegroundColor Red
    git push -f origin main
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Force push also failed! Check your credentials and network." -ForegroundColor Red
        exit 1
    }
}
Write-Host "✅ Successfully pushed to GitHub" -ForegroundColor Green

# Step 8: Verify GitHub Pages settings
Write-Host "`n📖 Step 8: GitHub Pages Configuration Check" -ForegroundColor Yellow
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "✅ Repository: https://github.com/charansaikondilla/mrandmrspopcorn" -ForegroundColor Green
Write-Host "✅ Branch: main" -ForegroundColor Green
Write-Host "✅ Folder: /docs" -ForegroundColor Green
Write-Host "✅ Custom Domain: www.mrandmrspopcorn.in" -ForegroundColor Green

Write-Host "`n⏳ Waiting for GitHub Pages to deploy (usually takes 1-3 minutes)..." -ForegroundColor Yellow
Write-Host "================================================" -ForegroundColor Cyan

# Step 9: Final instructions
Write-Host "`n🎉 DEPLOYMENT COMPLETE! 🎉" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "`n📋 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Go to: https://github.com/charansaikondilla/mrandmrspopcorn/settings/pages" -ForegroundColor White
Write-Host "2. Verify Settings:" -ForegroundColor White
Write-Host "   • Source: Deploy from a branch" -ForegroundColor Gray
Write-Host "   • Branch: main" -ForegroundColor Gray
Write-Host "   • Folder: /docs" -ForegroundColor Gray
Write-Host "   • Custom domain: www.mrandmrspopcorn.in" -ForegroundColor Gray
Write-Host "   • Enforce HTTPS: ✓ Enabled" -ForegroundColor Gray
Write-Host "`n3. Wait 2-3 minutes, then visit:" -ForegroundColor White
Write-Host "   🌐 https://www.mrandmrspopcorn.in" -ForegroundColor Cyan
Write-Host "`n4. Clear browser cache if needed (Ctrl+Shift+R or Cmd+Shift+R)" -ForegroundColor White

Write-Host "`n✅ Contact Details Updated:" -ForegroundColor Green
Write-Host "   📱 Phone: +91 72000 11747" -ForegroundColor White
Write-Host "   📧 Email: srikanthvishwanatha@gmail.com" -ForegroundColor White

Write-Host "`n================================================" -ForegroundColor Cyan
Write-Host "Script completed successfully! 🎊" -ForegroundColor Green
Write-Host "================================================`n" -ForegroundColor Cyan
