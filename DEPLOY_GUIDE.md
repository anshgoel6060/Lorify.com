# 🚀 Lorify - Complete Deployment Guide

## 📋 Pre-Deployment Checklist

- [ ] Get Groq API key from https://console.groq.com
- [ ] Add API key to `script.js` (line 4)
- [ ] Test locally by opening `index.html` in browser
- [ ] Verify all features work
- [ ] Test on mobile device

---

## 🌐 Deployment Options

### 1️⃣ GitHub Pages (Easiest & FREE)

**Step-by-Step:**

1. **Create GitHub Account**
   - Go to https://github.com
   - Sign up (free)

2. **Create New Repository**
   - Click "New repository"
   - Name: `lorify`
   - Public
   - Don't initialize with README
   - Create repository

3. **Upload Files**
   
   **Option A: Via GitHub Website**
   - Click "uploading an existing file"
   - Drag `index.html`, `styles.css`, `script.js`
   - Commit changes

   **Option B: Via Git Command Line**
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lorify.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/ (root)`
   - Click Save

5. **Access Your Site**
   - Wait 1-2 minutes
   - Visit: `https://YOUR_USERNAME.github.io/lorify/`
   - Done! 🎉

**Custom Domain (Optional):**
- Buy domain from Namecheap, GoDaddy, etc.
- Add CNAME record pointing to `YOUR_USERNAME.github.io`
- In GitHub Pages settings, add custom domain
- Enable HTTPS

---

### 2️⃣ Netlify (Fastest & FREE)

**Method A: Drag & Drop (30 seconds)**

1. Go to https://app.netlify.com/drop
2. Drag the `website` folder onto the page
3. Wait for deployment
4. Get your URL: `https://random-name.netlify.app`
5. Done! 🎉

**Method B: Connect GitHub (Recommended)**

1. **Sign Up**
   - Go to https://netlify.com
   - Sign up with GitHub

2. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your `lorify` repository

3. **Configure Build**
   - Base directory: `website`
   - Build command: (leave empty)
   - Publish directory: `.`
   - Click "Deploy site"

4. **Configure Domain**
   - Site settings → Domain management
   - Change site name or add custom domain

5. **Add Environment Variables (Secure)**
   - Site settings → Environment variables
   - Add: `GROQ_API_KEY` = your key
   - Update `script.js` to use env var

6. **Access Your Site**
   - Visit: `https://your-site-name.netlify.app`
   - Done! 🎉

**Netlify CLI (Advanced):**
```bash
# Install
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd website
netlify deploy --prod
```

---

### 3️⃣ Vercel (Developer-Friendly & FREE)

**Step-by-Step:**

1. **Sign Up**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Import your GitHub repository

3. **Configure**
   - Framework Preset: Other
   - Root Directory: `website`
   - Build Command: (leave empty)
   - Output Directory: `.`
   - Click "Deploy"

4. **Environment Variables**
   - Project Settings → Environment Variables
   - Add: `GROQ_API_KEY` = your key
   - Redeploy

5. **Access Your Site**
   - Visit: `https://lorify.vercel.app`
   - Done! 🎉

**Vercel CLI:**
```bash
# Install
npm install -g vercel

# Deploy
cd website
vercel

# Production
vercel --prod
```

---

### 4️⃣ Traditional Web Hosting (cPanel, etc.)

**For: Shared hosting, VPS, or dedicated servers**

**Step-by-Step:**

1. **Access Your Hosting**
   - Login to cPanel or FTP

2. **Upload Files**
   
   **Via cPanel File Manager:**
   - Go to File Manager
   - Navigate to `public_html` or `www`
   - Upload `index.html`, `styles.css`, `script.js`
   - Done!

   **Via FTP (FileZilla):**
   - Download FileZilla
   - Connect to your server
   - Upload files to `public_html`

3. **Access Your Site**
   - Visit: `https://yourdomain.com`
   - Done! 🎉

**Popular Hosting Providers:**
- Hostinger
- Bluehost
- SiteGround
- HostGator
- DreamHost

---

### 5️⃣ Cloudflare Pages (Fast & FREE)

**Step-by-Step:**

1. **Sign Up**
   - Go to https://pages.cloudflare.com
   - Sign up (free)

2. **Create Project**
   - Connect to Git
   - Select repository

3. **Configure**
   - Build command: (none)
   - Build output directory: `website`
   - Deploy

