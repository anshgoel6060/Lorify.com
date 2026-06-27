# 🔥 Lorify - Static Website Version

## 📦 What's This?

This is a **standalone HTML/CSS/JavaScript version** of Lorify that can be uploaded to **any web hosting service** without needing Node.js or Python servers!

Perfect for:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting (cPanel, etc.)

---

## ⚡ Quick Setup (2 Minutes)

### Step 1: Get Groq API Key
1. Go to https://console.groq.com
2. Sign up (free)
3. Create API key
4. Copy it

### Step 2: Add API Key
1. Open `script.js`
2. Find line 4: `API_KEY: 'YOUR_GROQ_API_KEY_HERE'`
3. Replace with your key: `API_KEY: 'gsk_your_actual_key_here'`
4. Save the file

### Step 3: Upload to Web Host
Upload these 3 files to your web hosting:
- `index.html`
- `styles.css`
- `script.js`

### Step 4: Done!
Visit your website URL and start roasting! 🔥

---

## 📁 Files Included

```
website/
├── index.html       # Main HTML file
├── styles.css       # All styling
├── script.js        # All functionality
└── README.md        # This file
```

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (FREE)

1. **Create GitHub Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/lorify.git
git push -u origin main
```

2. **Enable GitHub Pages**
- Go to repository Settings
- Scroll to "Pages"
- Source: Deploy from branch
- Branch: main, folder: /website
- Save

3. **Access Your Site**
- URL: `https://yourusername.github.io/lorify/`

### Option 2: Netlify (FREE)

1. **Drag & Drop**
- Go to https://app.netlify.com/drop
- Drag the `website` folder
- Done!

2. **Or Connect GitHub**
- New site from Git
- Connect repository
- Build settings: None needed
- Deploy!

### Option 3: Vercel (FREE)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
cd website
vercel
```

3. **Follow Prompts**
- Link to existing project? No
- Project name: lorify
- Directory: ./
- Deploy!

### Option 4: Traditional Web Hosting

1. **Upload via FTP/cPanel**
- Connect to your hosting
- Upload all 3 files to public_html or www folder
- Done!

2. **Access**
- Visit: `https://yourdomain.com`

---

## 🔧 Configuration

### API Key Setup

**Option A: Direct in Code (Simple)**
```javascript
// In script.js line 4
API_KEY: 'gsk_your_actual_key_here'
```

**Option B: Environment Variable (Secure)**

For Netlify:
1. Site settings → Environment variables
2. Add: `GROQ_API_KEY` = your key
3. Update script.js to use: `process.env.GROQ_API_KEY`

For Vercel:
1. Project settings → Environment Variables
2. Add: `GROQ_API_KEY` = your key
3. Update script.js to use: `process.env.GROQ_API_KEY`

---

## 🎨 Customization

### Change Colors

Edit `styles.css`:

```css
/* Line 60 - Logo gradient */
background: linear-gradient(135deg, #FF006E 0%, #8338EC 50%, #3A86FF 100%);

/* Line 120 - Roast card border */
border-color: rgba(255, 0, 110, 0.3);

/* Line 135 - Court card border */
border-color: rgba(131, 56, 236, 0.3);
```

### Change Text

Edit `index.html`:

```html
<!-- Line 13 - Title -->
<title>Your Custom Title</title>

<!-- Line 22 - Logo -->
<h1 class="logo">YOUR BRAND</h1>

<!-- Line 23 - Tagline -->
<p class="tagline">Your custom tagline</p>
```

### Add New Personality

Edit `script.js`:

```javascript
// Add to AI_PROMPTS object (around line 20)
'your-personality': `Your system prompt here...`
```

Then add to HTML personality grid in `index.html`.

---

## 🐛 Troubleshooting

### "Please configure your Groq API key"
- Open `script.js`
- Replace `YOUR_GROQ_API_KEY_HERE` with your actual key
- Make sure there are no extra spaces

### "API request failed"
- Check your API key is correct
- Verify you have credits on Groq
- Check browser console for errors (F12)

