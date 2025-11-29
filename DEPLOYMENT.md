# 🚀 Deployment Guide

This guide will help you deploy your Mr & Mrs Popcorn landing page to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Node.js and npm installed

## Step 1: Push Code to GitHub

### First Time Setup

1. **Navigate to your project directory**
   ```bash
   cd "d:\mr&mrspopcorn"
   ```

2. **Initialize Git (if not already done)**
   ```bash
   git init
   ```

3. **Add all files to Git**
   ```bash
   git add .
   ```

4. **Commit your changes**
   ```bash
   git commit -m "Initial commit: Mr & Mrs Popcorn landing page"
   ```

5. **Add GitHub remote repository**
   ```bash
   git remote add origin https://github.com/charansaikondilla/mrandmrspopcorn.git
   ```

6. **Push to GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Subsequent Updates

When you make changes to your code:

```bash
git add .
git commit -m "Your commit message describing the changes"
git push origin main
```

## Step 2: Deploy to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys your site when you push to the main branch.

1. **Enable GitHub Pages in your repository**
   - Go to your GitHub repository
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Build and deployment"
   - Select "Source": GitHub Actions
   - Save the settings

2. **Push your code** (as shown in Step 1)

3. **Wait for deployment**
   - Go to the "Actions" tab in your repository
   - You'll see the deployment workflow running
   - Once complete (green checkmark), your site is live!

4. **Visit your site**
   - Your site will be available at: `https://charansaikondilla.github.io/mrandmrspopcorn/`

### Method 2: Manual Deployment with npm

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Deploy with gh-pages**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Source": Deploy from a branch
   - Select "Branch": gh-pages
   - Click Save

4. **Visit your site**
   - Your site will be available at: `https://charansaikondilla.github.io/mrandmrspopcorn/`

## Step 3: Verify Deployment

1. Open your browser and navigate to: `https://charansaikondilla.github.io/mrandmrspopcorn/`
2. Check that all sections are loading correctly
3. Test navigation and mobile responsiveness
4. Verify all links and buttons work

## Troubleshooting

### Issue: 404 Error on GitHub Pages

**Solution:**
- Check that `base` in `vite.config.ts` matches your repository name
- Should be: `base: '/mrandmrspopcorn/'`
- Rebuild and redeploy

### Issue: Assets Not Loading

**Solution:**
- Ensure all image URLs are absolute or use proper relative paths
- Check browser console for errors
- Verify all external resources are accessible

### Issue: GitHub Actions Failing

**Solution:**
- Check the Actions tab for error messages
- Ensure all dependencies are correctly listed in package.json
- Verify Node.js version compatibility

### Issue: Changes Not Appearing

**Solution:**
- Clear browser cache (Ctrl + Shift + R or Cmd + Shift + R)
- Wait a few minutes for CDN to update
- Check if the workflow completed successfully

## Update Workflow

For making updates to your live site:

1. **Make changes locally**
   ```bash
   # Edit your files
   ```

2. **Test locally**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

3. **Build and test production build**
   ```bash
   npm run build
   npm run preview
   ```

4. **Commit and push changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

5. **Automatic deployment will trigger**
   - GitHub Actions will automatically build and deploy
   - Check the Actions tab to monitor progress

## Custom Domain (Optional)

To use a custom domain like `www.mrandmrspopcorn.com`:

1. **Add CNAME file**
   ```bash
   echo "www.mrandmrspopcorn.com" > public/CNAME
   ```

2. **Update DNS settings** at your domain provider:
   - Add a CNAME record pointing to: `charansaikondilla.github.io`
   - Or A records pointing to GitHub Pages IPs

3. **Configure in GitHub**
   - Go to Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## Performance Optimization

Your site is already optimized with:
- ✅ Code splitting
- ✅ Minification
- ✅ Tree shaking
- ✅ Image optimization
- ✅ Lazy loading

## Monitoring

After deployment, monitor:
- **GitHub Actions**: Check for successful deployments
- **Analytics**: Add Google Analytics if needed
- **Performance**: Use Lighthouse in Chrome DevTools
- **Mobile**: Test on real mobile devices

## Backup

Always keep a backup of your code:
- GitHub serves as your primary backup
- Consider additional backups for important assets
- Document any configuration changes

## Support

If you encounter issues:
1. Check GitHub Actions logs
2. Review this guide's troubleshooting section
3. Check GitHub Pages documentation
4. Contact: charansaikondilla@gmail.com

---

🎉 Congratulations! Your Mr & Mrs Popcorn landing page is now live!
