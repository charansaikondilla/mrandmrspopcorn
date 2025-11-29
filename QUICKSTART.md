# 🚀 Quick Start Guide

This guide will help you get your Mr & Mrs Popcorn landing page up and running quickly.

## ⚡ Quick Commands

### For Windows Users

Double-click `quick-commands.bat` for an interactive menu, or use these commands in PowerShell:

```powershell
# Install dependencies
npm install

# Start development server
node "node_modules\vite\bin\vite.js"

# Build for production
node "node_modules\vite\bin\vite.js" build

# Push to GitHub
.\push.ps1

# Deploy to GitHub Pages
npm run deploy
```

### Development Commands

```bash
# Start dev server (opens at http://localhost:3000)
npm run dev
# or
node "node_modules\vite\bin\vite.js"

# Build for production
npm run build
# or
node "node_modules\vite\bin\vite.js" build

# Preview production build
npm run preview
```

## 📤 Push to GitHub

### Option 1: Using the Push Script (Recommended)

**Windows (PowerShell):**
```powershell
.\push.ps1
```

**Mac/Linux (Bash):**
```bash
chmod +x push.sh
./push.sh
```

### Option 2: Manual Git Commands

```bash
# First time setup
git init
git remote add origin https://github.com/charansaikondilla/mrandmrspopcorn.git

# Add and commit changes
git add .
git commit -m "Your commit message"

# Push to GitHub
git push -u origin main
```

## 🌐 Deploy to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your code to GitHub (using methods above)
2. GitHub Actions will automatically deploy your site
3. Visit: https://charansaikondilla.github.io/mrandmrspopcorn/

### Manual Deployment

```bash
# Install dependencies (if not done)
npm install

# Deploy to GitHub Pages
npm run deploy
```

## 🔧 Troubleshooting

### Issue: `npm run build` fails with path error

**Solution:** Use direct vite command:
```bash
node "node_modules\vite\bin\vite.js" build
```

### Issue: Can't run PowerShell scripts

**Solution:** Allow script execution:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Issue: Port 3000 already in use

**Solution:** Kill the process or use a different port:
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in vite.config.ts
server: { port: 3001 }
```

## 📝 Project Structure

```
d:\mr&mrspopcorn\
├── components/         # React components
├── dist/              # Built files (after npm run build)
├── node_modules/      # Dependencies
├── .github/           # GitHub Actions workflows
├── App.tsx            # Main application
├── constants.ts       # Data and configuration
├── index.html         # HTML template
├── index.tsx          # Entry point
├── package.json       # Dependencies
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
├── push.ps1           # Git push script (PowerShell)
├── push.sh            # Git push script (Bash)
└── README.md          # Documentation
```

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Test locally: `npm run dev`
3. ✅ Build: `npm run build`
4. ✅ Push to GitHub: `.\push.ps1`
5. ✅ Enable GitHub Pages in repository settings
6. 🎉 Visit your live site!

## 📞 Need Help?

- 📧 Email: charansaikondilla@gmail.com
- 📚 Full documentation: See `README.md`
- 🚀 Deployment guide: See `DEPLOYMENT.md`

## 🔗 Important Links

- **Repository**: https://github.com/charansaikondilla/mrandmrspopcorn
- **Live Site**: https://charansaikondilla.github.io/mrandmrspopcorn/
- **Local Dev**: http://localhost:3000

---

Made with ❤️ by Mr & Mrs Popcorn Team
