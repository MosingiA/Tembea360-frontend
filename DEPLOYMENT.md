# Tembea360 Frontend - Deployment Guide

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/afyacare/Tembea360-frontend.git
cd Tembea360-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 2. Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

### 3. GitHub Pages
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/Tembea360-frontend"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### 4. AWS S3 + CloudFront
```bash
# Build the project
npm run build

# Upload dist/ folder to S3 bucket
# Configure CloudFront distribution
```

## 🔧 Environment Configuration

### Required Environment Variables
```env
# API Configuration
VITE_API_URL=https://your-api-domain.com/api
VITE_API_VERSION=v1

# Authentication
VITE_JWT_SECRET=your_jwt_secret

# Payment Integration
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_key
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id

# External Services
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_name

# App Configuration
VITE_APP_NAME=Tembea360
VITE_APP_URL=https://your-domain.com
VITE_SUPPORT_EMAIL=support@tembea360.com
```

### Platform-Specific Setup

#### Vercel
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

#### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set environment variables in Netlify dashboard

#### AWS S3
1. Create S3 bucket with static website hosting
2. Upload `dist/` contents to bucket
3. Configure CloudFront for CDN
4. Set up Route 53 for custom domain

## 📊 Performance Optimization

### Build Optimization
- Code splitting with React.lazy()
- Tree shaking enabled
- CSS purging with Tailwind
- Image optimization
- Bundle analysis with `npm run build -- --analyze`

### Runtime Optimization
- Service worker for caching
- Lazy loading for images
- Virtual scrolling for large lists
- Debounced search inputs

## 🔒 Security Considerations

### Production Checklist
- [ ] Environment variables configured
- [ ] HTTPS enabled
- [ ] CSP headers configured
- [ ] API endpoints secured
- [ ] Authentication tokens secured
- [ ] Error handling implemented
- [ ] Rate limiting configured

### Security Headers
```nginx
# Nginx configuration
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
```

## 📈 Monitoring & Analytics

### Recommended Tools
- **Error Tracking**: Sentry
- **Analytics**: Google Analytics 4
- **Performance**: Web Vitals
- **Uptime**: Pingdom or UptimeRobot

### Implementation
```javascript
// Add to main.jsx
import { initSentry } from './utils/sentry';
import { initAnalytics } from './utils/analytics';

if (import.meta.env.PROD) {
  initSentry();
  initAnalytics();
}
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

#### Environment Variables Not Loading
- Ensure variables start with `VITE_`
- Check `.env` file is in project root
- Restart development server after changes

#### Routing Issues in Production
- Configure server for SPA routing
- Add `_redirects` file for Netlify
- Configure `vercel.json` for Vercel

### Performance Issues
```bash
# Analyze bundle size
npm run build -- --analyze

# Check for unused dependencies
npx depcheck

# Audit packages
npm audit
```

## 📞 Support

For deployment issues:
- Check the [GitHub Issues](https://github.com/afyacare/Tembea360-frontend/issues)
- Contact: support@tembea360.com
- Documentation: [README.md](./README.md)

---

**Happy Deploying! 🚀**