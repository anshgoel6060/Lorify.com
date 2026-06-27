# ✅ Lorify - Testing Checklist

## 🔥 Standalone Website Testing

### Initial Setup
- [ ] Groq API key obtained from console.groq.com
- [ ] API key added to `website/script.js` (line 5)
- [ ] All 3 files present (index.html, styles.css, script.js)
- [ ] Files opened from file system or local server

---

### Home Screen Tests
- [ ] Page loads without errors
- [ ] Logo displays with gradient animation
- [ ] Tagline visible: "The internet reacting to your life"
- [ ] Two mode cards visible (Roast & Court)
- [ ] Hover effects work on mode cards (glow, scale)
- [ ] Cards are clickable
- [ ] Footer displays correctly
- [ ] No console errors (F12)

---

### Roast Mode Tests

#### Navigation
- [ ] Clicking "Roast Mode" card navigates to roast screen
- [ ] Back button visible and works
- [ ] Escape key returns to home

#### Personality Selector
- [ ] 5 personality options visible
- [ ] Can click to select personality
- [ ] Active state shows (pink border)
- [ ] Savage Gen Z selected by default
- [ ] Toast notification shows on selection

#### Text Input
- [ ] Text area accepts input
- [ ] Character counter updates (0/2000)
- [ ] Placeholder text visible
- [ ] Can type freely
- [ ] Input saves to localStorage

#### Submit & Loading
- [ ] "Roast Me 🔥" button visible
- [ ] Button clickable
- [ ] Ctrl/Cmd+Enter submits form
- [ ] Loading spinner appears
- [ ] Loading text: "Preparing your roast... 🔥"
- [ ] Button disabled during loading

#### Results Display
- [ ] Result card appears after loading
- [ ] Roast text displays correctly
- [ ] Header shows emoji and title
- [ ] "lorify.app" brand displays
- [ ] Card has pink border with glow
- [ ] Animation plays (slide up + glow)

#### Actions
- [ ] Copy button works
- [ ] Toast notification: "Copied to clipboard! 📋"
- [ ] Share button opens native dialog (if supported)
- [ ] "Roast Again" button clears and resets
- [ ] All actions have visual feedback

#### Error Handling
- [ ] Empty submission shows toast error
- [ ] API error shows error card
- [ ] Error message is helpful
- [ ] "Try Again" button works
- [ ] Can recover from errors

---

### Court Mode Tests

#### Navigation
- [ ] Clicking "Court Mode" card navigates to court screen
- [ ] Back button visible and works
- [ ] Escape key returns to home

#### Text Input
- [ ] Text area accepts input (larger than roast mode)
- [ ] Character counter updates (0/3000)
- [ ] Placeholder text visible
- [ ] Can type freely
- [ ] Input saves to localStorage

#### Submit & Loading
- [ ] "Get Verdict ⚖️" button visible
- [ ] Button has purple color (not pink)
- [ ] Button clickable
- [ ] Ctrl/Cmd+Enter submits form
- [ ] Loading spinner appears
- [ ] Loading text: "The court is deliberating... ⚖️"

#### Results Display
- [ ] Result card appears after loading
- [ ] Verdict title shows (GUILTY or NOT GUILTY)
- [ ] Verdict emoji shows (😤 or 😌)
- [ ] Ruling text displays
- [ ] Red flag score shows (0-10)
- [ ] Emotional damage score shows (0-10)
- [ ] Funniest observation displays
- [ ] Card has purple border with glow

#### Actions
- [ ] Copy button works
- [ ] Share button works
- [ ] "Judge Another" button clears and resets
- [ ] All actions have visual feedback

---

### Responsive Design Tests

#### Desktop (1920x1080)
- [ ] Layout looks good
- [ ] 2 mode cards side by side
- [ ] 5 personality options in one row
- [ ] Text is readable
- [ ] Spacing looks good

#### Tablet (768x1024)
- [ ] Layout adjusts correctly
- [ ] Mode cards stack or side by side
- [ ] Personality options wrap
- [ ] Everything accessible

#### Mobile (375x667)
- [ ] Mode cards stack vertically
- [ ] Personality options in 2 columns
- [ ] Text input full width
- [ ] Buttons full width
- [ ] Touch targets adequate
- [ ] Font sizes readable
- [ ] No horizontal scroll

---

### Browser Compatibility Tests

#### Chrome/Edge
- [ ] All features work
- [ ] Animations smooth
- [ ] Copy works
- [ ] Share works

#### Firefox
- [ ] All features work
- [ ] Animations smooth
- [ ] Copy works
- [ ] Share works

#### Safari (Mac/iOS)
- [ ] All features work
- [ ] Animations smooth
- [ ] Copy works
- [ ] Share works

---

### Keyboard Navigation Tests
- [ ] Tab moves between elements
- [ ] Enter activates buttons
- [ ] Escape goes back
- [ ] Ctrl/Cmd+Enter submits
- [ ] Space selects options
- [ ] Focus indicators visible

---

### Accessibility Tests
- [ ] Can navigate with keyboard only
- [ ] Focus states are visible
- [ ] Color contrast is adequate
- [ ] Text is readable
- [ ] Buttons have clear labels
- [ ] Error messages are clear

