# FixItCameroon 🇨

**Together, we build a better Cameroon.**

FixItCameroon is a civic-engagement mobile app that lets citizens report local infrastructure and community issues (potholes, broken streetlights, drainage problems, waste, water issues, and more), track resolution progress in real time, and collaborate with their community and local municipalities to get things fixed.

---

## 📱 Features

### A. Onboarding & Authentication
- Splash screen and guided onboarding
- Sign up / Login with email, phone, Google, or Facebook

### B. Home & Discover
- Home feed of nearby, popular, and followed issues
- Category browsing (Roads, Streetlights, Drainage, Water, Waste, Environment, Buildings, Safety, Other)
- Interactive map view of reported issues
- Search & filter by category, status, severity, and distance
- Detailed issue view with photos, location, and support/comments

### C. Reporting Flow
- Multi-step issue reporting (photos & location → details → additional info)
- Severity tagging and mission linking
- Duplicate issue detection before submission
- Submission confirmation with unique Issue ID

### D. Resolution & Community Action
- Community "missions" citizens can join to help resolve issues
- Mission details with volunteer sign-up
- Resolution updates with before/after photo timeline
- Citizen verification of completed resolutions

### E. Profile & Community
- User profile with reporting/resolution stats
- Community leaderboard (monthly & all-time)
- My reports, notifications, comments, bookmarks
- Sponsors and partner organizations

### F. Admin / Municipal Dashboard
- Municipality-level overview of reported, in-progress, and resolved issues
- Average resolution time and issue analytics
- Recent issue management tools

---

## 🛠️ Tech Stack

> _Update this section with the actual stack once finalized._

- **Frontend:** _(e.g., React Native / Flutter)_
- **Backend:** _(e.g., Node.js / Firebase)_
- **Database:** _(e.g., PostgreSQL / Firestore)_
- **Maps & Location:** _(e.g., Google Maps SDK)_
- **Auth:** Email/Phone, Google, Facebook

---

## 🚀 Getting Started

### Prerequisites
- Node.js (or relevant runtime) installed
- SDK v54 initialized (see `/sdk` config)
- API keys for Maps and Auth providers (see `.env.example`)

### Installation
```bash
git clone https://github.com/<org>/fixitcameroon.git
cd fixitcameroon
npm install
```

### Running the app
```bash
npm start
```

---

## 👥 Team & Screen Ownership

The UI is organized into rows/sections that map to individual contributor ownership:

| Owner | Screens |
|---|---|
| Teammate 1 | Row 1 — Onboarding & Authentication (Splash, Onboarding, Login, Sign Up) |
| Teammate 2 | Row 2 — Home & Discover (Home, Categories, Map View, Search & Filter, Issue Details) |
| Teammate 3 | Row 3 — Reporting Flow (Report Steps 1–3, Duplicate Check, Submission Success) |
| **You** | Rows 4–5 — Resolution & Community Action, Profile & Community, Admin/Municipal Dashboard, and Additional Screens (My Reports, Notifications, Comments, Bookmarks, Sponsors, Organizations, Analytics) |

Please open a feature branch per screen/flow you're working on (e.g., `feature/onboarding`, `feature/reporting-flow`, `feature/resolution-flow`) and submit a PR for review before merging to `main`.

---

## 📂 Project Structure

```
fixitcameroon/
├── src/
│   ├── screens/
│   │   ├── onboarding/
│   │   ├── home/
│   │   ├── reporting/
│   │   ├── resolution/
│   │   ├── profile/
│   │   └── admin/
│   ├── components/
│   ├── navigation/
│   ├── services/
│   └── assets/
├── sdk/
├── .env.example
└── README.md
```

---

## 🤝 Contributing

1. Fork or branch from `main`
2. Follow the screen ownership table above to avoid overlapping work
3. Keep commits scoped to a single screen/flow where possible
4. Open a PR with screenshots of the screens you built
5. Request review from at least one teammate before merging

---

## 📄 License

_TBD_