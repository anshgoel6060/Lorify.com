# 🚀 START HERE - Lorify Quick Start

## ⚡ Get Running in 2 Minutes

### You have 3 options. Choose one:

---

## 🔥 OPTION 1: Instant Demo (EASIEST - 2 min)

**No installation. No build. Just works.**

### Step 1: Get API Key (1 minute)
1. Go to https://console.groq.com
2. Sign up (it's free!)
3. Click "Create API Key"
4. Copy your key

### Step 2: Add API Key (30 seconds)
1. Open: `website/script.js`
2. Find line 5: `API_KEY: 'YOUR_GROQ_API_KEY_HERE'`
3. Replace with your actual key
4. Save the file

### Step 3: Run (10 seconds)
1. Double-click: `website/index.html`
2. Start roasting! 🔥

**✅ Done! You have a working app!**

---

## 🏗️ OPTION 2: Full Stack (15 min)

**Complete app with image upload and OCR.**

### Prerequisites
- Node.js 18+ installed
- Python 3.9+ installed

### Quick Commands

**Terminal 1 - Backend:**
```bash
cd backend
python -m venv venv
venv\Scripts\activate               # Windows
# source venv/bin/activate          # Mac/Linux
pip install -r requirements.txt
echo GROQ_API_KEY=your_key > .env
uvicorn app.main:app --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
npm run dev
```

**Open:** http://localhost:3000

---

## 🌐 OPTION 3: Deploy (5 min)

**Put it online for everyone to use.**

### Netlify (Easiest)
```bash
cd website
# Add API key to script.js first!
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel
```bash
cd website
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
git init
git add website/
git commit -m "Deploy Lorify"
git push origin main
# Enable in Settings → Pages
```

---

## 🎯 What Should You Choose?

### Choose Option 1 if:
- ✅ You want to test it quickly
- ✅ You don't want to install anything
- ✅ You just want to see it work

### Choose Option 2 if:
- ✅ You want all features (image upload)
- ✅ You're comfortable with terminal
- ✅ You want to develop/customize

### Choose Option 3 if:
- ✅ You want to share it online
- ✅ You want a public URL
- ✅ You're ready to deploy

---

## 📚 Where to Go Next

After you get it running:

1. **Customize it**: `website/SETUP.md`
2. **See examples**: `website/EXAMPLES.md`
3. **Deploy it**: `NEXT_STEPS.md`
4. **Full guide**: `COMPLETE_GUIDE.md`

---

## 🆘 Having Issues?

### "API key not configured"
→ Open `website/script.js`, add your key on line 5

### "Module not found"
→ Run `npm install` (frontend) or `pip install -r requirements.txt` (backend)

### "Port already in use"
→ Change port: `npm run dev -- -p 3001`

### Still stuck?
→ Check `website/SETUP.md` troubleshooting section

---

## ✅ Success Checklist

You'll know it's working when:
- [ ] Home screen loads with "LORIFY" logo
- [ ] You can click "Roast Mode"
- [ ] You can select a personality
- [ ] You can type and submit text
- [ ] AI generates a response
- [ ] You can copy the result

---

## 🎉 Recommended for Most People

**Just do this:**

1. Get API key from https://console.groq.com
2. Open `website/script.js`
3. Add your key on line 5
4. Open `website/index.html`
5. Start roasting! 🔥

**That's it! No installation, no build, just works.**

---

<div align="center">

## 🔥 Choose Your Path 🔥

[Option 1: Instant](website/QUICKSTART.md) • [Option 2: Full Stack](COMPLETE_GUIDE.md) • [Option 3: Deploy](NEXT_STEPS.md)

**Made for the chronically online** 💀

</div>
