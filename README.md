# FixItCameroon

FixItCameroon is a civic-engagement mobile application that enables citizens to report local infrastructure and community issues, track their resolution in real time, and collaborate with municipal authorities and community organizations to address them.

Built with React Native (Expo) on the frontend and a Node.js/Express + PostgreSQL (Prisma, hosted on Supabase) backend, with image storage handled through Cloudinary.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Citizens can report issues such as potholes, broken streetlights, drainage problems, and waste management concerns, complete with photos and precise GPS location. Reports are visible to the community for support (upvoting) and discussion, and can be tracked through their resolution lifecycle. Municipal administrators have a dedicated dashboard for monitoring report volume, resolution performance, and managing issue status.

## Features

**Citizen-facing**
- Account creation and authentication (JWT-based, with refresh token support)
- Multi-step issue reporting with photo upload and automatic geolocation
- Real-time issue feed with **All**, **Nearby** (distance-based), and **Popular** (engagement-based) filtering
- Issue detail view with support (upvote) and comment functionality
- Personal profile with report history and community points

**Administrative**
- Role-based access control (Citizen / Organization Representative / Admin)
- Dedicated municipal dashboard with live issue statistics (status breakdown, average resolution time, recent activity)
- In-place issue status management (Reported → In Progress → Resolved)
- Seamless navigation between the administrative dashboard and the standard citizen experience

**Platform**
- Cloud-based image storage and optimization via Cloudinary
- Secure token storage on-device via Expo SecureStore
- PostgreSQL database hosted on Supabase, managed through Prisma ORM

## Tech Stack

| Layer | Technology |
|---|---|
| Mobile Frontend | React Native (Expo), React Navigation |
| Backend API | Node.js, Express |
| Database | PostgreSQL (Supabase) |
| ORM | Prisma |
| Authentication | JWT (access + refresh tokens), bcrypt |
| Image Storage | Cloudinary |
| Location Services | Expo Location |

## Project Structure

**Frontend**
```
FixIt-Cameroon/
├── App.js
├── constants/
│   ├── theme.js
│   └── config.js
├── context/
│   ├── AuthContext.js
│   └── ReportContext.js
├── services/
│   └── api.js
├── screens/
│   ├── onboarding/
│   ├── home/
│   ├── reporting/
│   ├── resolution/
│   ├── profile/
│   ├── admin/
│   └── extras/
└── assets/
```

**Backend**
```
fixitcameroon-backend/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── cloudinary.js
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   └── server.js
└── .env
```

## Getting Started

### Prerequisites
- Node.js (LTS)
- Expo CLI (`npx expo`)
- A Supabase project (PostgreSQL database)
- A Cloudinary account

### Backend Setup
```bash
cd fixitcameroon-backend
npm install
npx prisma migrate dev --name init
npm run dev
```

### Frontend Setup
```bash
cd FixIt-Cameroon
npm install
npx expo start -c
```

Update `constants/config.js` with your backend's LAN IP address so a physical device can reach it during development.

## Environment Variables

The backend requires a `.env` file with the following:

```
DATABASE_URL=
DIRECT_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
PORT=5000
```

`JWT_SECRET` and `JWT_REFRESH_SECRET` should be long, randomly generated values, kept distinct from one another and never committed to version control.

## API Reference

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/auth/signup` | Public | Create an account |
| POST | `/auth/login` | Public | Authenticate and receive tokens |
| POST | `/auth/refresh` | Public | Exchange a refresh token for a new access token |
| GET | `/auth/me` | Authenticated | Get the current user's profile |
| GET | `/issues` | Public | List issues (filterable by status, category, severity) |
| GET | `/issues/:id` | Public | Get a single issue |
| POST | `/issues` | Authenticated | Create a new issue report |
| PUT | `/issues/:id` | Admin | Update an issue's status |
| POST | `/issues/:id/support` | Authenticated | Toggle support (upvote) on an issue |
| GET | `/issues/:id/comments` | Public | List comments on an issue |
| POST | `/issues/:id/comments` | Authenticated | Add a comment |
| POST | `/issues/:id/photos` | Authenticated | Upload photos to an issue |
| DELETE | `/issues/:id/photos/:photoId` | Reporter / Admin | Delete a photo |
| GET | `/admin/dashboard` | Admin | Aggregated statistics for the municipal dashboard |

## Roadmap

- Missions module (community cleanup events, volunteer tracking)
- Bookmarks (save issues for later)
- Notifications (status-change alerts)
- Leaderboard (points-based community ranking)
- Follow relationships (organizations and users)

## Contributing

1. Create a feature branch from `main`
2. Keep commits scoped to a single feature or fix where possible
3. Open a pull request with a clear description of the change
4. Request review before merging

## License

TBD
