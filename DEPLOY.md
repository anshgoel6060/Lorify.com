# 🚀 Lorify - Deployment Guide

## ⚠️ Important Security Note

**The current setup exposes your API key in the frontend code.** This is fine for:
- ✅ Personal use
- ✅ Local testing
- ✅ Trusted environments

**NOT recommended for:**
- ❌ Public websites
- ❌ Production deployments
- ❌ Shared hosting

For production, use the FastAPI backend in `/backend` folder to hide your API key.

---

## 🎯 Deployment Options

### Option 1: Static Hosting (Simple, API Key Exposed)
### Option 2: With Backend (Secure, Recommended)

---

## 📦 Option 1: Static Hosting

Deploy the website folder as-is to any static host.

### Netlify (Easiest)

1. **Via Drag & Drop:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Drag the `website` folder onto the page
   - Done! Your site is live

2. **Via CLI:**
   ```bash
   npm install -g netlify-cli
   cd website
   netlify deploy --prod
   ```

3. **Via Git:**
   - Push code to GitHub
   - Connect repo to Netlify
   - Set build settings:
     - Build command: (leave empty)
     - Publish directory: `website`

**Custom Domain:**
- Go to Domain Settings
- Add your domain
- Update DNS records

---

### Vercel

1. **Via CLI:**
   ```bash
   npm install -g vercel
   cd website
   vercel --prod
   ```

2. **Via Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Set root directory to `website`
   - Deploy

---

### GitHub Pages

1. **Create Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/lorify.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages
   - Source: Deploy from branch
   - Branch: `main`, folder: `/website`
   - Save

3. **Access:**
   - Your site: `https://yourusername.github.io/lorify/`

---

### Cloudflare Pages

1. **Via Dashboard:**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Connect your Git repository
   - Build settings:
     - Build command: (leave empty)
     - Build output directory: `website`
   - Deploy

2. **Via Wrangler CLI:**
   ```bash
   npm install -g wrangler
   cd website
   wrangler pages publish .
   ```

---

## 🔒 Option 2: With Backend (Secure)

Use the FastAPI backend to hide your API key.

### Step 1: Deploy Backend

#### Render (Free Tier Available)