4. **Access Your Site**
   - Visit: `https://lorify.pages.dev`
   - Done! 🎉

---

## 🔒 Secure API Key Setup

### Problem
Your API key is visible in `script.js` - anyone can see it!

### Solution: Backend Proxy

**Option 1: Netlify Functions**

1. Create `netlify/functions/ai.js`:

```javascript
const fetch = require('node-fetch');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { systemPrompt, userMessage } = JSON.parse(event.body);

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        max_tokens: 500,
        temperature: 0.9
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

2. Update `script.js`:

```javascript
async function callAI(systemPrompt, userMessage) {
  const response = await fetch('/.netlify/functions/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ systemPrompt, userMessage })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
```

3. Add environment variable in Netlify:
   - Site settings → Environment variables
   - `GROQ_API_KEY` = your key

**Option 2: Vercel Serverless Functions**

Similar to Netlify, create `api/ai.js` in your project root.

---

## 🎨 Custom Domain Setup

### For GitHub Pages

1. **Buy Domain**
   - Namecheap, GoDaddy, etc.

2. **Add DNS Records**
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: YOUR_USERNAME.github.io
   ```

3. **Configure GitHub**
   - Repository Settings → Pages
   - Custom domain: `yourdomain.com`
   - Enforce HTTPS

### For Netlify/Vercel

1. **Buy Domain**

2. **Add to Platform**
   - Netlify: Site settings → Domain management → Add custom domain
   - Vercel: Project settings → Domains → Add

3. **Update DNS**
   - Follow platform instructions
   - Usually just update nameservers

---

## 📊 Analytics Setup

### Google Analytics

1. **Create Account**
   - Go to https://analytics.google.com
   - Create property

2. **Get Tracking ID**
   - Copy tracking ID (G-XXXXXXXXXX)

3. **Add to HTML**
   
   Add before `</head>` in `index.html`:

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

### Plausible Analytics (Privacy-Friendly)

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🚀 Performance Optimization

### 1. Minify Files

```bash
# Install minifier
npm install -g minify

# Minify CSS
minify styles.css > styles.min.css

# Minify JS
minify script.js > script.min.js

# Update HTML to use .min files
```

### 2. Enable Caching

**Netlify** (`netlify.toml`):
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

**Vercel** (`vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000"
        }
      ]
    }
  ]
}
```

### 3. Use CDN

All platforms (Netlify, Vercel, Cloudflare) include CDN automatically!

---

## 🐛 Troubleshooting Deployment

### Site Not Loading

**Check:**
- Files uploaded correctly
- File names are exact (case-sensitive)
- index.html is in root directory

**Fix:**
- Re-upload files
- Check hosting platform status
- Clear browser cache

### API Not Working

**Check:**
- API key is correct in script.js
- No extra spaces in API key
- Browser console for errors (F12)

**Fix:**
- Verify API key on Groq console
- Check API usage/credits
- Test API key with curl

### CORS Errors

**Check:**
- Using HTTPS (not HTTP)
- API endpoint allows CORS

**Fix:**
- Use backend proxy (Netlify/Vercel functions)
- Contact hosting support

### Mobile Not Working

**Check:**
- Responsive design
- Touch events
- Mobile browser console

**Fix:**
- Test on actual device
- Use Chrome DevTools mobile emulator
- Check viewport meta tag

---

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages work
- [ ] Roast Mode functional
- [ ] Court Mode functional
- [ ] Mobile responsive
- [ ] Copy/Share works
- [ ] No console errors
- [ ] Analytics tracking
- [ ] Custom domain (if applicable)
- [ ] HTTPS enabled
- [ ] Performance optimized

---

## 📈 Monitoring

### Uptime Monitoring

**UptimeRobot** (Free):
1. Go to https://uptimerobot.com
2. Add new monitor
3. Type: HTTP(s)
4. URL: your site
5. Get alerts if site goes down

### Error Tracking

**Sentry** (Free tier):
1. Go to https://sentry.io
2. Create project
3. Add SDK to your site
4. Track JavaScript errors

---

## 🎉 You're Live!

Your Lorify website is now deployed and accessible worldwide!

### Share Your Site
- Twitter/X
- Instagram
- TikTok
- Reddit
- Discord

### Next Steps
1. Monitor analytics
2. Gather user feedback
3. Iterate and improve
4. Add new features

**Made for the chronically online** 💀

Happy roasting! 🔥⚖️
