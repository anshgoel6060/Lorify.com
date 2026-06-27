# ⚡ LORIFY - Quick Reference Card

## 🚀 Start Commands

### Backend
```bash
cd backend
venv\Scripts\activate              # Windows
source venv/bin/activate           # Mac/Linux
uvicorn app.main:app --reload
```
**URL**: http://localhost:8000

### Frontend
```bash
cd frontend
npm run dev
```
**URL**: http://localhost:3000

---

## 📁 Key Files

### Backend
```
backend/app/main.py              # FastAPI app
backend/app/routes/roast.py      # Roast endpoint
backend/app/routes/court.py      # Court endpoint
backend/app/services/ai_service.py  # AI logic
backend/.env                     # API keys
```

### Frontend
```
frontend/src/app/page.tsx        # Home page
frontend/src/components/RoastMode.tsx   # Roast UI
frontend/src/components/CourtMode.tsx   # Court UI
frontend/src/lib/api.ts          # API client
frontend/.env.local              # API URL
```

---

## 🎯 API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/roast` | POST | Generate roast |
| `/api/court` | POST | Generate verdict |
| `/api/ocr` | POST | Extract text from image |
| `/api/roast-image` | POST | OCR + roast |
| `/docs` | GET | API documentation |

---

## 🎭 Personalities

| ID | Name | Style |
|----|------|-------|
| `savage-genz` | Savage Gen Z 🔥 | Brutal humor |
| `court-judge` | Court Judge ⚖️ | Dramatic verdicts |
| `indian-parent` | Indian Parent 👨‍👩‍👧 | Compares to neighbors |
| `anime-narrator` | Anime Narrator ⚡ | Epic storytelling |
| `therapist` | Therapist 🧘 | Gentle support |
| `toxic-bestie` | Toxic Bestie 💅 | Bad advice |

---

## 🔧 Environment Variables

### Backend `.env`
```env
GROQ_API_KEY=your_key_here
ALLOWED_ORIGINS=http://localhost:3000
```

### Frontend `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 🐛 Quick Fixes

| Problem | Solution |
|---------|----------|
| Module not found | `pip install -r requirements.txt` |
| Port in use | Use `--port 8001` |
| API failed | Check backend running |
| CORS error | Update ALLOWED_ORIGINS |

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| `START_HERE.md` | ⭐ Quick start |
| `SETUP_INSTRUCTIONS.md` | Complete setup |
| `COMPLETE_GUIDE.md` | End-to-end guide |
| `FINAL_SUMMARY.md` | Project summary |
| `docs/API.md` | API reference |
| `docs/DEPLOYMENT.md` | Deploy guide |

---

## 🎨 Customization

### Change Colors
```typescript
// frontend/tailwind.config.ts
colors: {
  primary: "#FF006E",
  secondary: "#8338EC",
  accent: "#3A86FF",
}
```

### Add Personality
```
1. Create ai-prompts/your-name.txt
2. Write system prompt
3. Use: {"personality": "your-name"}
```

---

## 🚀 Deploy

### Frontend (Vercel)
```bash
cd frontend
vercel
```

### Backend (Render)
1. Push to GitHub
2. Connect to Render
3. Add env vars
4. Deploy

---

## 📊 Project Stats

- **Files**: 50+
- **Lines**: 5,000+
- **Endpoints**: 4
- **Components**: 8
- **Personalities**: 6

---

## ✅ Checklist

- [ ] Backend running
- [ ] Frontend running
- [ ] API key configured
- [ ] Roast Mode works
- [ ] Court Mode works
- [ ] Image upload works

---

## 🔗 URLs

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **Groq Console**: https://console.groq.com

---

**Made for the chronically online** 💀
