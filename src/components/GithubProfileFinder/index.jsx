import { useEffect, useState } from "react";
import User from "./user";
import { useTheme } from "../../context/ThemeContext";
import './styles.css';

export default function GithubProfileFinder() {
  const { theme, toggleTheme } = useTheme();
  const [userName, setUserName] = useState("Ilmaan-Ahamed");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Comparison state
  const [comparisonMode, setComparisonMode] = useState(false);
  const [secondUserName, setSecondUserName] = useState("");
  const [secondUserData, setSecondUserData] = useState(null);
  const [secondLoading, setSecondLoading] = useState(false);
  const [secondError, setSecondError] = useState(null);

  async function fetchGithubUserData(username, isSecond = false) {
    if (!username.trim()) return;

    if (isSecond) {
      setSecondLoading(true);
      setSecondError(null);
    } else {
      setLoading(true);
      setError(null);
      setUserData(null);
    }

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);

      if (res.status === 404) {
        const errorMsg = `User "${username}" not found`;
        if (isSecond) {
          setSecondError(errorMsg);
        } else {
          setError(errorMsg);
        }
        if (isSecond) setSecondLoading(false);
        else setLoading(false);
        return;
      }

      if (res.status === 403) {
        const errorMsg = "API rate limit exceeded. Please try again later.";
        if (isSecond) {
          setSecondError(errorMsg);
        } else {
          setError(errorMsg);
        }
        if (isSecond) setSecondLoading(false);
        else setLoading(false);
        return;
      }

      if (!res.ok) {
        const errorMsg = "Something went wrong. Please try again.";
        if (isSecond) {
          setSecondError(errorMsg);
        } else {
          setError(errorMsg);
        }
        if (isSecond) setSecondLoading(false);
        else setLoading(false);
        return;
      }

      const data = await res.json();
      if (isSecond) {
        setSecondUserData(data);
        setSecondLoading(false);
      } else {
        setUserData(data);
        setLoading(false);
        setUserName('');
      }
    } catch (err) {
      const errorMsg = "Network error. Please check your connection.";
      if (isSecond) {
        setSecondError(errorMsg);
        setSecondLoading(false);
      } else {
        setError(errorMsg);
        setLoading(false);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchGithubUserData(userName, false);
  }

  function handleSecondSubmit(e) {
    e.preventDefault();
    if (secondUserName.trim()) {
      fetchGithubUserData(secondUserName, true);
    }
  }

  function toggleComparison() {
    setComparisonMode(!comparisonMode);
    setSecondUserData(null);
    setSecondUserName("");
    setSecondError(null);
  }

  useEffect(() => {
    fetchGithubUserData("Ilmaan-Ahamed", false);
  }, []);

  return (
    <div className="github-profile-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-top">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <h1>GitHub Profile Finder</h1>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
        <p className="subtitle">Discover developers, explore profiles, and dive into the open-source world</p>
      </header>

      {/* Search Form */}
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            id="username-input"
            name="search-by-username"
            type="text"
            placeholder="Search GitHub username..."
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            autoComplete="off"
          />
          <button id="search-button" type="submit" disabled={!userName.trim()}>
            <span>Search</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>

      {/* Comparison Mode Button */}
      <div className="comparison-toggle-wrapper">
        <button className="comparison-toggle" onClick={toggleComparison}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="12" r="1" />
            <circle cx="9" cy="5" r="1" />
            <circle cx="9" cy="19" r="1" />
            <circle cx="15" cy="12" r="1" />
            <circle cx="15" cy="5" r="1" />
            <circle cx="15" cy="19" r="1" />
          </svg>
          {comparisonMode ? 'Exit Comparison' : 'Compare Profiles'}
        </button>
      </div>

      {/* Side-by-side Comparison View */}
      {comparisonMode && (
        <div className="comparison-container">
          <div className="comparison-search">
            <form onSubmit={handleSecondSubmit}>
              <div className="input-wrapper">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search second GitHub username..."
                  value={secondUserName}
                  onChange={(event) => setSecondUserName(event.target.value)}
                  autoComplete="off"
                />
                <button type="submit" disabled={!secondUserName.trim()}>
                  <span>Compare</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Side-by-side Cards */}
          <div className="comparison-cards">
            <div className="comparison-column">
              {/* First User Card */}
              {!loading && !error && userData !== null ? (
                <User user={userData} />
              ) : null}
              {loading && (
                <div className="skeleton-card">
                  <div className="skeleton-header">
                    <div className="skeleton-avatar skeleton-pulse" />
                    <div className="skeleton-info">
                      <div className="skeleton-line skeleton-line-lg skeleton-pulse" />
                      <div className="skeleton-line skeleton-line-sm skeleton-pulse" />
                      <div className="skeleton-line skeleton-line-md skeleton-pulse" />
                    </div>
                  </div>
                  <div className="skeleton-bio skeleton-pulse" />
                  <div className="skeleton-stats">
                    <div className="skeleton-stat skeleton-pulse" />
                    <div className="skeleton-stat skeleton-pulse" />
                    <div className="skeleton-stat skeleton-pulse" />
                  </div>
                </div>
              )}
              {error && (
                <div className="error-card" id="error-display">
                  <div className="error-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </div>
                  <h3>Oops!</h3>
                  <p>{error}</p>
                  <button className="retry-btn" onClick={() => { setError(null); setUserName(''); }}>
                    Try another search
                  </button>
                </div>
              )}
            </div>

            <div className="comparison-column">
              {/* Second User Card */}
              {!secondLoading && !secondError && secondUserData !== null ? (
                <User user={secondUserData} />
              ) : null}
              {secondLoading && (
                <div className="skeleton-card">
                  <div className="skeleton-header">
                    <div className="skeleton-avatar skeleton-pulse" />
                    <div className="skeleton-info">
                      <div className="skeleton-line skeleton-line-lg skeleton-pulse" />
                      <div className="skeleton-line skeleton-line-sm skeleton-pulse" />
                      <div className="skeleton-line skeleton-line-md skeleton-pulse" />
                    </div>
                  </div>
                  <div className="skeleton-bio skeleton-pulse" />
                  <div className="skeleton-stats">
                    <div className="skeleton-stat skeleton-pulse" />
                    <div className="skeleton-stat skeleton-pulse" />
                    <div className="skeleton-stat skeleton-pulse" />
                  </div>
                </div>
              )}
              {secondError && (
                <div className="error-card">
                  <div className="error-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </div>
                  <h3>Oops!</h3>
                  <p>{secondError}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Single User View */}
      {!comparisonMode && (
        <>
          {/* Loading Skeleton */}
          {loading && (
            <div className="skeleton-card">
              <div className="skeleton-header">
                <div className="skeleton-avatar skeleton-pulse" />
                <div className="skeleton-info">
                  <div className="skeleton-line skeleton-line-lg skeleton-pulse" />
                  <div className="skeleton-line skeleton-line-sm skeleton-pulse" />
                  <div className="skeleton-line skeleton-line-md skeleton-pulse" />
                </div>
              </div>
              <div className="skeleton-bio skeleton-pulse" />
              <div className="skeleton-stats">
                <div className="skeleton-stat skeleton-pulse" />
                <div className="skeleton-stat skeleton-pulse" />
                <div className="skeleton-stat skeleton-pulse" />
              </div>
              <div className="skeleton-tags">
                <div className="skeleton-tag skeleton-pulse" />
                <div className="skeleton-tag skeleton-pulse" />
                <div className="skeleton-tag skeleton-pulse" />
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="error-card" id="error-display">
              <div className="error-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <h3>Oops!</h3>
              <p>{error}</p>
              <button className="retry-btn" onClick={() => { setError(null); setUserName(''); }}>
                Try another search
              </button>
            </div>
          )}

          {/* User Card */}
          {!loading && !error && userData !== null ? <User user={userData} /> : null}
        </>
      )}
    </div>
  );
}