---

### Performance Tests
- [ ] Page loads in < 2 seconds
- [ ] Animations are smooth (60fps)
- [ ] No lag when typing
- [ ] API calls complete in reasonable time
- [ ] No memory leaks (check DevTools)

---

### LocalStorage Tests
- [ ] Roast input saves automatically
- [ ] Court input saves automatically
- [ ] Personality selection saves
- [ ] Data persists after refresh
- [ ] Can clear data manually

---

### API Integration Tests
- [ ] API key validation works
- [ ] Setup instructions show if no key
- [ ] Groq API calls succeed
- [ ] Response parsing works
- [ ] Error handling works for:
  - [ ] Invalid API key
  - [ ] Network errors
  - [ ] Rate limiting
  - [ ] Timeout errors

---

## 🏗️ Full Stack App Testing

### Backend Tests (http://localhost:8000)

#### Server Status
- [ ] Server starts without errors
- [ ] API docs available at /docs
- [ ] Health check endpoint works
- [ ] CORS configured correctly

#### Roast Endpoint (/api/roast)
- [ ] POST request works
- [ ] Accepts text and personality
- [ ] Returns roast text
- [ ] Error handling works
- [ ] Response time < 5 seconds

#### Court Endpoint (/api/court)
- [ ] POST request works
- [ ] Accepts chat_text
- [ ] Returns JSON with verdict
- [ ] All fields present:
  - [ ] verdict
  - [ ] red_flag_score
  - [ ] emotional_damage_score
  - [ ] ruling
  - [ ] funniest_observation

#### Upload Endpoint (/api/upload)
- [ ] POST request accepts file
- [ ] OCR extracts text
- [ ] Returns extracted text
- [ ] Handles image errors

---

### Frontend Tests (http://localhost:3000)

#### All Standalone Tests Plus:
- [ ] Image upload component visible
- [ ] Can select image file
- [ ] Image preview shows
- [ ] OCR extraction works
- [ ] Extracted text populates input
- [ ] Can roast extracted text

---

## 🌐 Deployment Tests

### Pre-Deployment
- [ ] All local tests pass
- [ ] API key configured
- [ ] No console errors
- [ ] Production build succeeds
- [ ] Assets optimized

### Post-Deployment
- [ ] Site loads from URL
- [ ] HTTPS enabled
- [ ] All features work
- [ ] Mobile responsive
- [ ] Fast load times (< 3s)
- [ ] SEO meta tags present
- [ ] Social sharing works

---

## 🐛 Known Issues to Test

### Common Issues
- [ ] API key not showing setup modal
- [ ] Toast notifications not appearing
- [ ] LocalStorage not working (private mode)
- [ ] Share API not supported (fallback to copy)
- [ ] Long text causing layout issues

### Edge Cases
- [ ] Very long input (2000+ chars)
- [ ] Special characters in input
- [ ] Emoji in input
- [ ] Empty/whitespace input
- [ ] Rapid multiple submissions
- [ ] Network disconnect during request

---

## ✅ Final Pre-Launch Checklist

### Documentation
- [ ] README.md is clear
- [ ] QUICKSTART.md is accurate
- [ ] API instructions are correct
- [ ] Deployment guides work

### Code Quality
- [ ] No console errors
- [ ] No console warnings
- [ ] Code is commented
- [ ] Variables named clearly

### User Experience
- [ ] First-time user can figure it out
- [ ] Error messages are helpful
- [ ] Loading states are clear
- [ ] Success feedback is obvious

### Performance
- [ ] Page load < 3 seconds
- [ ] Interactions feel instant
- [ ] Animations are smooth
- [ ] No memory leaks

### Security
- [ ] API key not exposed (if backend used)
- [ ] No XSS vulnerabilities
- [ ] CORS configured correctly
- [ ] Input sanitized

---

## 🎯 Priority Testing Order

### Must Test (Do First)
1. Home screen loads
2. Can navigate to Roast Mode
3. Can submit a roast
4. Result displays
5. Can navigate back

### Should Test (Do Second)
1. Court Mode works
2. All personalities work
3. Copy/Share works
4. Mobile responsive
5. Keyboard shortcuts

### Nice to Test (Do Third)
1. All browsers
2. Edge cases
3. Performance
4. Accessibility
5. LocalStorage

---

## 📊 Testing Report Template

```
Date: __________
Tester: __________
Version: Standalone / Full Stack / Deployed
URL/Path: __________

✅ Passed: _____ / _____
❌ Failed: _____ / _____
⚠️ Issues Found: _____

Critical Issues:
- 

Minor Issues:
-

Notes:
-

Recommendation: ☐ Ready to Launch  ☐ Needs Fixes  ☐ Major Issues
```

---

## 🎉 Launch Criteria

### Ready to Launch When:
- ✅ All "Must Test" items pass
- ✅ 90%+ of "Should Test" items pass
- ✅ No critical bugs
- ✅ Works on mobile
- ✅ API key configured
- ✅ Documentation accurate

---

<div align="center">

## 🔥 Happy Testing! 🔥

**Use this checklist to ensure everything works perfectly before launching!**

</div>
