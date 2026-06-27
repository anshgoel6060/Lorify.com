# 🚀 Lorify - Next Steps Guide

## ✅ What's Complete

You now have **3 versions** of Lorify:
1. **Standalone Website** (`/website`) - Pure HTML/CSS/JS ✅ **COMPLETE**
2. **Frontend App** (`/frontend`) - Next.js + React
3. **Backend API** (`/backend`) - FastAPI + Python

---

## 🎯 Choose Your Path

### Path A: Quick Demo (2 minutes) ⚡ **RECOMMENDED TO START**
Just want to see it work? Use the standalone website!

### Path B: Full Stack App (15 minutes)
Want the complete experience with backend? Run the full app!

### Path C: Deploy to Production (30 minutes)
Ready to share with the world? Deploy it!

---

## 🚀 PATH A: Quick Demo (Standalone Website)

### Step 1: Get API Key (1 minute)
```
1. Go to https://console.groq.com
2. Sign up (free)
3. Create API key
4. Copy it
```

### Step 2: Configure (30 seconds)
```
1. Open: website/script.js
2. Find line 5: API_KEY: 'YOUR_GROQ_API_KEY_HERE'
3. Replace with your key
4. Save
```

### Step 3: Test (30 seconds)
```
1. Open: website/index.html (double-click)
2. Try Roast Mode
3. Try Court Mode
4. Done! 🔥
```

**✅ This works immediately - no installation needed!**

---

## 🏗️ PATH B: Full Stack App

### Prerequisites
- Node.js 18+ installed
- Python 3.9+ installed
- Terminal/Command Prompt

### Step 1: Setup Backend (5 minutes)

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate it
venv\Scripts\activate          # Windows
source venv/bin/activate       # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Create .env file
echo GROQ_API_KEY=your_key_here > .env

# Run backend
uvicorn app.main:app --reload
```

**Backend now running at http://localhost:8000**

### Step 2: Setup Frontend (5 minutes)

Open **new terminal** (keep backend running):

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env.local
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local

# Run frontend
npm run dev
```

**Frontend now running at http://localhost:3000**

### Step 3: Test Full App (2 minutes)

```
1. Open http://localhost:3000
2. Try uploading an image
3. Try Roast Mode with text
4. Try Court Mode
5. Check OCR text extraction
```

**✅ Full app with all features working!**

---

## 🌐 PATH C: Deploy to Production

### Option 1: Deploy Standalone Website (Easiest)

#### Netlify (5 minutes)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to website folder
cd website

# Deploy
netlify deploy --prod

# Follow prompts
```

Or drag & drop to https://app.netlify.com/drop

#### Vercel (5 minutes)
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to website folder
cd website

# Deploy
vercel --prod
```

#### GitHub Pages (10 minutes)
```bash
# Create GitHub repo
git init
git add website/
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/lorify.git
git push -u origin main

# Enable GitHub Pages in repo settings
# Settings → Pages → Source: main branch, /website folder
```

**Your site: `https://yourusername.github.io/lorify/`**

---

### Option 2: Deploy Full Stack App (Advanced)

#### Deploy Backend to Render (Free)

1. **Create Render account**: https://render.com
2. **New Web Service**
   - Connect GitHub repo
   - Root directory: `backend`
   - Build command: `pip install -r requirements.txt`
   - Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
3. **Add Environment Variables**:
   - `GROQ_API_KEY`: your_key
   - `ALLOWED_ORIGINS`: https://your-frontend-url.vercel.app
4. **Deploy**
5. **Copy URL**: `https://lorify-backend.onrender.com`

#### Deploy Frontend to Vercel (Free)

```bash
cd frontend

# Update .env.local with backend URL
echo NEXT_PUBLIC_API_URL=https://lorify-backend.onrender.com > .env.local

# Deploy
vercel --prod
```

**Done! Your full app is live!**

---

## 📋 Quick Action Checklist

### Right Now (5 minutes)
- [ ] Get Groq API key from console.groq.com
- [ ] Add key to `website/script.js`
- [ ] Open `website/index.html`
- [ ] Test Roast Mode
- [ ] Test Court Mode
- [ ] ✅ You have a working app!

### This Week (30 minutes)
- [ ] Customize colors in `website/styles.css`
- [ ] Change branding in `website/index.html`
- [ ] Deploy to Netlify/Vercel
- [ ] Share with friends

### Optional: Full Stack (1 hour)
- [ ] Setup Python backend
- [ ] Setup Node.js frontend
- [ ] Test image upload feature
- [ ] Deploy both to production

---

## 🔥 Immediate Action Plan

