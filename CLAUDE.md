
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Basic Commands
- `npm run dev` - Start development server using Vite
- `npm run build` - Build for production (runs TypeScript compiler first, then Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on the codebase
- `npm test` - Run Jest test suite

### Testing
- Tests are configured with Jest and located in `src/tests/`
- Use `npm test` to run all tests
- Jest is configured with TypeScript support and v8 coverage provider

## Architecture Overview

### Technology Stack
- **React 19** with TypeScript and SWC for fast compilation
- **Vite** as build tool and dev server
- **Jotai** for atomic state management
- **TailwindCSS 4** for styling (integrated via Vite plugin)
- **@dnd-kit** for drag-and-drop functionality
- **Tone.js** for audio manipulation (likely for sample management)

### Project Structure
```
src/
├── components/     # React components (empty initially)
├── hooks/         # Custom React hooks (empty initially) 
├── store/         # Jotai atoms for state management
├── styles/        # Global CSS and styling
├── tests/         # Jest test files
├── utilities/     # Helper functions and utilities (empty initially)
└── assets/        # Static assets
```

### State Management
- Uses **Jotai** for atomic, bottom-up state management
- State atoms are defined in `src/store/atoms.ts`
- The app is wrapped with Jotai's `Provider` in `main.tsx`

### Build Configuration
- **TypeScript** project references configuration with separate app and node configs
- **Strict TypeScript** settings enabled with unused variable/parameter checking
- **ESLint** with React hooks and refresh plugins
- **Vite** configured with React SWC plugin and TailwindCSS integration

## Development Notes

This appears to be a sample management application (SampleFlow) with drag-and-drop capabilities and audio processing features. The project is freshly initialized with base dependencies but minimal implementation.

### Key Dependencies
- `@dnd-kit/*` - Comprehensive drag-and-drop toolkit
- `jotai` - Atomic state management
- `tone` - Web Audio API framework for audio manipulation
- `@tailwindcss/vite` - TailwindCSS 4 with Vite integration