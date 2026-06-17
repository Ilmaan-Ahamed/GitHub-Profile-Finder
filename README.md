# 🔍 GitHub Profile Finder

## ✨ Introduction

A sleek, modern **GitHub Profile Finder** built with React and the GitHub REST API.

Search any GitHub username and instantly view their profile — avatar, bio, stats, social links, and more — all wrapped in a premium **gold & black** UI.

## 🚀 Features

👉 **🔎 Instant Profile Search**
- Search any GitHub user by username
- Press Enter or click to search

👉 **👤 Rich Profile Cards**
- Avatar with animated gradient ring
- Name, username & join date
- Bio, location, company & website
- Twitter / X link

👉 **📊 Stats at a Glance**
- Public repositories count
- Followers & following count

👉 **📂 Repository List with Stars, Forks & Language Badges** ✓
- Top 6 repositories sorted by stars
- Star, fork & watcher counts
- Language badges with dynamic color coding
- Quick link to repository

👉 **🎨 Dark / Light Theme Toggle** ✓
- Smooth theme switcher in header
- Persisted preference with localStorage
- Optimized colors for both modes

👉 **👥 Side-by-Side User Comparison** ✓
- Compare up to two GitHub profiles at once
- View stats, repos, and followers side-by-side
- Responsive layout for all devices

👉 **⚠️ Error Handling**
- User not found (404) display
- API rate limit warning
- Network error feedback

👉 **💀 Skeleton Loading**
- Animated shimmer loading state
- Matches the card layout perfectly

👉 **🎨 Premium UI**
- Gold & black color scheme (with light mode)
- Glassmorphism cards with backdrop blur
- Smooth animations & hover effects
- Fully responsive (mobile, tablet, desktop)

## ⚙️ Tech Stack

| Technology | Description |
|---|---|
| React 19 | UI components & state management |
| Vite 8 | Fast dev server & build tool |
| GitHub API | Public user data (no auth required) |
| CSS3 | Custom properties, animations, glassmorphism |
| Google Fonts | Inter typeface |

## 📁 Project Structure

```
GitHub_Proflie_Finder/
│
├── src/
│   ├── components/
│   │   └── GithubProfileFinder/
│   │       ├── index.jsx      # Search logic & state
│   │       ├── user.jsx       # Profile card component
│   │       └── styles.css     # Component styles
│   │
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & design tokens
│
├── index.html                 # HTML template
├── package.json
└── vite.config.js
```

## 🤸 Quick Start

**1️⃣ Clone the Repository**
```bash
git clone https://github.com/Ilmaan-Ahamed/GitHubProfileFinder.git
cd GitHubProfileFinder/GitHub_Proflie_Finder
```

**2️⃣ Install Dependencies**
```bash
npm install
```

**3️⃣ Run the Development Server**
```bash
npm run dev
```

**4️⃣ Build for Production**
```bash
npm run build
```

## 📊 How It Works

1. User enters a GitHub username
2. App fetches data from `api.github.com/users/{username}`
3. Displays profile card with all available info
4. Shows error state if user not found or rate limited

## 🚀 Future Improvements

- 🔑 GitHub OAuth authentication for higher API rate limits
- 📸 Shareable profile card screenshots
- 📈 Repository statistics dashboard & language breakdown
- 🏆 Trending repositories widget & recommendations
- 💾 Export profile data as PDF or JSON

## 🤝 Contributing

1. Fork the repository
2. Create a branch — `git checkout -b feature/your-feature`
3. Commit changes — `git commit -m "Add new feature"`
4. Push to GitHub — `git push origin feature/your-feature`
5. Open a Pull Request

## 👨‍💻 Author

**Ilmaan Ahamed**
Software Engineering Undergraduate
SLTC Research University

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
