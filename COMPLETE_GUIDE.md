# 🎯 LORIFY - Complete End-to-End Guide

## 📖 Table of Contents
1. [What is Lorify?](#what-is-lorify)
2. [Quick Start](#quick-start)
3. [File Structure](#file-structure)
4. [Setup Guide](#setup-guide)
5. [How It Works](#how-it-works)
6. [Customization](#customization)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 What is Lorify?

**Lorify** is an AI-powered platform that roasts your life with Gen Z humor. Upload screenshots, playlists, or drama and get brutally funny AI responses.

### Key Features
- 🔥 **Roast Mode**: AI roasts your life situations
- ⚖️ **Court Mode**: AI judges relationship drama
- 🎭 **5 Personalities**: Savage Gen Z, Indian Parent, Anime Narrator, Therapist, Toxic Bestie
- 📸 **Image Upload**: OCR + instant roasting
- 🎨 **Modern UI**: Dark theme, animations, mobile-ready

### Tech Stack
- **Backend**: Python + FastAPI
- **Frontend**: Next.js + React + TypeScript
- **AI**: Groq API (free & fast)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

---

## ⚡ Quick Start

### 1. Get API Key (2 minutes)
1. Go to https://console.groq.com
2. Sign up (free)
3. Create API key
4. Copy it

### 2. Setup Backend (2 minutes)
```bash
cd backend
python -m venv venv
venv\Scripts\activate              # Windows
source venv/bin/activate           # Mac/Linux
pip install -r requirements.txt
echo GROQ_API_KEY=your_key > .env
echo ALLOWED_ORIGINS=http://localhost:3000 >> .env
uvicorn app.main:app --reload
```

### 3. Setup Frontend (1 minute)
```bash
cd frontend
npm install
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
npm run dev
```

### 4. Test (30 seconds)
Open http://localhost:3000 → Click "Roast Mode" → Type something → Get roasted! 🔥

---

## 📁 File Structure

```
lorify/
│
├── 📄 START_HERE.md                    ⭐ Read this first!
├── 📄 SETUP_INSTRUCTIONS.md            Complete setup guide
├── 📄 PROJECT_SUMMARY.md               Full project overview
├── 📄 FEATURES.md                      Feature list
├── 📄 CHECKLIST.md                     Verification checklist
├── 📄 COMPLETE_GUIDE.md                This file
├── 📄 README.md                        Project README
│
├── 📁 backend/                         Python FastAPI Server
│   ├── 📁 app/
│   │   ├── main.py                     FastAPI entry point
│   │   ├── 📁 routes/
│   │   │   ├── roast.py                POST /api/roast
│   │   │   ├── court.py                POST /api/court
│   │   │   └── upload.py               POST /api/ocr, /api/roast-image
│   │   ├── 📁 services/
│   │   │   ├── ai_service.py           AI generation
│   │   │   └── ocr_service.py          Text extraction
│   │   └── 📁 config/
│   │       └── settings.py             Configuration
│   ├── requirements.txt                Dependencies
│   └── .env                            ⚠️ YOU CREATE THIS
│
├── 📁 frontend/                        Next.js React App
│   ├── 📁 src/
│   │   ├── 📁 app/
│   │   │   ├── page.tsx                Home page
│   │   │   ├── layout.tsx              Root layout
│   │   │   └── globals.css             Global styles
│   │   ├── 📁 components/
│   │   │   ├── RoastMode.tsx           Roast interface
│   │   │   ├── CourtMode.tsx           Court interface
│   │   │   ├── ShareCard.tsx           Share cards
│   │   │   ├── PersonalitySelector.tsx AI picker
│   │   │   ├── ImageUpload.tsx         Image upload
│   │   │   ├── LoadingSpinner.tsx      Loading state
│   │   │   └── ErrorMessage.tsx        Error display
│   │   ├── 📁 hooks/
│   │   │   ├── useRoast.ts             Roast API hook
│   │   │   └── useCourt.ts             Court API hook
│   │   └── 📁 lib/
│   │       └── api.ts                  API client
│   ├── package.json                    Dependencies
│   ├── tsconfig.json                   TypeScript config
│   ├── tailwind.config.ts              Tailwind config
│   └── .env.local                      ⚠️ YOU CREATE THIS
│
├── 📁 ai-prompts/                      AI Personalities
│   ├── savage-genz.txt                 Gen Z roaster
│   ├── court-judge.txt                 Drama judge
│   ├── indian-parent.txt               Indian parent
│   ├── anime-narrator.txt              Anime narrator
│   ├── therapist.txt                   Therapist
│   └── toxic-bestie.txt                Toxic bestie
│
└── 📁 docs/                            Documentation
    ├── QUICKSTART.md                   5-minute setup
    ├── SETUP.md                        Detailed setup
    ├── API.md                          API docs
    ├── ARCHITECTURE.md                 System design
    ├── DEPLOYMENT.md                   Deploy guide
    └── PROMPTS.md                      Prompt engineering
```

---

## 🛠️ Setup Guide

### Prerequisites
- Python 3.9+ ([Download](https://www.python.org/downloads/))
- Node.js 18+ ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))

### Step 1: Get Groq API Key
1. Visit https://console.groq.com
2. Click "Sign Up" (it's free!)
3. Go to "API Keys" section
4. Click "Create API Key"
5. Copy the key (you'll need it soon)

### Step 2: Backend Setup

```bash
# Navigate to backend folder
cd lorify/backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
# On Windows:
echo GROQ_API_KEY=paste_your_key_here > .env
echo ALLOWED_ORIGINS=http://localhost:3000 >> .env

# On Mac/Linux:
echo "GROQ_API_KEY=paste_your_key_here" > .env
echo "ALLOWED_ORIGINS=http://localhost:3000" >> .env

# Start the server
uvicorn app.main:app --reload
```

✅ Backend should now be running at http://localhost:8000

### Step 3: Frontend Setup

Open a **NEW terminal** (keep backend running):

```bash
# Navigate to frontend folder
cd lorify/frontend

# Install dependencies
npm install

# Create .env.local file
# On Windows:
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local

# On Mac/Linux:
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Start the dev server
npm run dev
```

✅ Frontend should now be running at http://localhost:3000

### Step 4: Test It!

1. Open http://localhost:3000 in your browser
2. Click "Roast Mode 🔥"
3. Type: "my situationship said lets focus on ourselves"
4. Click "Roast Me"
5. Get roasted! 💀

---

## 🔧 How It Works

### Architecture Overview

```
User Browser
    ↓
Next.js Frontend (localhost:3000)
    ↓ HTTP Request
FastAPI Backend (localhost:8000)
    ↓ API Call
Groq AI Service
    ↓ Response
Backend → Frontend → User
```

### Request Flow

#### Roast Mode
1. User types text or uploads image
2. Frontend sends POST to `/api/roast`
3. Backend loads personality prompt
4. Backend calls Groq AI API
5. AI generates roast
6. Backend returns response
7. Frontend displays result

#### Court Mode
1. User types drama/situation
2. Frontend sends POST to `/api/court`
3. Backend loads court judge prompt
4. Backend calls Groq AI API
5. AI generates structured verdict
6. Backend returns JSON response
7. Frontend displays verdict card

### File Responsibilities

**Backend**
- `main.py`: FastAPI app, CORS, routes
- `roast.py`: Roast endpoint logic
- `court.py`: Court endpoint logic
- `upload.py`: Image upload & OCR
- `ai_service.py`: AI generation
- `ocr_service.py`: Text extraction
- `settings.py`: Environment config

**Frontend**
- `page.tsx`: Home page (mode selection)
- `RoastMode.tsx`: Roast interface
- `CourtMode.tsx`: Court interface
- `useRoast.ts`: Roast API calls
- `useCourt.ts`: Court API calls
- `api.ts`: Axios client

---

## 🎨 Customization

### Change Colors

Edit `frontend/tailwind.config.ts`:

```typescript
colors: {
  primary: "#FF006E",    // Change to your color
  secondary: "#8338EC",  // Change to your color
  accent: "#3A86FF",     // Change to your color
}
```

### Add New AI Personality

1. Create `ai-prompts/your-personality.txt`:

```
You are [personality description].

Your role: [what they do]

Rules:
- [rule 1]
- [rule 2]

Style examples:
- "[example 1]"
- "[example 2]"

Tone: [adjectives]

Remember: [final note]
```

2. Use in API:
```json
{
  "text": "...",
  "personality": "your-personality"
}
```

3. Add to PersonalitySelector component (optional)

### Modify Existing Prompts

Edit files in `ai-prompts/` folder to change AI behavior.

### Add New Endpoint

1. Create `backend/app/routes/your_route.py`
2. Add router to `main.py`
3. Create frontend component
4. Add API call in `lib/api.ts`

---

## 🚀 Deployment

### Deploy Frontend (Vercel)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel

# Follow prompts
# Add environment variable: NEXT_PUBLIC_API_URL=your_backend_url
```

### Deploy Backend (Render)

1. Push code to GitHub
2. Go to https://render.com
3. Click "New +" → "Web Service"
4. Connect GitHub repo
5. Configure:
   - Build Command: `pip install -r backend/requirements.txt`
   - Start Command: `cd backend && uvicorn app.main:app --host 0.0.0.0 --port $PORT`
6. Add environment variables:
   - `GROQ_API_KEY`
   - `ALLOWED_ORIGINS` (your Vercel URL)
7. Deploy!

See `docs/DEPLOYMENT.md` for detailed instructions.

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
- Check CORS settings in `backend/app/main.py`

### "AI generation failed"
- Verify Groq API key is correct
- Check for extra spaces in `.env`
- Try OpenAI API as fallback

### "OCR not working"
Install Tesseract:
- **Windows**: Download from [GitHub](https://github.com/UB-Mannheim/tesseract/wiki)
- **Mac**: `brew install tesseract`
- **Linux**: `sudo apt-get install tesseract-ocr`

### "CORS error"
Update `backend/app/config/settings.py`:
```python
ALLOWED_ORIGINS = ["http://localhost:3000", "your-frontend-url"]
```

---

## 📚 Additional Resources

### Documentation
- [START_HERE.md](START_HERE.md) - Quick start
- [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md) - Complete setup
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Full overview
- [FEATURES.md](FEATURES.md) - Feature list
- [docs/API.md](docs/API.md) - API reference
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - System design
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) - Deploy guide
- [docs/PROMPTS.md](docs/PROMPTS.md) - Prompt engineering

### Testing
- Backend API docs: http://localhost:8000/docs
- Frontend: http://localhost:3000
- Test endpoints with curl or Postman

### Support
1. Check documentation
2. Review code comments
3. Test API at /docs
4. Check browser console (F12)
5. Check terminal logs

---

## 🎉 You're Done!

Your Lorify app is fully set up and ready to roast! 🔥

### Next Steps
1. ✅ Test all features
2. 🎨 Customize colors/styles
3. 🎭 Add new personalities
4. 🚀 Deploy to production
5. 📱 Share with friends

---

**Made for the chronically online** 💀

Happy roasting! 🔥⚖️