### "CORS Error"
- This shouldn't happen with Groq API
- If it does, use a backend proxy
- Or deploy to a platform that handles CORS

### Styles Not Loading
- Check all 3 files are in same folder
- Check file names are exact (case-sensitive)
- Clear browser cache (Ctrl+F5)

### Not Working on Mobile
- Check responsive design in browser DevTools
- Test on actual device
- Check console for JavaScript errors

---

## 📊 Features

✅ Roast Mode with 5 personalities  
✅ Court Mode with verdicts  
✅ Mobile responsive  
✅ Dark theme  
✅ Smooth animations  
✅ Copy to clipboard  
✅ Native share API  
✅ No backend needed  
✅ Works offline (after first load)  

---

## 🔒 Security Notes

### API Key Security

**⚠️ Important**: Your API key is visible in the JavaScript file. For production:

1. **Use Backend Proxy** (Recommended)
   - Create a simple serverless function
   - Store API key server-side
   - Frontend calls your function

2. **Use Environment Variables**
   - Netlify/Vercel support env vars
   - Key stays server-side
   - Injected at build time

3. **Rate Limiting**
   - Add rate limiting to prevent abuse
   - Use Cloudflare or similar

### Example Serverless Function (Netlify)

Create `netlify/functions/roast.js`:

```javascript
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { text, personality } = JSON.parse(event.body);
  
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.1-70b-versatile',
      messages: [
        { role: 'system', content: personality },
        { role: 'user', content: text }
      ]
    })
  });
  
  const data = await response.json();
  
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
```

Then update `script.js` to call `/.netlify/functions/roast` instead.

---

## 📈 Performance

### Optimization Tips

1. **Minify Files**
```bash
# Install minifier
npm install -g minify

# Minify CSS
minify styles.css > styles.min.css

# Minify JS
minify script.js > script.min.js
```

2. **Enable Caching**
Add to hosting config:
```
Cache-Control: public, max-age=31536000
```

3. **Use CDN**
- Cloudflare (free)
- Netlify CDN (automatic)
- Vercel Edge Network (automatic)

4. **Compress Images**
- Use WebP format
- Optimize with TinyPNG
- Lazy load images

---

## 🎯 Next Steps

### Immediate
1. ✅ Add your API key
2. ✅ Test locally (open index.html)
3. ✅ Deploy to hosting
4. ✅ Test on mobile

### Short-term
1. 🎨 Customize colors/branding
2. 🔒 Setup backend proxy for API key
3. 📊 Add analytics (Google Analytics)
4. 🚀 Optimize performance

### Long-term
1. 💾 Add local storage for history
2. 👥 Add user accounts
3. 📱 Create PWA (Progressive Web App)
4. 🌐 Add multi-language support

---

## 📚 Resources

### Hosting Guides
- [GitHub Pages](https://pages.github.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)

### API Documentation
- [Groq API Docs](https://console.groq.com/docs)
- [Groq Pricing](https://groq.com/pricing/)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

---

## ✅ Checklist

### Before Deployment
- [ ] API key added to script.js
- [ ] Tested locally
- [ ] All 3 files present
- [ ] No console errors
- [ ] Mobile responsive
- [ ] All features work

### After Deployment
- [ ] Site loads correctly
- [ ] Roast Mode works
- [ ] Court Mode works
- [ ] Mobile works
- [ ] Share works
- [ ] Copy works

---

## 🆘 Support

### Need Help?
1. Check browser console (F12)
2. Verify API key is correct
3. Test on different browser
4. Check hosting platform docs

### Common Issues
- **API Key Error**: Replace placeholder in script.js
- **CORS Error**: Use backend proxy
- **Not Loading**: Check file paths
- **Mobile Issues**: Test responsive design

---

## 🎉 You're Done!

Your Lorify website is ready to deploy!

**Made for the chronically online** 💀

### Quick Deploy Commands

**GitHub Pages:**
```bash
git add .
git commit -m "Deploy Lorify"
git push
```

**Netlify:**
```bash
netlify deploy --prod
```

**Vercel:**
```bash
vercel --prod
```

Happy roasting! 🔥⚖️
