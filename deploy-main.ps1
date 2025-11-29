# Build to docs/ and commit to main branch for GitHub Pages
# Usage: Open PowerShell in repo root and run: ./deploy-main.ps1 -Message "deploy message"
param(
    [string]$Message = "chore: build production docs for GitHub Pages"
)

Write-Host "Building production files into docs/..." -ForegroundColor Cyan
node "node_modules\vite\bin\vite.js" build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Aborting deploy." -ForegroundColor Red
    exit 1
}

Write-Host "Staging docs/ folder..." -ForegroundColor Cyan
git add docs

Write-Host "Committing..." -ForegroundColor Cyan
git commit -m $Message

Write-Host "Pushing to origin main..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deploy complete. Visit: https://charansaikondilla.github.io/mrandmrspopcorn/" -ForegroundColor Green
} else {
    Write-Host "Push failed. Check git status and try again." -ForegroundColor Red
    exit 1
}
