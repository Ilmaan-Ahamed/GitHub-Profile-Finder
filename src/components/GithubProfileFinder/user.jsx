export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
    bio,
    location,
    company,
    blog,
    twitter_username,
    html_url,
  } = user;

  const createdDate = new Date(created_at);
  const formattedDate = `${createdDate.getDate()} ${createdDate.toLocaleString("en-us", { month: "short" })} ${createdDate.getFullYear()}`;

  return (
    <div className="user-card" id="user-card">
      {/* Gradient accent bar */}
      <div className="card-accent" />

      {/* Profile Header */}
      <div className="card-header">
        <div className="avatar-wrapper">
          <img src={avatar_url} className="avatar" alt={`${name || login}'s avatar`} />
          <div className="avatar-ring" />
        </div>

        <div className="header-info">
          <h2 className="display-name">{name || login}</h2>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="username-link"
          >
            @{login}
          </a>
          <p className="join-date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            Joined {formattedDate}
          </p>
        </div>
      </div>

      {/* Bio */}
      {bio && (
        <p className="bio">{bio}</p>
      )}

      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-value">{public_repos}</span>
          <span className="stat-label">Repos</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{followers.toLocaleString()}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{following.toLocaleString()}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>

      {/* Extra Info Tags */}
      {(location || company || blog || twitter_username) && (
        <div className="info-tags">
          {location && (
            <div className="info-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{location}</span>
            </div>
          )}

          {company && (
            <div className="info-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>
              <span>{company}</span>
            </div>
          )}

          {blog && (
            <div className="info-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <a href={blog.startsWith('http') ? blog : `https://${blog}`} target="_blank" rel="noopener noreferrer">
                {blog.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}

          {twitter_username && (
            <div className="info-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <a href={`https://x.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">
                @{twitter_username}
              </a>
            </div>
          )}
        </div>
      )}

      {/* View Profile Button */}
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="view-profile-btn"
        id="view-profile-btn"
      >
        <span>View Full Profile</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" x2="21" y1="14" y2="3" />
        </svg>
      </a>
    </div>
  );
}