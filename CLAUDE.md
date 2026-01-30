# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Karate tournament management system (mockup/prototype) built with React. Supports WKF-compliant tournaments with roles: Organizator (organizer), Trener (coach), Sędzia (referee), Zawodnik (competitor).

## Commands

- `npm run dev` - Start dev server with MSW mocking
- `npm run build` - TypeScript check + Vite build
- `npm run lint` - ESLint

## Architecture

### Stack
- React 19 + TypeScript + Vite
- TanStack Router (file-based routing)
- TanStack Query (data fetching)
- Zod + react-hook-form (validation)
- MSW (API mocking in dev)
- i18next (translations in `src/locales/`)

### Path Alias
`@/` maps to `src/`

### Routing
File-based routes in `src/routes/`. TanStack Router plugin auto-generates `routeTree.gen.ts`.

Role-based route structure:
- `/zawodnik/*` - competitor views (dashboard, ranking, schedule, bracket)
- `/trener/*` - coach views (registration, team management)
- `/sedzia/*` - referee views (schedule, scoring)
- `/organizator/*` - organizer views (config, resources, schedule)

### Feature Module Pattern
Features in `src/features/{feature}/`:
- `types/` - TypeScript interfaces
- `services/` - API calls via axios (singleton class pattern)
- `hooks/` - React Query hooks wrapping services
- `components/` - UI components
- `mocks/` - MSW handlers + mock data

### MSW Mocking
- Handlers aggregated in `src/common/mocks/handlers.ts`
- Auto-starts in dev mode via `src/main.tsx`
- API base: `/api/v1`

### Root Layout
`src/routes/__root.tsx` provides QueryClientProvider and Navbar wrapper.

## Language
UI text is Polish. Use i18next namespace per feature (e.g., `useTranslation('zawodnik')`).
