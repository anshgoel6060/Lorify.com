# 🔥 LORIFY — AI-Powered Social Entertainment Platform

<div align="center">

**The internet reacting to your life** 💀

[![Made with FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Made with Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Made with Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Made with TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## 🎯 What is Lorify?

Lorify transforms your life situations, drama, screenshots, and opinions into **brutally funny AI-generated content**. It's NOT a productivity tool or boring chatbot — it's pure entertainment.

### Core Features

🔥 **Roast Mode** - Get savagely roasted by AI  
⚖️ **Court Mode** - AI judges your relationship drama  
🎭 **5 AI Personalities** - From Gen Z savage to Indian parent  
📸 **Image Upload** - Upload screenshots for instant roasting  
🎨 **Modern UI** - Dark theme, animations, mobile-ready  
📱 **Share Cards** - Screenshot-worthy results  

---

## ⚡ Quick Start (5 Minutes)

### 1. Get Free API Key
Visit [console.groq.com](https://console.groq.com) → Sign up → Create API key

### 2. Setup Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate              # Windows
source venv/bin/activate           # Mac/Linux
pip install -r requirements.txt
echo GROQ_API_KEY=your_key > .env
uvicorn app.main:app --reload
```

### 3. Setup Frontend
```bash
cd frontend
npm install
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
npm run dev
```

### 4. Open & Test
Visit http://localhost:3000 and get roasted! 🔥

---

## 📁 Project Structure

```
lorify/
├── backend/          # FastAPI Python server
├── frontend/         # Next.js React app
├── ai-prompts/       # AI personality prompts
├── docs/             # Complete documentation
├── START_HERE.md     # ⭐ Quick start guide
└── SETUP_INSTRUCTIONS.md  # Detailed setup
```

---

## 🎭 AI Personalities

| Personality | Style | Example |
|------------|-------|---------|
| 🔥 **Savage Gen Z** | Brutal internet humor | "This playlist screams emotional damage" |
| ⚖️ **Court Judge** | Dramatic verdicts | "The defendant weaponized 'K'" |
| 👨‍👩‍👧 **Indian Parent** | Compares to neighbors | "Sharma ji's son is a doctor..." |
| ⚡ **Anime Narrator** | Epic storytelling | "Their power level... it's dropping!" |
| 🧘 **Therapist** | Gentle support | "That's completely valid" |
| 💅 **Toxic Bestie** | Bad advice | "Block them and watch their stories" |

---

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **Groq API** - Fast AI inference
- **Tesseract** - OCR text extraction
- **Pydantic** - Data validation

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Axios** - API client

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [START_HERE.md](START_HERE.md) | ⭐ Quick start (5 min) |
| [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md) | Complete setup guide |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | Full project overview |
| [FEATURES.md](FEATURES.md) | Feature list & roadmap |
| [docs/API.md](docs/API.md) | API documentation |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Deploy to production |
| [docs/PROMPTS.md](docs/PROMPTS.md) | Prompt engineering |

---

## 🚀 API Endpoints

### Roast Mode
```bash
POST /api/roast
{
  "text": "my situationship said lets focus on ourselves",
  "personality": "savage-genz"
}
```

### Court Mode
```bash
POST /api/court
{
  "chat_text": "He left me on read for 3 days"
}
```

### Image Upload
```bash
POST /api/roast-image
FormData: { file: image.png }
```

---

## 🎨 Screenshots

### Home Page
Mode selection with animated cards

### Roast Mode
- Text input or image upload
- Personality selector
- Instant AI roasting
- Shareable result cards

### Court Mode
- Drama analysis
- Red flag scores
- Emotional damage ratings
- Dramatic verdicts

---

## 🔧 Configuration

### Backend `.env`
```env
GROQ_API_KEY=your_groq_key_here
ALLOWED_ORIGINS=http://localhost:3000
```

### Frontend `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 🐛 Troubleshooting

**Module not found?**
```bash
pip install -r requirements.txt  # Backend
npm install                       # Frontend
```

**Port in use?**
```bash
uvicorn app.main:app --reload --port 8001
```

**API connection failed?**
- Check backend is running
- Verify .env.local URL
- Check CORS settings

---

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel
```

### Backend (Render/Railway)
See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

---

## 📈 Roadmap

### ✅ Phase 1 (MVP) - COMPLETE
- Roast Mode
- Court Mode
- 5 AI Personalities
- Image Upload & OCR
- Share Cards

### 🔄 Phase 2 (Next)
- User Authentication
- Public Feed
- Save Favorites
- More Personalities

### ⏳ Phase 3 (Future)
- Mobile Apps
- Voice Responses
- Video Generation
- Custom Personalities

---

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines first.

---

## 📄 License

MIT License - feel free to use for your projects!

---

## 💡 Credits

Built with:
- [FastAPI](https://fastapi.tiangolo.com/)
- [Next.js](https://nextjs.org/)
- [Groq](https://groq.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 🆘 Support

Need help?
1. Check [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)
2. Read documentation in `/docs`
3. Test API at http://localhost:8000/docs
4. Check browser console for errors

---

<div align="center">

**Made for the chronically online** 💀

[Get Started](START_HERE.md) • [Documentation](docs/) • [API Reference](docs/API.md)

</div>
