# 🍿 Mr & Mrs Popcorn - Landing Page

![Mr & Mrs Popcorn](https://i.ibb.co/7HTbqqJ/image.png)

A modern, responsive landing page for Mr & Mrs Popcorn - Hyderabad's premium hand-popped gourmet popcorn brand. Built with React, TypeScript, and Vite for optimal performance on web and mobile devices.

## 🌟 Features

- ✨ **Modern UI/UX** - Clean, attractive design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Tailwind CSS** - Utility-first styling for consistent design
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML
- ♿ **Accessible** - ARIA labels and keyboard navigation support
- 🎯 **Type Safe** - Written in TypeScript for better code quality

## 🚀 Live Demo

Visit the live site: [https://charansaikondilla.github.io/mrandmrspopcorn/](https://charansaikondilla.github.io/mrandmrspopcorn/)

## 📦 What's Included

- **Hero Section** - Eye-catching introduction with CTA buttons
- **Value Propositions** - Highlighting key benefits
- **Flavors Showcase** - Gallery of delicious popcorn flavors
- **Packages** - Pricing and package information
- **How It Works** - Step-by-step ordering process
- **Events** - Catering services information
- **Testimonials** - Customer reviews and feedback
- **Instagram CTA** - Social media integration
- **FAQ** - Common questions and answers
- **Footer** - Contact information and links
- **Floating CTA** - Persistent WhatsApp contact button

## 🛠️ Tech Stack

- **React 19** - Latest React with modern hooks
- **TypeScript 5.8** - Type-safe development
- **Vite 6** - Next-generation build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **Poppins & Montserrat** - Google Fonts for beautiful typography

## 📋 Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/charansaikondilla/mrandmrspopcorn.git
   cd mrandmrspopcorn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
mrandmrspopcorn/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Hero.tsx        # Hero section
│   ├── Flavors.tsx     # Flavors showcase
│   ├── Packages.tsx    # Pricing packages
│   ├── Events.tsx      # Events section
│   ├── Testimonials.tsx # Customer reviews
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── Footer.tsx      # Footer with contact info
│   └── ...             # Other components
├── App.tsx             # Main app component
├── constants.ts        # App constants and data
├── hooks.ts            # Custom React hooks
├── types.ts            # TypeScript type definitions
├── index.tsx           # App entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Update Content

Edit the constants in `constants.ts`:

```typescript
export const CONTACT = {
    phone: '7995597570',
    whatsappLink: '...',
    email: 'charansaikondilla@gmail.com',
    // ... other contact info
};

export const FLAVORS = [
    // Add or modify flavors
];

export const PACKAGES = [
    // Add or modify packages
];
```

### Modify Styling

The project uses Tailwind CSS. Update classes in component files or extend `tailwind.config.js` if needed.

### Add New Components

1. Create a new file in `components/`
2. Import and use in `App.tsx`

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Install dependencies (if not done)**
   ```bash
   npm install
   ```

2. **Build and deploy**
   ```bash
   npm run deploy
   ```

The site will be automatically deployed to: `https://charansaikondilla.github.io/mrandmrspopcorn/`

## 📱 Mobile Optimization

The site is fully optimized for mobile devices with:
- Responsive grid layouts
- Touch-friendly buttons and navigation
- Mobile hamburger menu
- Optimized images and lazy loading
- Fast loading times (<3s on 3G)

## 🔍 SEO Features

- Semantic HTML5 elements
- Meta tags for social sharing
- Alt text for all images
- Clean URL structure
- Fast page load times
- Mobile-friendly design

## 📞 Contact Information

**Mr & Mrs Popcorn**
- 📱 Phone: +91 7995597570
- 📧 Email: charansaikondilla@gmail.com
- 📍 Location: Hyderabad, India
- 📷 Instagram: [@mrandmrspopcorn](https://www.instagram.com/mrandmrspopcorn)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Mr & Mrs Popcorn.

## 🙏 Acknowledgments

- Design inspiration from modern food brands
- Icons from Heroicons
- Images hosted on ImgBB
- Fonts from Google Fonts

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Mobile Friendly**: 100%

## 🐛 Bug Reports

If you discover any bugs, please create an issue on GitHub with:
- Bug description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📈 Future Enhancements

- [ ] Online ordering system integration
- [ ] Admin dashboard for orders
- [ ] Blog section for recipes
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Progressive Web App (PWA)

---

Made with ❤️ by Mr & Mrs Popcorn Team | Hyderabad, India 🇮🇳
