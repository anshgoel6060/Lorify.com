# 🚀 Lorify - Complete Setup Instructions

## What You're Building

**Lorify** is an AI-powered social entertainment platform that roasts your life with Gen Z humor. Think of it as "the internet reacting to your life."

### Features
- 🔥 **Roast Mode**: Get brutally roasted by AI
- ⚖️ **Court Mode**: AI judges your relationship drama
- 🎭 **Multiple Personalities**: Savage Gen Z, Indian Parent, Anime Narrator, Therapist, Toxic Bestie
- 📸 **Image Upload**: Upload screenshots for OCR + roasting
- 🎨 **Modern UI**: Dark theme, animations, mobile-responsive

---

## 📋 Prerequisites

Install these first:

1. **Python 3.9+** - [Download](https://www.python.org/downloads/)
2. **Node.js 18+** - [Download](https://nodejs.org/)
3. **Git** - [Download](https://git-scm.com/)

---

## ⚡ Quick Start (5 Minutes)

### Step 1: Get Groq API Key (FREE)

1. Go to https://console.groq.com
2. Sign up (it's free!)
3. Click "API Keys" → "Create API Key"
4. Copy your key

### Step 2: Setup Backend

```bash
# Open terminal in project folder
cd lorify/backend

# Create virtual environment
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
# Windows:
echo GROQ_API_KEY=your_key_here > .env
echo ALLOWED_ORIGINS=http://localhost:3000 >> .env

# Mac/Linux:
echo "GROQ_API_KEY=your_key_here" > .env
echo "ALLOWED_ORIGINS=http://localhost:3000" >> .env

# Run server
uvicorn app.main:app --reload
```

✅ Backend running at: http://localhost:8000

### Step 3: Setup Frontend

```bash
# Open NEW terminal
cd lorify/frontend

# Install dependencies
npm install

# Create .env.local
# Windows:
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local

# Mac/Linux:
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Run dev server
npm run dev
```

✅ Frontend running at: http://localhost:3000

### Step 4: Test It!

1. Open http://localhost:3000
2. Click "Roast Mode"
3. Type: "my situationship said lets focus on ourselves"
4. Click "Roast Me 🔥"
5. Get roasted! 💀

---

## 🎯 What Each File Does

### Backend Structure
```
backend/
├── app/
│   ├── main.py              # FastAPI app entry point
│   ├── routes/              # API endpoints
│   │   ├── roast.py         # POST /api/roast
│   │   ├── court.py         # POST /api/court
│   │   └── upload.py        # POST /api/ocr (image upload)
│   ├── services/            # Business logic
│   │   ├── ai_service.py    # AI generation
│   │   └── ocr_service.py   # Text extraction
│   └── config/
│       └── settings.py      # Environment config
├── requirements.txt         # Python dependencies
└── .env                     # API keys (YOU CREATE THIS)
```

### Frontend Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx         # Home page (mode selection)
│   │   ├── layout.tsx       # Root layout
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── RoastMode.tsx    # Roast interface
│   │   ├── CourtMode.tsx    # Court interface
│   │   ├── ShareCard.tsx    # Shareable result card
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorMessage.tsx
│   ├── hooks/
│   │   ├── useRoast.ts      # Roast API hook
│   │   └── useCourt.ts      # Court API hook
│   └── lib/
│       └── api.ts           # API client
├── package.json
└── .env.local               # API URL (YOU CREATE THIS)
```

### AI Prompts
```
ai-prompts/
├── savage-genz.txt          # Gen Z roaster
├── court-judge.txt          # Drama judge
├── indian-parent.txt        # Compares to Sharma ji
├── anime-narrator.txt       # Epic storytelling
├── therapist.txt            # Emotional support
└── toxic-bestie.txt         # Bad advice
```

---

## 🔧 Configuration Files

### Backend `.env`
```env
# Required
GROQ_API_KEY=your_groq_key_here
ALLOWED_ORIGINS=http://localhost:3000

# Optional (for additional features)
OPENAI_API_KEY=your_openai_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 🧪 Testing

### Test Backend API

Visit: http://localhost:8000/docs

This opens interactive API documentation where you can test endpoints.

### Test Roast Endpoint
```bash
curl -X POST http://localhost:8000/api/roast \
  -H "Content-Type: application/json" \
  -d '{"text": "my playlist is all sad songs", "personality": "savage-genz"}'
```

### Test Court Endpoint
```bash
curl -X POST http://localhost:8000/api/court \
  -H "Content-Type: application/json" \
  -d '{"chat_text": "He left me on read for 3 days"}'
```

---

## 🎨 Customization

### Add New AI Personality

1. Create `ai-prompts/your-personality.txt`
2. Write system prompt (see existing files for examples)
3. Use in API: `{"personality": "your-personality"}`

### Change Colors

Edit `frontend/tailwind.config.ts`:
```typescript
colors: {
  primary: "#FF006E",    // Pink
  secondary: "#8338EC",  // Purple
  accent: "#3A86FF",     // Blue
}
```

### Add New Mode

1. Create route in `backend/app/routes/`
2. Create component in `frontend/src/components/`
3. Add to home page mode selection

---

## 🐛 Troubleshooting

### "Module not found"
```bash
# Backend
pip install -r requirements.txt

# Frontend
rm -rf node_modules
npm install
```

### "Port already in use"
```bash
# Use different port
uvicorn app.main:app --reload --port 8001
```

### "API connection failed"
- Check backend is running (http://localhost:8000)
- Verify `.env.local` has correct URL
- Check CORS settings in backend

### "AI generation failed"
- Verify Groq API key is correct
- Check API key has no extra spaces
- Try OpenAI API as fallback

### "OCR not working"
```bash
# Install Tesseract
# Windows: Download from https://github.com/UB-Mannheim/tesseract/wiki
# Mac: brew install tesseract
# Linux: sudo apt-get install tesseract-ocr
```

---

## 🚀 Deployment

### Deploy Frontend (Vercel)
```bash
cd frontend
npm install -g vercel
vercel
```

### Deploy Backend (Render)
1. Push code to GitHub
2. Go to https://render.com
3. Create new Web Service
4. Connect GitHub repo
5. Add environment variables
6. Deploy!

See `docs/DEPLOYMENT.md` for detailed instructions.

---

## 📚 Documentation

- `docs/QUICKSTART.md` - 5-minute setup
- `docs/SETUP.md` - Detailed setup
- `docs/API.md` - API documentation
- `docs/ARCHITECTURE.md` - System design
- `docs/DEPLOYMENT.md` - Production deployment
- `docs/PROMPTS.md` - Prompt engineering

---

## 💡 Tips

1. **Use Groq API** - Faster and free tier is generous
2. **Keep terminals open** - One for backend, one for frontend
3. **Check logs** - Errors show in terminal
4. **Test API first** - Use http://localhost:8000/docs
5. **Mobile test** - Open on phone for responsive design

---

## 🆘 Need Help?

1. Check documentation in `/docs`
2. Review code comments
3. Test API at http://localhost:8000/docs
4. Check browser console (F12)
5. Check terminal logs

---

## 🎉 You're Done!

Your Lorify app is ready! Now go roast some playlists and judge some drama! 🔥⚖️

**Made for the chronically online** 💀
