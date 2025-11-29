# 🚀 DEPLOY NOW - Copy & Paste These Commands

## Step 1: Push to GitHub (Choose ONE method)

### Method A: Using Push Script (Recommended)
```powershell
.\push.ps1
```

### Method B: Manual Commands
```powershell
# Initialize git (if needed)
git init
git remote add origin https://github.com/charansaikondilla/mrandmrspopcorn.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Mr & Mrs Popcorn landing page"

# Push to GitHub
git push -u origin main
```

## Step 2: Enable GitHub Pages

1. Open: https://github.com/charansaikondilla/mrandmrspopcorn/settings/pages

2. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
   - Click **Save**

## Step 3: Wait for Deployment

1. Check Actions: https://github.com/charansaikondilla/mrandmrspopcorn/actions

2. Wait for green checkmark ✅ (takes 1-2 minutes)

## Step 4: View Your Live Site

🌐 **Your site will be live at:**
https://charansaikondilla.github.io/mrandmrspopcorn/

---

## 🎯 Quick Test Locally First

```powershell
# Start development server
node "node_modules\vite\bin\vite.js"

# Open: http://localhost:3000
```

---

## 📝 Future Updates

When you make changes:

```powershell
# 1. Test locally
node "node_modules\vite\bin\vite.js"

# 2. Build to verify
node "node_modules\vite\bin\vite.js" build

# 3. Push to GitHub
.\push.ps1

# GitHub Actions will automatically deploy! 🎉
```

---

## ⚡ One-Click Menu

Double-click: **quick-commands.bat**

---

## ✅ Checklist

- [ ] Run `.\push.ps1` or manual git commands
- [ ] Enable GitHub Pages (Actions source)
- [ ] Wait for deployment (check Actions tab)
- [ ] Visit your live site
- [ ] Test on mobile devices
- [ ] Share the link! 🎉

---

**Need help?** Email: charansaikondilla@gmail.com
