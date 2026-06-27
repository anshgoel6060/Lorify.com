# 🎯 START HERE - Lorify Setup

## What is Lorify?

An AI-powered platform that roasts your life with Gen Z humor. Upload screenshots, playlists, or drama and get brutally funny AI responses.

---

## ⚡ Quick Setup (5 Minutes)

### 1️⃣ Get Free API Key

Go to: https://console.groq.com
- Sign up (free)
- Create API key
- Copy it

### 2️⃣ Setup Backend

```bash
cd backend
python -m venv venv

# Windows:
venv\Scripts\activate

# Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt

# Create .env file with your API key:
# Windows:
echo GROQ_API_KEY=paste_your_key_here > .env
echo ALLOWED_ORIGINS=http://localhost:3000 >> .env

# Mac/Linux:
echo "GROQ_API_KEY=paste_your_key_here" > .env
echo "ALLOWED_ORIGINS=http://localhost:3000" >> .env

# Start server:
uvicorn app.main:app --reload
```

✅ Backend running at http://localhost:8000

### 3️⃣ Setup Frontend (New Terminal)

```bash
cd frontend
npm install

# Create .env.local:
# Windows:
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local

# Mac/Linux:
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Start app:
npm run dev
```

✅ Frontend running at http://localhost:3000

### 4️⃣ Test It!

Open http://localhost:3000 and try:
- Click "Roast Mode 🔥"
- Type: "my situationship said lets focus on ourselves"
- Click "Roast Me"
- Get roasted! 💀

---

## 📁 Project Structure

```
lorify/
├── backend/          # Python FastAPI server
├── frontend/         # Next.js React app
├── ai-prompts/       # AI personality prompts
├── docs/             # Full documentation
└── START_HERE.md     # You are here!
```

---

## 🎯 Features

✅ **Roast Mode** - AI roasts your life  
✅ **Court Mode** - AI judges relationship drama  
✅ **5 AI Personalities** - Gen Z, Indian Parent, Anime Narrator, Therapist, Toxic Bestie  
✅ **Image Upload** - Upload screenshots for OCR  
✅ **Share Cards** - Screenshot-worthy results  
✅ **Mobile Responsive** - Works on all devices  

---

## 📚 Full Documentation

- `SETUP_INSTRUCTIONS.md` - Complete setup guide
- `docs/QUICKSTART.md` - 5-minute setup
- `docs/API.md` - API documentation
- `docs/ARCHITECTURE.md` - System design
- `docs/DEPLOYMENT.md` - Deploy to production
- `docs/PROMPTS.md` - Create AI personalities

---

## 🐛 Common Issues

**"Module not found"**
```bash
pip install -r requirements.txt  # Backend
npm install                       # Frontend
```

**"Port in use"**
```bash
uvicorn app.main:app --reload --port 8001
```

**"API connection failed"**
- Check backend is running
- Verify .env.local has correct URL

---

## 🚀 Next Steps

1. ✅ Get it running locally
2. 📖 Read `SETUP_INSTRUCTIONS.md` for details
3. 🎨 Customize colors and personalities
4. 🌐 Deploy to production (see `docs/DEPLOYMENT.md`)

---

## 💡 Pro Tips

- Use Groq API (faster, free tier)
- Keep both terminals open
- Test API at http://localhost:8000/docs
- Check browser console for errors

---

**Made for the chronically online** 💀

Need help? Check `SETUP_INSTRUCTIONS.md` for detailed guide!
