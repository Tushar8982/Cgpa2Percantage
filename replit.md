# CGPA to Percentage Converter

## Overview

This is a full-stack web application for converting CGPA (Cumulative Grade Point Average) to percentage and vice versa. The application supports multiple grading scales (4.0, 5.0, 7.0, 10.0) and various conversion standards used by different countries and institutions. It features a modern, responsive design with educational content to help users understand grading systems.

**Developer:** Tushar Khandelwal  
**Contact:** tusharkhandelwal48@gmail.com  
**GitHub:** https://github.com/Tushar8982  
**LinkedIn:** https://linkedin.com/in/tusharkhandelwal77  
**Twitter:** https://x.com/_tushar77  

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with a clear separation between client-side and server-side code:

- **Frontend**: React with TypeScript, built using Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used)
- **Styling**: TailwindCSS with shadcn/ui components
- **Build System**: Vite for frontend, esbuild for backend

## Key Components

### Frontend Architecture
- **React SPA**: Single-page application using Wouter for routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: React Hook Form for form handling, TanStack Query for server state
- **Responsive Design**: Mobile-first approach with TailwindCSS

### Backend Architecture
- **Express Server**: RESTful API server with TypeScript
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Development Integration**: Vite middleware for hot reloading in development

### Database Schema
- **Drizzle ORM**: Configured for PostgreSQL with migrations support
- **Schema Definition**: Shared between client and server in `/shared/schema.ts`
- **Current Implementation**: Uses in-memory storage, database integration ready

### Core Features
- **Conversion Engine**: Mathematical formulas for different grading scales
- **Educational Content**: Guides explaining different grading systems
- **Form Validation**: Zod schemas for type-safe form validation
- **Responsive UI**: Mobile-optimized interface with touch-friendly controls

## Data Flow

1. **User Input**: Forms capture CGPA/percentage values with scale selection
2. **Validation**: Client-side validation using Zod schemas
3. **Conversion**: Pure JavaScript functions perform mathematical conversions
4. **Results Display**: Immediate feedback with formula explanations and grade mappings
5. **Educational Content**: Static content providing context and understanding

## External Dependencies

### Core Libraries
- **React Ecosystem**: React 18, React Hook Form, TanStack Query
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: TailwindCSS with custom design system
- **Backend**: Express.js, Drizzle ORM
- **Database**: Neon Database (PostgreSQL)

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript
- **Code Quality**: ESLint configuration through Vite
- **Development Experience**: Hot reloading, error overlays

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static files served from build directory

### Environment Configuration
- **Development**: Vite dev server with Express middleware
- **Production**: Express serves static files and API routes
- **Database**: Environment variable for DATABASE_URL

### Hosting Considerations
- **Static Assets**: Can be served via CDN
- **API Server**: Node.js environment required
- **Database**: PostgreSQL instance (Neon Database configured)

The application is designed to be easily deployable to platforms like Vercel, Netlify, or traditional hosting providers with Node.js support.