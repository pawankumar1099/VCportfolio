# Vice Chancellor Portfolio Website

## Overview
A sophisticated portfolio website for Dr. Anoop Gupta, Vice Chancellor of GLA University. The site showcases professional journey, academic excellence, achievements, and leadership vision.

## Recent Changes (November 8, 2025)
- **Enhanced Professional Journey Timeline**: Completely redesigned with sophisticated animations, 3D effects, parallax backgrounds, and premium visual design
- **Enhanced Academic Excellence Timeline**: Rebuilt with advanced animations, glowing effects, pulsing icons, and layered depth effects
- **Added sophisticated blob animations** for decorative background elements
- **Improved visual hierarchy** with gradient text, shadow effects, and responsive design
- **Featured items** now have special glowing effects and enhanced styling to draw attention

## Project Architecture

### Technology Stack
- **Frontend**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI components
- **Animations**: Framer Motion + React Intersection Observer
- **Backend**: Express.js (minimal - serves frontend)
- **Routing**: Wouter for client-side routing

### Key Sections
1. **Hero Section** - Main landing with Vice Chancellor introduction
2. **Professional Journey** - Timeline of career milestones (Enhanced ✨)
3. **Academic Excellence** - Timeline of educational achievements (Enhanced ✨)
4. **Leadership Initiatives** - Key projects and innovations
5. **Achievements** - Awards and recognitions
6. **Vision & Mission** - Educational philosophy
7. **Gallery** - Visual showcase
8. **Contact** - Get in touch section

### File Structure
```
client/src/
  ├── components/
  │   ├── ExperienceSection.tsx (Enhanced with premium animations)
  │   ├── EducationSection.tsx (Enhanced with sophisticated design)
  │   ├── HeroSection.tsx
  │   ├── AchievementsSection.tsx
  │   └── ... (other sections)
  ├── pages/
  │   └── Home.tsx
  └── App.tsx

server/
  ├── index.ts (Express server)
  └── routes.ts (API routes)
```

## Design Features

### Professional Journey Timeline
- 3D card transformations on hover
- Alternating left-right layout on desktop
- Gradient text and icon animations
- Pulsing timeline dots with rotating rings
- Featured positions have special glowing effects
- Parallax background with animated gradients
- Smooth entrance animations with staggered delays

### Academic Excellence Timeline
- Vertical timeline with sophisticated dots
- Enhanced icon animations with orbiting particles
- Pulsing achievement badges
- Featured degrees have sparkle decorations
- Premium card design with backdrop blur
- Animated dot patterns and gradient backgrounds
- 3D rotation effects on hover

## Running the Project

### Development
```bash
npm run dev
```
Runs on port 5000 (configured for Replit environment)

### Production Build
```bash
npm run build
npm start
```

## Deployment
- Configured for Replit Autoscale deployment
- Build command: `npm run build`
- Run command: `npm start`
- Uses port 5000 (Replit requirement)

## Key Configuration
- **Port**: 5000 (both dev and production)
- **Host**: 0.0.0.0 for Replit compatibility
- **Allowed Hosts**: Configured to allow all hosts for Replit's iframe preview
- **Base Path**: `/` (GitHub Pages base path removed for Replit)

## Animation Features
- Blob animations for decorative backgrounds
- Framer Motion for smooth transitions
- React Intersection Observer for scroll-triggered animations
- Custom keyframe animations in index.css
- Parallax scrolling effects using useScroll hook

## Color Scheme
- Primary: Green tones (representing growth and education)
- Accents: Purple, teal, orange (for variety in timeline items)
- Gradients: Sophisticated multi-color gradients for depth
- Text: High contrast for readability

## Notes
- All animations are optimized for performance
- Responsive design works across all screen sizes
- Timeline sections are the showcase features with premium design
- Icons from Lucide React for consistency
- Enhanced sections designed to capture attention and look professional
