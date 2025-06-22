# Portfolio Website

## Project Overview
An Apple-inspired portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, featuring dark/light mode toggle and responsive design.

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes for dark/light mode
- **Font**: Inter (Google Fonts)

## Project Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── ThemeProvider.tsx
    ├── ThemeToggle.tsx
    └── Work.tsx
```

## Key Features
- **Responsive Design**: Mobile-first approach with clean breakpoints
- **Dark/Light Mode**: System preference detection with manual toggle
- **Apple-inspired UI**: Clean typography, subtle animations, and modern aesthetics
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Proper ARIA labels and semantic HTML

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Components

### Header
- Fixed navigation with backdrop blur
- Mobile-responsive hamburger menu
- Dark/light mode toggle button
- Smooth scroll navigation links

### Hero
- Large typography with gradient text effect
- Call-to-action buttons with hover animations
- Scroll indicator with bounce animation
- Responsive layout for all screen sizes

### Work
- Project cards with hover effects
- Technology tags for each project
- Live demo and GitHub links
- Responsive grid layout

### ThemeProvider & ThemeToggle
- System theme detection
- Smooth theme transitions
- Persistent theme preference
- Sun/moon icon toggle

## Customization Guide

### Personal Information
1. Update `src/app/layout.tsx` - Change metadata title and description
2. Update `src/components/Hero.tsx` - Replace "Your Name" and personal description
3. Update `src/app/page.tsx` - Change email address in contact section
4. Update footer copyright information

### Projects
Edit the `projects` array in `src/components/Work.tsx`:
```tsx
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description here",
    image: "https://your-image-url.com",
    technologies: ["Tech1", "Tech2", "Tech3"],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/your-repo"
  }
]
```

### Styling
- Colors: Modify Tailwind classes throughout components
- Typography: Update font family in `layout.tsx`
- Animations: Adjust transition durations and hover effects
- Layout: Modify container max-widths and spacing

## Deployment
This project is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Railway**

### Environment Variables
No environment variables required for basic functionality.

## Performance Optimizations
- Next.js Image component for optimized images
- Font optimization with `next/font`
- CSS-in-JS with Tailwind for minimal bundle size
- Lazy loading for images and components

## Browser Support
- Modern browsers (Chrome 88+, Firefox 85+, Safari 14+)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Dark mode support across all supported browsers

## Future Enhancements
- [ ] Add blog section
- [ ] Implement contact form with backend
- [ ] Add project filtering and search
- [ ] Implement animations library (Framer Motion)
- [ ] Add testimonials section
- [ ] Integrate CMS for content management