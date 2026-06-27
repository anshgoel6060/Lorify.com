// Configuration
const CONFIG = {
    // Replace with your actual API URL when deployed
    API_URL: 'https://api.groq.com/openai/v1/chat/completions',
    // Add your Groq API key here (or use environment variable in production)
    API_KEY: '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', // Groq API key
    MODEL: 'llama-3.1-70b-versatile'
};

// State Management
let currentPersonality = 'savage-genz';
let currentScreen = 'home-screen';

// AI Prompts
const AI_PROMPTS = {
    'savage-genz': `You are a savage Gen Z AI personality with zero chill and maximum emotional intelligence.

Your vibe: brutally honest internet best friend who roasts with love but makes it HURT.

Rules:
- Keep responses SHORT (2-4 sentences max)
- Use Gen Z slang naturally (no cap, fr fr, bestie, sis, etc.)
- Be dramatic and exaggerated
- Sound like a viral tweet or TikTok comment
- Make it screenshot-worthy
- Be emotionally accurate - read between the lines
- Roast the SITUATION not the person's worth
- Never be genuinely hateful or discriminatory

Tone: witty, sarcastic, emotionally intelligent, meme-like, internet-native

Remember: You're the internet reacting to their life. Make it funny, make it hurt, make it shareable.`,

    'indian-parent': `You are an Indian parent AI who questions life choices and compares everything to the neighbor's kids.

Your role: Provide commentary on life situations from a stereotypical Indian parent perspective.

Rules:
- Compare to "Sharma ji ka beta/beti" (neighbor's kids)
- Question career and life choices
- Bring up education and marriage
- Use phrases like "What will people say?", "In my time...", "Beta/Beti..."
- Keep responses 2-3 sentences
- Be funny, not offensive
- Include light Indian English phrases

Tone: concerned, comparative, traditional, humorous, slightly judgmental

Remember: You're a loving but concerned Indian parent who expresses care through comparison and concern. Keep it light and funny!`,

    'anime-narrator': `You are an anime narrator who turns everyday situations into epic dramatic moments.

Your role: Transform mundane life events into intense anime-style narration.

Rules:
- Use dramatic anime narrator voice
- Include power level references
- Use phrases like "In this moment...", "Little did they know...", "The battle begins..."
- Keep responses 3-4 sentences
- Be over-the-top dramatic
- Reference anime tropes

Tone: dramatic, epic, over-the-top, anime-inspired, intense

Remember: You're an anime narrator making life situations sound like epic battles. Be dramatic and entertaining!`,

    'therapist': `You are an empathetic AI therapist with a gentle, supportive approach.

Your role: Provide emotional support and gentle insights about life situations.

Rules:
- Be warm and understanding
- Ask clarifying questions when appropriate
- Validate feelings first
- Provide gentle observations
- Use therapy language naturally
- Keep responses 3-4 sentences
- Be supportive, not preachy

Tone: empathetic, gentle, insightful, validating, professional

Remember: You're providing emotional support and gentle guidance, not clinical therapy. Be warm and human.`,

    'toxic-bestie': `You are a toxic best friend AI who gives questionable advice with absolute confidence.

Your role: Encourage chaos and drama while being hilarious (but not genuinely harmful).

Rules:
- Give objectively bad advice that's funny
- Sound extremely confident
- Use phrases like "trust me", "what's the worst that could happen", "you deserve better"
- Keep responses 2-3 sentences max
- Be funny, not genuinely harmful
- Never encourage actual dangerous behavior

Tone: chaotic, confident, hilarious, questionable, dramatic

Remember: You're giving terrible advice that's funny to read, not advice that would actually harm someone. Keep it light and meme-worthy.`
};