1. **Create Account:**
   - Go to [render.com](https://render.com)
   - Sign up for free

2. **Create Web Service:**
   - Click "New +" → "Web Service"
   - Connect your Git repository
   - Settings:
     - Name: `lorify-backend`
     - Environment: `Python 3`
     - Build Command: `pip install -r requirements.txt`
     - Start Command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
     - Instance Type: Free

3. **Add Environment Variables:**
   - `GROQ_API_KEY`: your_groq_api_key
   - `ALLOWED_ORIGINS`: https://your-frontend-url.com

4. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment
   - Copy your backend URL: `https://lorify-backend.onrender.com`

---

#### Railway (Alternative)

1. **Create Account:**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy:**
   ```bash
   npm install -g @railway/cli
   railway login
   cd backend
   railway init
   railway up
   ```

3. **Add Environment Variables:**
   - Go to your project dashboard
   - Add `GROQ_API_KEY`
   - Add `ALLOWED_ORIGINS`

4. **Get URL:**
   - Copy your backend URL from dashboard

---

### Step 2: Update Frontend

1. **Modify `script.js`:**
   ```javascript
   const CONFIG = {
       // Replace with your backend URL
       API_URL: 'https://lorify-backend.onrender.com/api/roast',
       // Remove API_KEY - it's now in the backend
       MODEL: 'llama-3.1-70b-versatile'
   };
   ```

2. **Update API Calls:**
   ```javascript
   async function callAI(systemPrompt, userMessage) {
       const response = await fetch(CONFIG.API_URL, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               text: userMessage,
               personality: currentPersonality
           })
       });

       if (!response.ok) {
           throw new Error(`API request failed: ${response.statusText}`);
       }

       const data = await response.json();
       return data.roast;
   }
   ```

3. **Deploy Frontend:**
   - Use any static hosting (Netlify, Vercel, etc.)
   - Your API key is now secure in the backend!

---

## 🌐 Custom Domain Setup

### Netlify

1. **Add Domain:**
   - Go to Domain Settings
   - Click "Add custom domain"
   - Enter your domain

2. **Update DNS:**
   - Add CNAME record:
     - Name: `www` or `@`
     - Value: `your-site.netlify.app`

3. **Enable HTTPS:**
   - Automatic with Let's Encrypt

---

### Vercel

1. **Add Domain:**
   - Go to Project Settings → Domains
   - Add your domain

2. **Update DNS:**
   - Follow Vercel's instructions
   - Add A or CNAME records

3. **HTTPS:**
   - Automatic

---

## 📊 Environment Variables

### Frontend (if using backend)
```env
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

### Backend
```env
GROQ_API_KEY=your_groq_api_key_here
ALLOWED_ORIGINS=https://your-frontend.netlify.app,https://your-domain.com
PORT=8000
```

---

## 🔧 Build Optimization

### Minify Files

1. **HTML:**
   ```bash
   npm install -g html-minifier
   html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
   ```

2. **CSS:**
   ```bash
   npm install -g csso-cli
   csso styles.css -o styles.min.css
   ```

3. **JavaScript:**
   ```bash
   npm install -g terser
   terser script.js -o script.min.js -c -m
   ```

### Update HTML References
```html
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js"></script>
```

---

## 📈 Performance Tips

### 1. Enable Caching
Add to your hosting platform:
```
Cache-Control: public, max-age=31536000
```

### 2. Compress Assets
Enable Gzip/Brotli compression on your host.

### 3. Use CDN
Most hosting platforms (Netlify, Vercel, Cloudflare) include CDN automatically.

### 4. Optimize Images
If you add images later:
```bash
npm install -g imagemin-cli
imagemin images/* --out-dir=images/optimized
```

---

## 🔍 SEO Optimization

### 1. Add Sitemap
Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 2. Add robots.txt
```
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

### 3. Update Meta Tags
Already included in `index.html`!

---

## 📊 Analytics Setup

### Google Analytics

1. **Get Tracking ID:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create property
   - Copy tracking ID

2. **Add to HTML:**
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. **Update script.js:**
   ```javascript
   function trackEvent(eventName, eventData = {}) {
       gtag('event', eventName, eventData);
   }
   ```

---

## 🐛 Debugging Deployed Site

### Check Console Errors
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests

### Common Issues

**CORS Errors:**
- Add your frontend URL to backend `ALLOWED_ORIGINS`

**API Key Not Working:**
- Verify environment variables are set
- Check backend logs

**404 Errors:**
- Verify file paths are correct
- Check build output directory

---

## 📱 Progressive Web App (PWA)

### Add manifest.json
```json
{
  "name": "Lorify",
  "short_name": "Lorify",
  "description": "The internet reacting to your life",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#050505",
  "theme_color": "#FF006E",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Add to HTML
```html
<link rel="manifest" href="/manifest.json">
```

---

## 🔐 Security Headers

Add to your hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

## 💰 Cost Estimates

### Free Tier Limits

**Netlify:**
- 100GB bandwidth/month
- 300 build minutes/month
- Unlimited sites

**Vercel:**
- 100GB bandwidth/month
- Unlimited deployments
- Serverless functions included

**Render (Backend):**
- 750 hours/month free
- Sleeps after 15 min inactivity
- 100GB bandwidth/month

**Groq API:**
- FREE tier available
- ~30 requests/minute
- All models included

### Estimated Monthly Cost: $0 🎉

---

## 📞 Support

### Deployment Issues?
1. Check hosting platform docs
2. Review error logs
3. Test locally first
4. Check environment variables

### Need Help?
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Render: [render.com/docs](https://render.com/docs)

---

<div align="center">

**Ready to deploy?** 🚀

Choose your hosting platform and follow the steps above!

</div>
