# Vice Chancellor Portfolio Website

## Overview
This is a full-stack JavaScript portfolio website for a Vice Chancellor (Dr. Anoop Gupta), showcasing educational leadership, innovation, and institutional vision.

## Project Architecture

### Technology Stack
- **Frontend**: React 18 + Vite + TypeScript
- **Backend**: Express.js
- **Styling**: Tailwind CSS + Shadcn UI components
- **State Management**: TanStack Query (React Query v5)
- **Routing**: Wouter
- **Database**: In-memory storage (MemStorage) with Drizzle ORM schema definitions
- **Animations**: Framer Motion

### Project Structure
- `client/` - React frontend application
  - `src/components/` - Reusable UI components including hero, about, achievements, gallery, contact sections
  - `src/pages/` - Page components (Home, NotFound)
  - `src/lib/` - Utility functions and query client setup
- `server/` - Express backend
  - `index.ts` - Main server entry point
  - `routes.ts` - API route definitions
  - `storage.ts` - In-memory storage implementation
  - `vite.ts` - Vite development server setup
- `shared/` - Shared TypeScript types and schemas
- `attached_assets/` - Static assets including images

### Configuration
- **Development Port**: 5000 (configured for Replit webview)
- **Host**: 0.0.0.0 (allows Replit proxy access)
- **Vite Configuration**: Allows all hosts for iframe preview compatibility

## Development

### Running Locally
```bash
npm run dev
```
This starts both the Express server and Vite development server on port 5000.

### Building for Production
```bash
npm run build
```
This builds both the frontend (Vite) and backend (esbuild).

### Starting Production Server
```bash
npm start
```

## Deployment
- **Type**: Autoscale deployment (stateless)
- **Build Command**: `npm run build`
- **Run Command**: `npm start`

## Recent Changes (November 8, 2025)
- Imported from GitHub repository
- Removed GitHub Pages base path (`/VCportfolio/`) from vite.config.ts for Replit compatibility
- Configured workflow to run on port 5000 with webview output
- Set up deployment configuration for Replit publishing
- Verified application runs successfully with all components rendering correctly

## Features
- Animated hero section with Vice Chancellor introduction
- About section with background information
- Academic excellence showcase
- Leadership initiatives
- Achievements and awards
- Photo gallery
- Contact information
- Responsive design with dark mode support
- Smooth animations and transitions
