# Revision OS

Revision OS is a dark-mode-first revision operating system for A-Level students. It turns a syllabus into daily actionable tasks, tracks progress by subtopic stage (notes, flashcards, past questions), and is structured for push notifications + PWA installability.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + reusable UI primitives
- Firebase Auth + Firestore + Cloud Functions scaffold
- Zustand (timer state)
- date-fns + zod-ready model layer

## Implemented in this scaffold

- App shell with RemNote-inspired dark UI and sidebar navigation
- Routes: today, subjects, planner, exams, stats, settings, nested subject/topic/subtopic pages
- Daily assignment engine (`lib/engine/daily-assignment.ts`)
- Starter subject/topic seed definitions for Geography, Business, Biology
- Task list + mini Pomodoro timer (25-minute default)
- Command palette (`Cmd/Ctrl + K`)
- PWA essentials: `manifest.json`, service worker, auto registration
- Firebase client bootstrap and auth helpers
- Firebase Functions starter endpoints for scheduling + recalculation jobs
- Firestore rules starter

## Run in Replit

1. Install dependencies:
   ```bash
   npm install
   npm --prefix functions install
   ```
2. Add secrets in **Replit Secrets** using `.env.example`.
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Production build/start:
   ```bash
   npm run build
   npm run start
   ```

## Firebase setup

1. Create Firebase project.
2. Enable Email/Password in Authentication.
3. Create Firestore database.
4. Copy web app config into Replit Secrets (`NEXT_PUBLIC_FIREBASE_*`).
5. For push notifications, create a Web Push certificate key and set `NEXT_PUBLIC_FIREBASE_VAPID_KEY`.
6. Deploy functions from `functions/` once logic is implemented.

## Push notifications + PWA notes

- Manifest: `public/manifest.json`
- Service worker: `public/sw.js`
- Registration: `components/shared/pwa-init.tsx`
- The current SW handles push payload display and deep-link opening.

## Deployment guidance (Replit-first)

- Deploy the Next.js app as a standard Replit web deployment.
- Keep heavy scheduling logic in Firebase Cloud Functions (recommended).
- Alternatively mirror schedules with Replit scheduled jobs hitting secure endpoints.

## Seed data

Starter data for AQA Geography, Edexcel Business, and OCR Biology is defined in:

- `lib/seed/starter-data.ts`

Hook this into auth onboarding or a `seedStarterSubjects(userId)` Cloud Function.
