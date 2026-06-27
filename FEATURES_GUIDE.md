# 🎨 Lorify Website - Features Guide

## 🏠 Home Screen

### Layout
```
┌─────────────────────────────────────┐
│                                     │
│           🔥 LORIFY 🔥              │
│   The internet reacting to your life│
│                                     │
│  ┌──────────────┐  ┌──────────────┐│
│  │     🔥       │  │      ⚖️      ││
│  │  Roast Mode  │  │  Court Mode  ││
│  │              │  │              ││
│  │ Get brutally │  │ AI judges    ││
│  │ roasted by AI│  │ your drama   ││
│  └──────────────┘  └──────────────┘│
│                                     │
│   Made for the chronically online 💀│
└─────────────────────────────────────┘
```

### Features
- **Logo**: Animated gradient text (pink → purple → blue)
- **Mode Cards**: Hover effects with glow
- **Responsive**: Stacks on mobile
- **Animations**: Fade in on load

---

## 🔥 Roast Mode Screen

### Layout
```
┌─────────────────────────────────────┐
│ ← Back                              │
│                                     │
│ 🔥 Roast Mode                       │
│ Prepare for emotional damage        │
│                                     │
│ Choose AI Personality               │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐    │
│ │🔥 │ │👨‍👩‍👧│ │⚡ │ │🧘 │ │💅 │    │
│ │Gen│ │Ind│ │Ani│ │The│ │Tox│    │
│ │ Z │ │Par│ │me │ │rap│ │Bes│    │
│ └───┘ └───┘ └───┘ └───┘ └───┘    │
│                                     │
│ What do you want roasted?           │
│ ┌─────────────────────────────────┐│
│ │                                 ││
│ │  [Text input area]              ││
│ │                                 ││
│ └─────────────────────────────────┘│
│ 0/2000 characters    [Roast Me 🔥] │
│                                     │
│ ┌─────────────────────────────────┐│
│ │ 🔥 Roasted                      ││
│ │ by Lorify AI        lorify.app  ││
│ │                                 ││
│ │ [AI-generated roast text]       ││
│ │                                 ││
│ │ [📋 Copy] [🔄 Share] [🔄 Again]││
│ └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

### Features

#### Personality Selector
- **5 Options**: Savage Gen Z, Indian Parent, Anime Narrator, Therapist, Toxic Bestie
- **Visual Feedback**: Active state with pink border and glow
- **Hover Effects**: Border color change
- **Responsive**: 2 columns on mobile, 5 on desktop

#### Text Input
- **Character Counter**: Live update (0/2000)
- **Placeholder**: Example text
- **Auto-save**: Saves to localStorage
- **Focus State**: Pink border on focus

#### Submit Button
- **Primary Action**: "Roast Me 🔥"
- **Hover Effect**: Glow and color change
- **Disabled State**: Gray when loading

#### Loading State
```
┌─────────────────────────────────────┐
│                                     │
│           ⭕ (spinning)              │
│     Preparing your roast... 🔥      │
│                                     │
└─────────────────────────────────────┘
```

#### Error State
```
┌─────────────────────────────────────┐
│              ⚠️                      │
│             Oops!                   │
│   [Error message here]              │
│        [Try Again]                  │
└─────────────────────────────────────┘
```

#### Result Card
- **Header**: Emoji + Title + Brand
- **Content**: AI-generated roast
- **Actions**: Copy, Share, Roast Again
- **Animation**: Slide up + glow effect
- **Border**: Pink with glow

---

## ⚖️ Court Mode Screen

### Layout
```
┌─────────────────────────────────────┐
│ ← Back                              │
│                                     │
│ ⚖️ Court Mode                       │
│ The Court of Internet Drama         │
│                                     │
│ Present your case                   │
│ ┌─────────────────────────────────┐│
│ │                                 ││
│ │  [Text input area]              ││
│ │  (larger than roast mode)       ││
│ │                                 ││
│ └─────────────────────────────────┘│
│ 0/3000 characters  [Get Verdict ⚖️]│
│                                     │
│ ┌─────────────────────────────────┐│
│ │      GUILTY          😤         ││
│ │                                 ││
│ │ [Ruling text from AI]           ││
│ │                                 ││
│ │ ┌──────────┐  ┌──────────┐     ││
│ │ │Red Flags │  │Emotional │     ││
│ │ │  8/10 🚩 │  │Damage    │     ││
│ │ │          │  │  9/10 💔 │     ││
│ │ └──────────┘  └──────────┘     ││
│ │                                 ││
│ │ Funniest Observation:           ││
│ │ [Savage one-liner]              ││
│ │                                 ││
│ │ [📋 Copy] [🔄 Share] [⚖️ Judge]││
│ └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

