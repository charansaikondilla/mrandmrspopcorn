@echo off
REM Quick Commands for Mr & Mrs Popcorn Project
REM ============================================

echo.
echo 🍿 Mr & Mrs Popcorn - Quick Commands
echo ====================================
echo.
echo Choose an option:
echo.
echo [1] Install dependencies (npm install)
echo [2] Start development server (npm run dev)
echo [3] Build for production (npm run build)
echo [4] Preview production build (npm run preview)
echo [5] Deploy to GitHub Pages (npm run deploy)
echo [6] Push to GitHub (runs push.ps1)
echo [7] Check for errors (npm run build --dry-run)
echo [0] Exit
echo.

set /p choice="Enter your choice (0-7): "

if "%choice%"=="1" (
    echo.
    echo Installing dependencies...
    npm install
    pause
) else if "%choice%"=="2" (
    echo.
    echo Starting development server...
    echo Open http://localhost:3000 in your browser
    node "node_modules\vite\bin\vite.js"
) else if "%choice%"=="3" (
    echo.
    echo Building for production...
    node "node_modules\vite\bin\vite.js" build
    pause
) else if "%choice%"=="4" (
    echo.
    echo Previewing production build...
    node "node_modules\vite\bin\vite.js" preview
) else if "%choice%"=="5" (
    echo.
    echo Building and deploying to GitHub Pages...
    node "node_modules\vite\bin\vite.js" build
    node "node_modules\gh-pages\bin\gh-pages.js" -d dist
    pause
) else if "%choice%"=="6" (
    echo.
    echo Running Git push script...
    powershell -ExecutionPolicy Bypass -File push.ps1
    pause
) else if "%choice%"=="7" (
    echo.
    echo Checking for errors...
    node "node_modules\vite\bin\vite.js" build --mode development
    pause
) else if "%choice%"=="0" (
    exit
) else (
    echo Invalid choice. Please try again.
    pause
    cls
    goto :start
)
