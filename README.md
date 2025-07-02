# Crypthouse Studio Website

This project is the marketing site for **Crypthouse Studio**, a fictional indie game studio creating atmospheric gothic experiences. The site is built with React, TypeScript and Vite and includes pages for our games, devlog posts and community links.

![Home page screenshot](public/assets/featured-crypt.png)

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.
3. **Lint the code**
   ```bash
   npm run lint
   ```
4. **Build for production**
   ```bash
   npm run build
   ```
5. **Preview the built site**
   ```bash
   npm run preview
   ```

## Customising Content

### Games

Game cards are defined in `src/pages/Games.tsx` inside the `games` array. Each entry contains a title, description, image and link. Add or edit objects in this array to update the games shown on the site.

### Devlog Posts

Markdown posts live in `src/devlog/`. Create a new `.md` file with front‑matter fields:

```markdown
---
title: "Your Post Title"
date: "2025-05-01"
description: "Short summary shown before expanding."
---
```

The devlog page automatically loads all markdown files and sorts them by date.

### Social Links and Trailer

Update social media URLs and the trailer video ID in these files:

- `src/components/Footer.tsx`
- `src/pages/Community.tsx`
- `src/components/VideoModal.tsx`

Replace placeholders such as `YOUR_HANDLE` or `YOUR_TRAILER_ID` with your actual links.

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to your static host (GitHub Pages, Netlify, etc.).