### Features

#### Text Input
- **Larger Area**: 3000 character limit
- **Placeholder**: Example drama
- **Auto-save**: Saves to localStorage

#### Submit Button
- **Primary Action**: "Get Verdict ⚖️"
- **Color**: Purple (not pink)
- **Hover Effect**: Purple glow

#### Loading State
```
┌─────────────────────────────────────┐
│                                     │
│           ⭕ (spinning)              │
│   The court is deliberating... ⚖️   │
│                                     │
└─────────────────────────────────────┘
```

#### Result Card
- **Verdict Title**: GUILTY or NOT GUILTY (large, purple)
- **Verdict Emoji**: 😤 (guilty) or 😌 (not guilty)
- **Ruling**: AI-generated verdict text
- **Score Cards**: 
  - Red Flags (0-10) 🚩
  - Emotional Damage (0-10) 💔
- **Observation Card**: Funniest line with purple border
- **Actions**: Copy, Share, Judge Another
- **Border**: Purple with glow

---

## 🎯 Interactive Features

### 1. Toast Notifications
```
┌─────────────────────────────────┐
│ ✅ Copied to clipboard! 📋     │
└─────────────────────────────────┘
```

**Appears for:**
- Copy success
- Share success
- Personality change
- Roast/verdict generated
- Errors

**Position**: Bottom right  
**Duration**: 3 seconds  
**Animation**: Slide in from right  

---

### 2. Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Ctrl/Cmd + Enter` | Submit current form |
| `Escape` | Go back to home |

**Visual Feedback**: None (works silently)

---

### 3. Auto-Save

**What's Saved:**
- Roast Mode input text
- Court Mode input text
- Selected personality

**When:**
- On every keystroke (debounced)
- On personality change

**Where:**
- Browser localStorage

**Restoration:**
- Automatic on page load

---

### 4. Copy to Clipboard

**How it Works:**
1. Click "📋 Copy" button
2. Text copied to clipboard
3. Toast notification appears
4. Button remains clickable

**Fallback:**
- If Clipboard API fails, shows error toast

---

### 5. Native Share

**How it Works:**
1. Click "🔄 Share" button
2. Native share dialog opens (if supported)
3. Share to apps/contacts
4. If not supported, copies to clipboard instead

**Supported On:**
- Mobile browsers (iOS Safari, Android Chrome)
- Some desktop browsers (Safari, Edge)

---

## 🎨 Visual Design

### Color Palette

#### Primary Colors
```
Roast Mode:  #FF006E (Hot Pink)
Court Mode:  #8338EC (Purple)
Accent:      #3A86FF (Blue)
```

#### Background Colors
```
Primary:     #050505 (Almost Black)
Secondary:   #0A0A0A (Dark Gray)
Cards:       #1F2937 (Lighter Gray)
```

#### Text Colors
```
Primary:     #FFFFFF (White)
Secondary:   #E5E7EB (Light Gray)
Tertiary:    #9CA3AF (Medium Gray)
Muted:       #6B7280 (Dark Gray)
```

#### Status Colors
```
Success:     #10B981 (Green)
Error:       #EF4444 (Red)
Warning:     #F59E0B (Orange)
```

---

### Typography

#### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

#### Font Sizes
```
Logo:        clamp(3rem, 10vw, 6rem)
Title:       clamp(2rem, 5vw, 3rem)
Subtitle:    1rem - 1.5rem
Body:        1rem - 1.125rem
Small:       0.875rem
Tiny:        0.75rem
```

#### Font Weights
```
Regular:     400
Medium:      500
Semibold:    600
Bold:        700
Extrabold:   800
Black:       900
```

---

### Spacing

#### Padding
```
Small:       0.5rem - 1rem
Medium:      1.5rem - 2rem
Large:       2.5rem - 3rem
```

#### Margins
```
Small:       0.5rem - 1rem
Medium:      1.5rem - 2rem
Large:       2rem - 3rem
```

