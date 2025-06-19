import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  // State to handle theme mode
  const [isDark, setIsDark] = useState(true);

  // PUBLIC_INTERFACE
  function toggleTheme() {
    setIsDark((prev) => !prev);
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('light-theme', !isDark);
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

      {/* Landing Section */}
      <main>
        <section className="landing-section">
          <h1 className="landing-heading">Welcome to Thought Detox</h1>
          <div className="landing-subheading">
            Let go of what’s weighing on your mind.
          </div>
          <button
            className="start-detox-btn"
            tabIndex={0}
            type="button"
            aria-label="Start Detox"
          >
            Start Detox
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;