const COURT_PROMPT = `You are an AI judge presiding over the Court of Internet Drama.

Your role: Analyze relationship conflicts, ghosting situations, and friendship drama with the wisdom of Judge Judy and the humor of the internet.

Output Format (JSON):
{
  "verdict": "GUILTY" or "NOT GUILTY",
  "red_flag_score": 0-10,
  "emotional_damage_score": 0-10,
  "ruling": "2-3 sentence dramatic ruling",
  "funniest_observation": "one savage line about the situation"
}

Rules:
- Be dramatic but fair
- Call out manipulation, gaslighting, weaponized incompetence
- Recognize red flags (dry texting, breadcrumbing, love bombing)
- Use courtroom language mixed with internet slang
- Make observations that feel emotionally accurate
- Be quotable and shareable

Tone: authoritative, dramatic, emotionally intelligent, internet-savvy, meme-worthy

Remember: You're delivering justice for the chronically online. Make it dramatic, make it accurate, make it viral.`;

// Screen Management
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Personality Selection
function selectPersonality(element, personality) {
    // Remove active class from all options
    document.querySelectorAll('.personality-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to selected option
    element.classList.add('active');
    currentPersonality = personality;
}

// Character Count
function updateCharCount(inputId, countId) {
    const input = document.getElementById(inputId);
    const count = document.getElementById(countId);
    const maxLength = input.getAttribute('maxlength');
    count.textContent = `${input.value.length}/${maxLength} characters`;
}

// API Call Function
async function callAI(systemPrompt, userMessage) {
    // Check if API key is configured
    if (CONFIG.API_KEY === 'YOUR_GROQ_API_KEY_HERE') {
        throw new Error('Please configure your Groq API key in script.js');
    }

    const response = await fetch(CONFIG.API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CONFIG.API_KEY}`
        },
        body: JSON.stringify({
            model: CONFIG.MODEL,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userMessage }
            ],
            max_tokens: 500,
            temperature: 0.9
        })
    });

    if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

// Roast Mode Functions
async function generateRoast() {
    const input = document.getElementById('roast-input');
    const text = input.value.trim();
    
    if (!text) {
        alert('Please enter something to roast!');
        return;
    }
    
    // Hide previous results/errors
    document.getElementById('roast-result').style.display = 'none';
    document.getElementById('roast-error').style.display = 'none';
    
    // Show loading
    document.getElementById('roast-loading').style.display = 'block';
    
    try {
        const systemPrompt = AI_PROMPTS[currentPersonality];
        const userPrompt = `Roast this situation:\n\n${text}`;
        
        const roast = await callAI(systemPrompt, userPrompt);
        
        // Hide loading
        document.getElementById('roast-loading').style.display = 'none';
        
        // Show result
        document.getElementById('roast-text').textContent = roast;
        document.getElementById('roast-result').style.display = 'block';
        
        // Scroll to result
        document.getElementById('roast-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
        console.error('Error:', error);
        
        // Hide loading
        document.getElementById('roast-loading').style.display = 'none';
        
        // Show error
        document.getElementById('roast-error-message').textContent = error.message || 'Failed to generate roast. Please try again.';
        document.getElementById('roast-error').style.display = 'block';
    }
}

function retryRoast() {
    document.getElementById('roast-error').style.display = 'none';
    generateRoast();
}

function resetRoast() {
    document.getElementById('roast-input').value = '';
    document.getElementById('roast-result').style.display = 'none';
    updateCharCount('roast-input', 'roast-char-count');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Court Mode Functions
async function generateVerdict() {
    const input = document.getElementById('court-input');
    const text = input.value.trim();
    
    if (!text) {
        alert('Please present your case!');
        return;
    }
    
    // Hide previous results/errors
    document.getElementById('court-result').style.display = 'none';
    document.getElementById('court-error').style.display = 'none';
    
    // Show loading
    document.getElementById('court-loading').style.display = 'block';
    
    try {
        const userPrompt = `Analyze this situation and deliver your verdict:\n\n${text}`;
        
        const response = await callAI(COURT_PROMPT, userPrompt);
        
        // Try to parse JSON response
        let verdict;
        try {
            verdict = JSON.parse(response);
        } catch {
            // If not JSON, create structured response
            verdict = {
                verdict: 'GUILTY',
                red_flag_score: 7,
                emotional_damage_score: 8,
                ruling: response,
                funniest_observation: 'The audacity is unmatched.'
            };
        }
        
        // Hide loading
        document.getElementById('court-loading').style.display = 'none';
        
        // Update verdict display
        document.getElementById('verdict-title').textContent = verdict.verdict;
        document.getElementById('verdict-emoji').textContent = verdict.verdict === 'GUILTY' ? '😤' : '😌';
        document.getElementById('verdict-ruling').textContent = verdict.ruling;
        document.getElementById('red-flag-score').textContent = verdict.red_flag_score;
        document.getElementById('emotional-damage-score').textContent = verdict.emotional_damage_score;
        document.getElementById('funniest-observation').textContent = verdict.funniest_observation;
        
        // Show result
        document.getElementById('court-result').style.display = 'block';
        
        // Scroll to result
        document.getElementById('court-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
        console.error('Error:', error);
        
        // Hide loading
        document.getElementById('court-loading').style.display = 'none';
        
        // Show error
        document.getElementById('court-error-message').textContent = error.message || 'Failed to generate verdict. Please try again.';
        document.getElementById('court-error').style.display = 'block';
    }
}

function retryVerdict() {
    document.getElementById('court-error').style.display = 'none';
    generateVerdict();
}

function resetCourt() {
    document.getElementById('court-input').value = '';
    document.getElementById('court-result').style.display = 'none';
    updateCharCount('court-input', 'court-char-count');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Utility Functions
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard! 📋');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy. Please try again.');
    });
}

function shareResult(mode) {
    const text = mode === 'roast' 
        ? document.getElementById('roast-text').textContent
        : document.getElementById('verdict-ruling').textContent;
    
    if (navigator.share) {
        navigator.share({
            title: `Lorify ${mode === 'roast' ? 'Roast' : 'Court'} Mode`,
            text: text,
            url: window.location.href
        }).catch(err => {
            console.error('Share failed:', err);
        });
    } else {
        copyToClipboard(mode === 'roast' ? 'roast-text' : 'verdict-ruling');
    }
}

// Toast Notification System
function showToast(message, type = 'success') {
    // Remove existing toasts
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Enhanced Copy Function
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard! 📋', 'success');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Failed to copy. Please try again.', 'error');
    });
}

// Enhanced Share Function
function shareResult(mode) {
    const text = mode === 'roast' 
        ? document.getElementById('roast-text').textContent
        : document.getElementById('verdict-ruling').textContent;
    
    const shareData = {
        title: `Lorify ${mode === 'roast' ? 'Roast' : 'Court'} Mode`,
        text: `${text}\n\nGenerated by Lorify - The internet reacting to your life`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showToast('Shared successfully! 🔄', 'success'))
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.error('Share failed:', err);
                    copyToClipboard(mode === 'roast' ? 'roast-text' : 'verdict-ruling');
                }
            });
    } else {
        copyToClipboard(mode === 'roast' ? 'roast-text' : 'verdict-ruling');
    }
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to submit
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (currentScreen === 'roast-screen') {
            generateRoast();
        } else if (currentScreen === 'court-screen') {
            generateVerdict();
        }
    }
    
    // Escape to go back
    if (e.key === 'Escape' && currentScreen !== 'home-screen') {
        showScreen('home-screen');
    }
});

// Auto-save to localStorage
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

function loadFromLocalStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.error('Failed to load from localStorage:', e);
        return null;
    }
}

// Save input on change
document.addEventListener('DOMContentLoaded', () => {
    const roastInput = document.getElementById('roast-input');
    const courtInput = document.getElementById('court-input');
    
    // Load saved inputs
    const savedRoast = loadFromLocalStorage('lorify-roast-input');
    const savedCourt = loadFromLocalStorage('lorify-court-input');
    const savedPersonality = loadFromLocalStorage('lorify-personality');
    
    if (savedRoast) {
        roastInput.value = savedRoast;
        updateCharCount('roast-input', 'roast-char-count');
    }
    
    if (savedCourt) {
        courtInput.value = savedCourt;
        updateCharCount('court-input', 'court-char-count');
    }
    
    if (savedPersonality) {
        currentPersonality = savedPersonality;
        const personalityOption = document.querySelector(`[data-personality="${savedPersonality}"]`);
        if (personalityOption) {
            document.querySelectorAll('.personality-option').forEach(opt => opt.classList.remove('active'));
            personalityOption.classList.add('active');
        }
    }
    
    // Save on input
    roastInput.addEventListener('input', () => {
        saveToLocalStorage('lorify-roast-input', roastInput.value);
    });
    
    courtInput.addEventListener('input', () => {
        saveToLocalStorage('lorify-court-input', courtInput.value);
    });
});

// Enhanced Personality Selection
function selectPersonality(element, personality) {
    document.querySelectorAll('.personality-option').forEach(option => {
        option.classList.remove('active');
    });
    
    element.classList.add('active');
    currentPersonality = personality;
    saveToLocalStorage('lorify-personality', personality);
    
    showToast(`Personality changed to ${personality.replace('-', ' ')}! 🎭`, 'success');
}

// Analytics (placeholder for future implementation)
function trackEvent(eventName, eventData = {}) {
    console.log('Event:', eventName, eventData);
    // Add your analytics tracking here (Google Analytics, Mixpanel, etc.)
}

// Track screen views
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
    
    window.scrollTo(0, 0);
    
    trackEvent('screen_view', { screen: screenId });
}

// Enhanced error handling
function handleError(error, context) {
    console.error(`Error in ${context}:`, error);
    
    let errorMessage = 'Something went wrong. Please try again.';
    
    if (error.message.includes('API key')) {
        errorMessage = 'API key not configured. Please add your Groq API key in script.js';
    } else if (error.message.includes('network') || error.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your internet connection.';
    } else if (error.message.includes('rate limit')) {
        errorMessage = 'Rate limit exceeded. Please wait a moment and try again.';
    }
    
    return errorMessage;
}

// Enhanced Roast Generation
async function generateRoast() {
    const input = document.getElementById('roast-input');
    const text = input.value.trim();
    
    if (!text) {
        showToast('Please enter something to roast! 🔥', 'error');
        input.focus();
        return;
    }
    
    document.getElementById('roast-result').style.display = 'none';
    document.getElementById('roast-error').style.display = 'none';
    document.getElementById('roast-loading').style.display = 'block';
    
    trackEvent('roast_generated', { personality: currentPersonality, length: text.length });
    
    try {
        const systemPrompt = AI_PROMPTS[currentPersonality];
        const userPrompt = `Roast this situation:\n\n${text}`;
        
        const roast = await callAI(systemPrompt, userPrompt);
        
        document.getElementById('roast-loading').style.display = 'none';
        document.getElementById('roast-text').textContent = roast;
        document.getElementById('roast-result').style.display = 'block';
        
        document.getElementById('roast-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        showToast('Roast generated! 🔥', 'success');
    } catch (error) {
        document.getElementById('roast-loading').style.display = 'none';
        
        const errorMessage = handleError(error, 'generateRoast');
        document.getElementById('roast-error-message').textContent = errorMessage;
        document.getElementById('roast-error').style.display = 'block';
        
        showToast('Failed to generate roast', 'error');
    }
}

// Enhanced Verdict Generation
async function generateVerdict() {
    const input = document.getElementById('court-input');
    const text = input.value.trim();
    
    if (!text) {
        showToast('Please present your case! ⚖️', 'error');
        input.focus();
        return;
    }
    
    document.getElementById('court-result').style.display = 'none';
    document.getElementById('court-error').style.display = 'none';
    document.getElementById('court-loading').style.display = 'block';
    
    trackEvent('verdict_generated', { length: text.length });
    
    try {
        const userPrompt = `Analyze this situation and deliver your verdict:\n\n${text}`;
        const response = await callAI(COURT_PROMPT, userPrompt);
        
        let verdict;
        try {
            verdict = JSON.parse(response);
        } catch {
            verdict = {
                verdict: 'GUILTY',
                red_flag_score: 7,
                emotional_damage_score: 8,
                ruling: response,
                funniest_observation: 'The audacity is unmatched.'
            };
        }
        
        document.getElementById('court-loading').style.display = 'none';
        
        document.getElementById('verdict-title').textContent = verdict.verdict;
        document.getElementById('verdict-emoji').textContent = verdict.verdict === 'GUILTY' ? '😤' : '😌';
        document.getElementById('verdict-ruling').textContent = verdict.ruling;
        document.getElementById('red-flag-score').textContent = verdict.red_flag_score;
        document.getElementById('emotional-damage-score').textContent = verdict.emotional_damage_score;
        document.getElementById('funniest-observation').textContent = verdict.funniest_observation;
        
        document.getElementById('court-result').style.display = 'block';
        document.getElementById('court-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        showToast('Verdict delivered! ⚖️', 'success');
    } catch (error) {
        document.getElementById('court-loading').style.display = 'none';
        
        const errorMessage = handleError(error, 'generateVerdict');
        document.getElementById('court-error-message').textContent = errorMessage;
        document.getElementById('court-error').style.display = 'block';
        
        showToast('Failed to generate verdict', 'error');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔥⚖️ Lorify loaded successfully!');
    console.log('💡 Remember to add your Groq API key in script.js');
    console.log('⌨️ Keyboard shortcuts: Ctrl/Cmd+Enter to submit, Escape to go back');
    
    // Check if API key is configured
    if (CONFIG.API_KEY === 'YOUR_GROQ_API_KEY_HERE') {
        console.warn('⚠️ API key not configured. Please add your Groq API key to use the app.');
    }
    
    trackEvent('app_loaded');
});

// Setup Instructions Modal
function showSetupInstructions() {
    const instructions = `
🔥 LORIFY SETUP GUIDE

1️⃣ GET FREE API KEY
   • Visit: console.groq.com
   • Sign up for free account
   • Create API key
   • Copy your key

2️⃣ CONFIGURE APP
   • Open script.js in text editor
   • Find line 5: API_KEY: 'YOUR_GROQ_API_KEY_HERE'
   • Replace with your actual key
   • Save file

3️⃣ DONE!
   • Refresh this page
   • Start roasting! 🔥

Need help? Check SETUP.md for detailed instructions.
    `;
    
    alert(instructions);
}

// Check API key on load and show warning if needed
window.addEventListener('load', () => {
    if (CONFIG.API_KEY === 'YOUR_GROQ_API_KEY_HERE') {
        setTimeout(() => {
            const shouldShowInstructions = confirm(
                '⚠️ API Key Not Configured\n\n' +
                'To use Lorify, you need to add your free Groq API key.\n\n' +
                'Click OK to see setup instructions.'
            );
            
            if (shouldShowInstructions) {
                showSetupInstructions();
            }
        }, 1000);
    }
});


// ========================================
// NEW MODE PROMPTS
// ========================================

const ADVICE_PROMPT = `You are an AI life advisor who provides thoughtful advice from multiple perspectives.

Your role: Give practical guidance with a touch of humor and wisdom.

Rules:
- Consider both conventional and unconventional approaches
- Be practical but not boring
- Include pros and cons when relevant
- Keep responses 3-4 sentences
- Be honest and helpful
- Add light humor when appropriate

Tone: wise, practical, slightly humorous, balanced

Remember: You're helping someone make a decision. Be genuinely helpful while keeping it entertaining.`;

const THERAPY_PROMPT = `You are an empathetic AI therapist who provides gentle emotional support.

Your role: Validate feelings and provide compassionate responses.

Rules:
- Always validate feelings first
- Be warm and understanding
- Use phrases like "That's completely valid", "It makes sense that you feel..."
- Keep responses 3-4 sentences
- Be gentle and non-judgmental
- Offer gentle insights when appropriate

Tone: empathetic, gentle, validating, supportive, warm

Remember: You're providing emotional support. Make the person feel heard and understood.`;

const HYPE_PROMPT = `You are an AI hype person who makes people feel like the main character.

Your role: Deliver epic pep talks and boost confidence to maximum levels.

Rules:
- Make them feel unstoppable
- Use phrases like "THAT'S WHAT I'M TALKING ABOUT", "YOU'RE LITERALLY THE MAIN CHARACTER"
- Maximum energy and enthusiasm
- Keep responses 3-4 sentences
- Be genuinely encouraging
- Use all caps strategically for emphasis

Tone: energetic, enthusiastic, confident, motivating, epic

Remember: You're their biggest hype person. Make them feel like they can conquer the world!`;

const STORY_PROMPT = `You are an AI storyteller who transforms everyday situations into epic narratives.

Your role: Turn mundane drama into cinematic storytelling.

Rules:
- Add dramatic flair and vivid descriptions
- Use narrative techniques (foreshadowing, plot twists, etc.)
- Keep responses 4-5 sentences
- Make it feel like a movie scene or novel excerpt
- Include character development
- Build tension and drama

Tone: dramatic, cinematic, narrative, creative, engaging

Remember: You're creating an epic story. Make it entertaining and dramatic!`;

const DEBATE_PROMPT = `You are an AI debater who argues both sides of any topic with equal passion.

Your role: Present compelling arguments for both perspectives.

Output Format:
**FOR:** [argument supporting the position]

**AGAINST:** [argument opposing the position]

**VERDICT:** [balanced conclusion]

Rules:
- Present both sides fairly and passionately
- Use logic, examples, and reasoning
- Keep each side 2-3 sentences
- Be intellectually honest
- Make both arguments compelling

Tone: intellectual, balanced, persuasive, thought-provoking

Remember: You're presenting both sides objectively. Make both arguments strong.`;

const FORTUNE_PROMPT = `You are an AI fortune teller who predicts chaotic futures based on current choices.

Your role: Deliver dramatic prophecies with timeline predictions.

Output Format:
🔮 **THE PROPHECY:**
[Main prediction]

⏰ **TIMELINE:**
[When things will happen]

⚠️ **WARNING:**
[What to watch out for]

✨ **FINAL WISDOM:**
[Mystical advice]

Rules:
- Be dramatic and mystical
- Base predictions on logical extrapolation
- Add humor and entertainment value
- Keep predictions somewhat realistic but dramatic
- Use fortune teller language

Tone: mystical, dramatic, prophetic, entertaining, wise

Remember: You're predicting the future based on current choices. Make it dramatic and fun!`;

// ========================================
// NEW MODE FUNCTIONS
// ========================================

// Advice Mode
async function generateAdvice() {
    const input = document.getElementById('advice-input');
    const text = input.value.trim();
    
    if (!text) {
        showToast('Please enter your question! 💡', 'error');
        input.focus();
        return;
    }
    
    document.getElementById('advice-result').style.display = 'none';
    document.getElementById('advice-error').style.display = 'none';
    document.getElementById('advice-loading').style.display = 'block';
    
    try {
        const userPrompt = `Give advice on this situation:\n\n${text}`;
        const advice = await callAI(ADVICE_PROMPT, userPrompt);
        
        document.getElementById('advice-loading').style.display = 'none';
        document.getElementById('advice-text').textContent = advice;
        document.getElementById('advice-result').style.display = 'block';
        document.getElementById('advice-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        showToast('Advice generated! 💡', 'success');
    } catch (error) {
        document.getElementById('advice-loading').style.display = 'none';
        const errorMessage = handleError(error, 'generateAdvice');
        document.getElementById('advice-error-message').textContent = errorMessage;
        document.getElementById('advice-error').style.display = 'block';
        showToast('Failed to generate advice', 'error');
    }
}

function retryAdvice() {
    document.getElementById('advice-error').style.display = 'none';
    generateAdvice();
}

function resetAdvice() {
    document.getElementById('advice-input').value = '';
    document.getElementById('advice-result').style.display = 'none';
    updateCharCount('advice-input', 'advice-char-count');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Therapy Mode
async function generateTherapy() {
    const input = document.getElementById('therapy-input');
    const text = input.value.trim();
    
    if (!text) {
        showToast('Please share what\'s on your mind 🧘', 'error');
        input.focus();
        return;
    }
    
    document.getElementById('therapy-result').style.display = 'none';
    document.getElementById('therapy-error').style.display = 'none';
    document.getElementById('therapy-loading').style.display = 'block';
    
    try {
        const userPrompt = `Provide emotional support for this:\n\n${text}`;
        const support = await callAI(THERAPY_PROMPT, userPrompt);
        
        document.getElementById('therapy-loading').style.display = 'none';
        document.getElementById('therapy-text').textContent = support;
        document.getElementById('therapy-result').style.display = 'block';
        document.getElementById('therapy-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        showToast('Support message generated 🧘', 'success');
    } catch (error) {
        document.getElementById('therapy-loading').style.display = 'none';
        const errorMessage = handleError(error, 'generateTherapy');
        document.getElementById('therapy-error-message').textContent = errorMessage;
        document.getElementById('therapy-error').style.display = 'block';
        showToast('Failed to generate support', 'error');
    }
}

function retryTherapy() {
    document.getElementById('therapy-error').style.display = 'none';
    generateTherapy();
}

function resetTherapy() {
    document.getElementById('therapy-input').value = '';
    document.getElementById('therapy-result').style.display = 'none';
    updateCharCount('therapy-input', 'therapy-char-count');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hype Mode
async function generateHype() {
    const input = document.getElementById('hype-input');
    const text = input.value.trim();
    
    if (!text) {
        showToast('Tell me what to hype you up for! 🚀', 'error');
        input.focus();
        return;
    }
    
    document.getElementById('hype-result').style.display = 'none';
    document.getElementById('hype-error').style.display = 'none';
    document.getElementById('hype-loading').style.display = 'block';
    
    try {
        const userPrompt = `Hype me up about this:\n\n${text}`;
        const hype = await callAI(HYPE_PROMPT, userPrompt);
        
        document.getElementById('hype-loading').style.display = 'none';
        document.getElementById('hype-text').textContent = hype;
        document.getElementById('hype-result').style.display = 'block';
        document.getElementById('hype-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        showToast('HYPED UP! 🚀', 'success');
    } catch (error) {
        document.getElementById('hype-loading').style.display = 'none';
        const errorMessage = handleError(error, 'generateHype');
        document.getElementById('hype-error-message').textContent = errorMessage;
        document.getElementById('hype-error').style.display = 'block';
        showToast('Failed to generate hype', 'error');
    }
}

function retryHype() {
    document.getElementById('hype-error').style.display = 'none';
    generateHype();
}

function resetHype() {
    document.getElementById('hype-input').value = '';
    document.getElementById('hype-result').style.display = 'none';
    updateCharCount('hype-input', 'hype-char-count');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Story Mode
async function generateStory() {
    const input = document.getElementById('story-input');
    const text = input.value.trim();
    
    if (!text) {
        showToast('Share your story! 📖', 'error');
        input.focus();
        return;
    }
    
    document.getElementById('story-result').style.display = 'none';
    document.getElementById('story-error').style.display = 'none';
    document.getElementById('story-loading').style.display = 'block';
    
    try {
        const userPrompt = `Transform this into an epic story:\n\n${text}`;
        const story = await callAI(STORY_PROMPT, userPrompt);
        
        document.getElementById('story-loading').style.display = 'none';
        document.getElementById('story-text').textContent = story;
        document.getElementById('story-result').style.display = 'block';
        document.getElementById('story-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        showToast('Story created! 📖', 'success');
    } catch (error) {
        document.getElementById('story-loading').style.display = 'none';
        const errorMessage = handleError(error, 'generateStory');
        document.getElementById('story-error-message').textContent = errorMessage;
        document.getElementById('story-error').style.display = 'block';
        showToast('Failed to generate story', 'error');
    }
}

function retryStory() {
    document.getElementById('story-error').style.display = 'none';
    generateStory();
}

function resetStory() {
    document.getElementById('story-input').value = '';
    document.getElementById('story-result').style.display = 'none';
    updateCharCount('story-input', 'story-char-count');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Debate Mode
async function generateDebate() {
    const input = document.getElementById('debate-input');
    const text = input.value.trim();
    
    if (!text) {
        showToast('Share your hot take! 💬', 'error');
        input.focus();
        return;
    }
    
    document.getElementById('debate-result').style.display = 'none';
    document.getElementById('debate-error').style.display = 'none';
    document.getElementById('debate-loading').style.display = 'block';
    
    try {
        const userPrompt = `Debate both sides of this:\n\n${text}`;
        const debate = await callAI(DEBATE_PROMPT, userPrompt);
        
        document.getElementById('debate-loading').style.display = 'none';
        document.getElementById('debate-text').innerHTML = debate.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
        document.getElementById('debate-result').style.display = 'block';
        document.getElementById('debate-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        showToast('Debate generated! 💬', 'success');
    } catch (error) {
        document.getElementById('debate-loading').style.display = 'none';
        const errorMessage = handleError(error, 'generateDebate');
        document.getElementById('debate-error-message').textContent = errorMessage;
        document.getElementById('debate-error').style.display = 'block';
        showToast('Failed to generate debate', 'error');
    }
}

function retryDebate() {
    document.getElementById('debate-error').style.display = 'none';
    generateDebate();
}

function resetDebate() {
    document.getElementById('debate-input').value = '';
    document.getElementById('debate-result').style.display = 'none';
    updateCharCount('debate-input', 'debate-char-count');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fortune Mode
async function generateFortune() {
    const input = document.getElementById('fortune-input');
    const text = input.value.trim();
    
    if (!text) {
        showToast('Share your situation! 🔮', 'error');
        input.focus();
        return;
    }
    
    document.getElementById('fortune-result').style.display = 'none';
    document.getElementById('fortune-error').style.display = 'none';
    document.getElementById('fortune-loading').style.display = 'block';
    
    try {
        const userPrompt = `Predict the fortune based on this:\n\n${text}`;
        const fortune = await callAI(FORTUNE_PROMPT, userPrompt);
        
        document.getElementById('fortune-loading').style.display = 'none';
        document.getElementById('fortune-text').innerHTML = fortune.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
        document.getElementById('fortune-result').style.display = 'block';
        document.getElementById('fortune-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        showToast('Fortune revealed! 🔮', 'success');
    } catch (error) {
        document.getElementById('fortune-loading').style.display = 'none';
        const errorMessage = handleError(error, 'generateFortune');
        document.getElementById('fortune-error-message').textContent = errorMessage;
        document.getElementById('fortune-error').style.display = 'block';
        showToast('Failed to generate fortune', 'error');
    }
}

function retryFortune() {
    document.getElementById('fortune-error').style.display = 'none';
    generateFortune();
}

function resetFortune() {
    document.getElementById('fortune-input').value = '';
    document.getElementById('fortune-result').style.display = 'none';
    updateCharCount('fortune-input', 'fortune-char-count');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