#### Gaps
```
Grid:        1rem - 2rem
Flex:        0.5rem - 1rem
```

---

### Border Radius

```
Small:       0.5rem
Medium:      0.75rem - 1rem
Large:       1.5rem
Circle:      50%
```

---

### Animations

#### 1. Fade In
```
Duration: 0.3s
Easing: ease-in
Effect: Opacity 0 → 1, translateY(10px) → 0
```

#### 2. Slide Up
```
Duration: 0.5s
Easing: ease-out
Effect: Opacity 0 → 1, translateY(20px) → 0
```

#### 3. Slide Down
```
Duration: 0.5s
Easing: ease-out
Effect: Opacity 0 → 1, translateY(-20px) → 0
```

#### 4. Spin
```
Duration: 1s
Easing: linear
Effect: rotate(0deg) → rotate(360deg)
Infinite: Yes
```

#### 5. Glow
```
Duration: 2s
Easing: ease-in-out
Effect: box-shadow intensity varies
Infinite: Yes
```

#### 6. Gradient Shift
```
Duration: 3s
Easing: ease
Effect: background-position moves
Infinite: Yes
```

---

## 📱 Responsive Breakpoints

### Desktop (Default)
```
Min Width: 769px
Layout: 2-column grid
Personality: 5 columns
```

### Tablet
```
Width: 481px - 768px
Layout: 2-column grid
Personality: 3 columns
```

### Mobile
```
Max Width: 480px
Layout: 1 column
Personality: 1-2 columns
Font sizes: Reduced
Padding: Reduced
```

---

## ⚡ Performance Features

### 1. CSS Optimizations
- Hardware-accelerated animations (transform, opacity)
- Will-change hints for animations
- Efficient selectors

### 2. JavaScript Optimizations
- Event delegation where possible
- Debounced input handlers
- Minimal DOM manipulation

### 3. Loading Optimizations
- Font preconnect
- Minimal external resources
- Inline critical CSS (optional)

---

## ♿ Accessibility Features

### 1. Keyboard Navigation
- Tab through all interactive elements
- Enter to activate buttons
- Escape to go back
- Ctrl+Enter to submit

### 2. Focus States
- Visible focus indicators
- 2px outline on focus
- Offset for clarity

### 3. Semantic HTML
- Proper heading hierarchy
- Button elements (not divs)
- Form labels
- ARIA labels where needed

### 4. Color Contrast
- WCAG AA compliant
- Text readable on backgrounds
- Focus indicators visible

---

## 🔧 Customization Points

### Easy to Change

#### 1. Colors
**File:** `styles.css`
**Lines:** 60, 120, 135, etc.
```css
/* Change primary color */
border-color: #FF006E; /* Your color here */
```

#### 2. Text
**File:** `index.html`
**Lines:** 13, 22, 23, etc.
```html
<!-- Change logo -->
<h1 class="logo">YOUR BRAND</h1>
```

#### 3. Personalities
**File:** `script.js`
**Lines:** 20-80
```javascript
// Add new personality
'your-personality': `Your prompt...`
```

#### 4. API Model
**File:** `script.js`
**Line:** 6
```javascript
MODEL: 'llama-3.1-8b-instant' // Faster
```

---

## 🎯 User Flow

### Roast Mode Flow
```
1. Home Screen
   ↓ Click "Roast Mode"
2. Roast Screen
   ↓ Select Personality
3. Personality Selected
   ↓ Type Text
4. Text Entered
   ↓ Click "Roast Me" or Ctrl+Enter
5. Loading State
   ↓ API Call
6. Result Displayed
   ↓ Copy/Share/Again
7. Back to Step 3 or Home
```

### Court Mode Flow
```
1. Home Screen
   ↓ Click "Court Mode"
2. Court Screen
   ↓ Type Drama
3. Text Entered
   ↓ Click "Get Verdict" or Ctrl+Enter
4. Loading State
   ↓ API Call
5. Verdict Displayed
   ↓ Copy/Share/Judge Another
6. Back to Step 2 or Home
```

---

<div align="center">

## 🎉 All Features Implemented!

**Ready to use, customize, and deploy!**

[Back to README](README.md) • [Quick Start](QUICKSTART.md) • [Setup Guide](SETUP.md)

</div>
