# 🔥 Lorify Website - Setup Guide

## Quick Start (2 Minutes)

### 1. Get Your Free API Key
1. Visit [console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Click "Create API Key"
5. Copy your API key

### 2. Configure the Website
1. Open `script.js` in a text editor
2. Find line 5: `API_KEY: 'YOUR_GROQ_API_KEY_HERE'`
3. Replace `YOUR_GROQ_API_KEY_HERE` with your actual API key
4. Save the file

### 3. Run the Website
Simply open `index.html` in your web browser!

**That's it!** No build process, no dependencies, no server required.

---

## Features

### 🔥 Roast Mode
- **5 AI Personalities**: Savage Gen Z, Indian Parent, Anime Narrator, Therapist, Toxic Bestie
- **Text Input**: Paste your playlist, bio, or life situation
- **Instant Roasting**: Get brutally funny AI-generated roasts
- **Shareable Results**: Copy or share your roasts

### ⚖️ Court Mode
- **Drama Analysis**: AI judges your relationship conflicts
- **Red Flag Scores**: Get quantified red flag ratings (0-10)
- **Emotional Damage**: Measure the emotional impact (0-10)
- **Dramatic Verdicts**: GUILTY or NOT GUILTY with savage commentary
- **Funniest Observations**: Get the most quotable line

### 🎨 UI Features
- **Dark Theme**: Easy on the eyes, perfect for late-night roasting
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Polished transitions and effects
- **Keyboard Shortcuts**: Ctrl/Cmd+Enter to submit, Escape to go back
- **Auto-Save**: Your inputs are saved automatically
- **Toast Notifications**: Get instant feedback on actions

---

## File Structure

```
website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── SETUP.md           # This file
└── README.md          # Project overview
```

---

## Configuration Options

### API Settings (in script.js)

```javascript
const CONFIG = {
    API_URL: 'https://api.groq.com/openai/v1/chat/completions',
    API_KEY: 'YOUR_GROQ_API_KEY_HERE',  // ← Add your key here
    MODEL: 'llama-3.1-70b-versatile'
};
```

### Available Models
- `llama-3.1-70b-versatile` (default) - Best for creative responses
- `llama-3.1-8b-instant` - Faster, good for quick responses
- `mixtral-8x7b-32768` - Alternative model

---

## Customization

### Adding New Personalities

1. Open `script.js`
2. Find the `AI_PROMPTS` object
3. Add your new personality:

```javascript
'your-personality': `You are a [description] AI personality.

Your vibe: [describe the vibe]

Rules:
- [rule 1]
- [rule 2]
- Keep responses SHORT (2-4 sentences max)

Tone: [describe tone]

Remember: [key reminder]`
```

4. Add the personality option in `index.html`:

```html
<div class="personality-option" data-personality="your-personality" 
     onclick="selectPersonality(this, 'your-personality')">
    <div class="personality-emoji">🎭</div>
    <div class="personality-name">Your Personality</div>
    <div class="personality-desc">Description</div>
</div>
```

### Changing Colors

Edit `styles.css` to change the color scheme:

```css
/* Primary color (Roast Mode) */
--roast-color: #FF006E;

/* Secondary color (Court Mode) */
--court-color: #8338EC;

/* Background */
--bg-primary: #050505;
--bg-secondary: #0A0A0A;
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + Enter` | Submit current form |
| `Escape` | Go back to home screen |

---

## Browser Compatibility

✅ **Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

⚠️ **Partial Support:**
- Internet Explorer (not recommended)

---

## Troubleshooting

### "API key not configured" Error
**Solution:** Open `script.js` and replace `YOUR_GROQ_API_KEY_HERE` with your actual Groq API key.

### "Network error" Message
**Possible causes:**
1. No internet connection
2. API key is invalid
3. Groq API is down (rare)

**Solution:** Check your internet connection and verify your API key is correct.

### "Rate limit exceeded" Error
**Cause:** You've made too many requests in a short time.

**Solution:** Wait 1-2 minutes and try again. Groq's free tier has rate limits.

### Results Not Showing
**Solution:** 
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify API key is configured correctly
4. Try refreshing the page

### Styling Issues
**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Try a different browser

---

## Performance Tips

### Faster Responses
1. Use `llama-3.1-8b-instant` model instead of 70b
2. Keep input text under 500 characters
3. Use simpler personalities (Savage Gen Z is fastest)

### Reduce API Costs
1. Cache responses in localStorage (advanced)
2. Implement request debouncing
3. Use shorter prompts

---

## Security Notes

### API Key Security
⚠️ **IMPORTANT:** Your API key is visible in the JavaScript file. This is fine for:
- Personal use
- Local testing
- Trusted environments

🚨 **NOT RECOMMENDED for:**
- Public websites
- Production deployments
- Shared hosting

### For Production Use
Consider using a backend server to hide your API key:
1. Use the FastAPI backend in `/backend` folder
2. Deploy backend to Render/Railway
3. Update `API_URL` to point to your backend
4. Remove `API_KEY` from frontend code

---

## Deployment

### Option 1: Static Hosting (Simple)
Deploy to any static host:
- **Netlify**: Drag and drop the `website` folder
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Push to `gh-pages` branch
- **Cloudflare Pages**: Connect your repo

⚠️ Remember: API key will be visible in source code

### Option 2: With Backend (Secure)
1. Deploy the FastAPI backend first
2. Update `CONFIG.API_URL` to backend URL
3. Remove `API_KEY` from frontend
4. Deploy frontend to static host

---

## Advanced Features

### Local Storage
The app automatically saves:
- Your input text
- Selected personality
- Last used mode

Clear saved data:
```javascript
localStorage.clear();
```

### Analytics Integration
Add your analytics code in `script.js`:

```javascript
function trackEvent(eventName, eventData = {}) {
    // Google Analytics
    gtag('event', eventName, eventData);
    
    // Or Mixpanel
    mixpanel.track(eventName, eventData);
}
```

### Custom Themes
Create a theme switcher by adding CSS variables:

```css
:root {
    --primary-color: #FF006E;
    --bg-color: #050505;
}

[data-theme="light"] {
    --primary-color: #FF006E;
    --bg-color: #FFFFFF;
}
```

---

## API Usage & Costs

### Groq Free Tier
- **Rate Limit**: ~30 requests per minute
- **Cost**: FREE
- **Models**: All models available

### Typical Usage
- **Roast Mode**: ~200-300 tokens per request
- **Court Mode**: ~400-500 tokens per request
- **Cost per 1000 requests**: FREE on Groq

---

## Support

### Need Help?
1. Check this guide first
2. Review browser console for errors
3. Test API key at [console.groq.com](https://console.groq.com)
4. Check Groq API status

### Common Questions

**Q: Can I use this offline?**
A: No, it requires internet to call the Groq API.

**Q: Is my data saved?**
A: Only locally in your browser. Nothing is sent to our servers.

**Q: Can I modify the code?**
A: Yes! It's open source. Customize as you like.

**Q: How do I update the prompts?**
A: Edit the `AI_PROMPTS` object in `script.js`.

---

## Credits

Built with:
- **Groq API** - Fast AI inference
- **Vanilla JavaScript** - No frameworks needed
- **CSS3** - Modern styling and animations
- **HTML5** - Semantic markup

---

## License

MIT License - Free to use and modify!

---

<div align="center">

**Made for the chronically online** 💀

[Back to Main README](../README.md)

</div>
