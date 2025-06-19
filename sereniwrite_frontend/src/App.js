import React, { useState, useRef } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  // State for theme
  const [isDark, setIsDark] = useState(true);
  // State for mood
  const [mood, setMood] = useState(null);
  // State for thought
  const [thought, setThought] = useState('');
  // Ref for textarea autofocus
  const textareaRef = useRef(null);

  // PUBLIC_INTERFACE
  function toggleTheme() {
    setIsDark((prev) => !prev);
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('light-theme', !isDark);
    }
  }

  // Mood emojis and labels
  const moods = [
    { emoji: '😌', label: 'Calm' },
    { emoji: '😕', label: 'Confused' },
    { emoji: '😡', label: 'Angry' },
    { emoji: '😭', label: 'Upset' },
    { emoji: '😍', label: 'Loved' },
  ];

  // PUBLIC_INTERFACE
  function handleShredClick(e) {
    e.preventDefault();
    // Stub for future shred animation
    // TODO: implement shred animation
    window.alert("Shredding animation coming soon!");
    setThought('');
    setMood(null);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }

  return (
    <div className={`app${isDark ? '' : ' light'}`}>
      {/* Header/Navbar */}
      <nav className="navbar thought-navbar">
        <div className="navbar-content">
          <div className="header-left">
            <span
              className="thought-logo"
              style={{
                fontStyle: 'italic',
                fontWeight: 700,
                color: 'var(--thought-cyan)',
                fontSize: '1.4rem',
                letterSpacing: '1px',
              }}
            >
              THOUGHT DETOX
            </span>
          </div>
          <div className="header-right">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <span role="img" aria-label="Sun">
                  ☀️
                </span>
              ) : (
                <span role="img" aria-label="Moon">
                  🌙
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Step 1: Mood selector + Thought input in glassmorphic card */}
      <main>
        <div className="step1-gradient-bg">
          <section className="step1-glass-card">
            <h2 className="step1-heading">How are you feeling today?</h2>
            <div className="step1-mood-row" role="radiogroup" aria-label="Mood selector">
              {moods.map((m, idx) => (
                <button
                  key={m.emoji}
                  className={`step1-mood-emoji${mood === idx ? ' selected' : ''}`}
                  onClick={() => setMood(idx)}
                  type="button"
                  aria-label={m.label}
                  tabIndex={0}
                >
                  <span style={{fontSize: '2.1rem'}}>{m.emoji}</span>
                </button>
              ))}
            </div>
            <form className="step1-form" autoComplete="off">
              <textarea
                ref={textareaRef}
                value={thought}
                onChange={e => setThought(e.target.value)}
                className="step1-thought-textarea"
                placeholder="Type what’s bothering you…"
                autoFocus
                rows={5}
                maxLength={400}
                aria-label="Type your thoughts"
              />
              <button
                className="shred-btn-glass"
                type="submit"
                onClick={handleShredClick}
                tabIndex={0}
              >
                <span role="img" aria-label="Shred">🗑️</span> Shred It
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;