### What to do RIGHT NOW:

1. **Get Your API Key** (2 minutes)
   ```
   https://console.groq.com
   → Sign Up
   → Create API Key
   → Copy it
   ```

2. **Configure Website** (1 minute)
   ```
   Open: website/script.js
   Line 5: Replace YOUR_GROQ_API_KEY_HERE
   Save
   ```

3. **Test It** (1 minute)
   ```
   Double-click: website/index.html
   Try it out!
   ```

4. **Celebrate** 🎉
   ```
   You now have a working AI roasting app!
   ```

---

## 📁 Project Structure Overview

```
Lorify/
├── website/              ⭐ COMPLETE & READY TO USE
│   ├── index.html        ← Just open this!
│   ├── styles.css
│   ├── script.js         ← Add API key here
│   └── docs/
│
├── frontend/             Optional: Full React app
│   ├── src/
│   ├── package.json
│   └── next.config.js
│
├── backend/              Optional: Python API
│   ├── app/
│   ├── requirements.txt
│   └── .env.example
│
└── docs/                 All documentation
```

---

## 🆘 Troubleshooting

### "API key not configured"
- Open `website/script.js`
- Line 5: Add your Groq API key
- Save and refresh browser

### "Module not found" (Frontend)
```bash
cd frontend
npm install
```

### "No module named 'fastapi'" (Backend)
```bash
cd backend
pip install -r requirements.txt
```

### Backend won't start
```bash
# Check Python version
python --version    # Should be 3.9+

# Reinstall dependencies
pip install --upgrade -r requirements.txt
```

### Frontend won't start
```bash
# Check Node version
node --version      # Should be 18+

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 🎓 Learning Path

### Beginner (Start Here)
1. Use standalone website (`/website`)
2. No installation needed
3. Just add API key and go!

### Intermediate
1. Run backend locally
2. Run frontend locally
3. Test all features

### Advanced
1. Deploy backend to Render
2. Deploy frontend to Vercel
3. Configure custom domain

---

## 🌟 Feature Comparison

| Feature | Standalone | Full Stack |
|---------|-----------|------------|
| **Setup Time** | 2 minutes | 15 minutes |
| **Dependencies** | None | Node + Python |
| **Roast Mode** | ✅ | ✅ |
| **Court Mode** | ✅ | ✅ |
| **5 Personalities** | ✅ | ✅ |
| **Image Upload** | ❌ | ✅ |
| **OCR Text Extract** | ❌ | ✅ |
| **User Accounts** | ❌ | ✅ (future) |
| **History** | ❌ | ✅ (future) |

---

## 💡 Pro Tips

### For Quick Testing
- Use standalone website
- No installation needed
- Perfect for demos

### For Development
- Use full stack app
- Better developer experience
- More features

### For Production
- Standalone: Easy deployment
- Full Stack: More scalable

---

## 🎯 Recommended Path for You

### If you just want to see it work:
```bash
cd website
# Add API key to script.js
# Open index.html
# Done!
```

### If you want the full experience:
```bash
# Terminal 1: Backend
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
# Add API key to .env
uvicorn app.main:app --reload

# Terminal 2: Frontend
cd frontend
npm install
# Add backend URL to .env.local
npm run dev

# Open http://localhost:3000
```

### If you want to deploy:
```bash
cd website
netlify deploy --prod
# OR
vercel --prod
```

---

## 📞 Need Help?

### Documentation
- **Standalone**: `website/QUICKSTART.md`
- **Backend**: `backend/README.md`
- **Frontend**: `frontend/README.md`
- **Full Guide**: `COMPLETE_GUIDE.md`

### Quick References
- Setup: `SETUP_INSTRUCTIONS.md`
- Features: `FEATURES.md`
- Deployment: `docs/DEPLOYMENT.md`

---

## ✅ Success Criteria

### You'll know it's working when:
- ✅ Home screen loads with gradient logo
- ✅ You can select Roast Mode
- ✅ Personality selector works
- ✅ You can type and submit
- ✅ AI generates a roast
- ✅ Copy button works
- ✅ Everything is responsive on mobile

---

## 🎉 You're Ready!

Choose your path and start roasting! 🔥

**Recommended for most users:**
1. Open `website/script.js`
2. Add your Groq API key (line 5)
3. Open `website/index.html`
4. Start roasting!

---

<div align="center">

## 🔥 LET'S GET STARTED! 🔥

**Made for the chronically online** 💀

[Get API Key](https://console.groq.com) • [Quick Start](website/QUICKSTART.md) • [Full Guide](COMPLETE_GUIDE.md)

</div>
