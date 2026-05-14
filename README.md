<div align="center">
  <h1>Kareer</h1>
  <p><strong>A career platform demo for international students in Korea, built with Next.js, TypeScript, and Tailwind CSS.</strong></p>
  <p>I built this project as a polished frontend product prototype for students who need a clearer path from university life in Korea to visa-safe internships, resume preparation, career guidance, and job readiness.</p>
</div>

<div align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</div>

<div align="center">
  <sub>Static frontend demo. Mock data only. No backend or authentication yet.</sub>
</div>

<div align="center">
  <a href="https://github.com/sujamahat/Kareer"><strong>Repository</strong></a>
  ·
  <a href="#getting-started"><strong>Run Locally</strong></a>
  ·
  <a href="#pages"><strong>Pages</strong></a>
  ·
  <a href="#resume-friendly-talking-points"><strong>Resume Points</strong></a>
</div>

## Live Deployment

This project is prepared for GitHub Pages deployment using GitHub Actions.

Expected GitHub Pages URL after deployment:

```text
https://sujamahat.github.io/Kareer/
```

If the link is not live yet, enable GitHub Pages in the repository settings:

1. Go to **Settings**
2. Open **Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main` and let the deploy workflow run

## Demo Status

Kareer is currently a static frontend demo:

- mock data only
- no backend
- no database
- no authentication
- no OpenAI integration yet
- no real resume upload processing yet

This keeps the first version focused on the user interface, product flow, responsive layout, and visual design.

## Why I Built This

International students in Korea often have to figure out career planning, visa rules, internships, resumes, and recruiter communication separately. Kareer brings those pieces into one product concept.

The goal is to make the experience feel like a real career platform, not just a landing page:

- career dashboard for progress tracking
- internship listings filtered around D-2 visa needs
- visa checker interface
- resume review interface
- chatbot-style career assistant
- dark and light mode
- responsive pages for desktop and mobile

## Product Vision

Kareer is designed for international students studying in Korea who want to move from part-time survival jobs into degree-related career opportunities.

The product focuses on three main problems:

- finding internships that match both skills and visa restrictions
- preparing resumes and applications for Korean hiring expectations
- understanding career steps, documents, and next actions clearly

The current version is a frontend prototype, but the interface is structured so it can later support a real backend, user accounts, resume uploads, and AI-powered guidance.

## Pages

The app includes these static frontend pages:

- Landing page: `/`
- Dashboard: `/dashboard`
- Internship listings: `/internships`
- Visa checker: `/visa`
- Resume review: `/resume`
- Chatbot: `/chatbot`

The homepage also scrolls through the main product sections so visitors can preview the full experience from one page.

## What Users Can Preview

- Browse a polished landing page for the Kareer product
- View a mock student career dashboard
- Explore visa-safe internship cards
- Check D-2 visa rules and document status
- Preview resume review feedback
- Interact visually with a static chatbot interface
- Toggle dark and light mode across the whole website
- Navigate between standalone static pages

## Stack

- Framework: Next.js
- UI Library: React
- Language: TypeScript
- Styling: Tailwind CSS + custom CSS variables
- Icons: Tabler Icons
- Deployment target: GitHub Pages

## Architecture

Kareer is currently a static Next.js frontend app using the App Router.

```text
Next.js App Router
    |
    |-- Static pages
    |-- Mock data arrays
    |-- Reusable React components
    |-- Tailwind utility classes
    |-- Global CSS design tokens
    |
    v
Static export for GitHub Pages
```

There is no server-side business logic yet. All internship data, dashboard stats, visa checklist items, resume feedback, and chatbot messages are mocked inside the frontend.

## Key Features

- Multi-page static website
- Scrollable homepage with product sections
- Persistent dark/light theme toggle
- Career dashboard UI
- Internship listing cards with mock match scores
- Visa checker and document checklist UI
- Resume review score and feedback UI
- Static chatbot conversation interface
- Responsive layout for smaller screens
- GitHub Pages deployment workflow

## Project Layout

```text
app/
  chatbot/page.tsx       Static chatbot page
  dashboard/page.tsx     Static dashboard page
  internships/page.tsx   Static internship listings page
  resume/page.tsx        Static resume review page
  visa/page.tsx          Static visa checker page
  globals.css            Global styles and design tokens
  layout.tsx             Root layout and theme setup
  page.tsx               Landing page and shared UI components

.github/
  workflows/
    deploy-pages.yml     GitHub Pages deployment workflow

public/
  .nojekyll              Required for GitHub Pages static assets
```

## What I Built

- Recreated the provided Kareer UI design in Next.js
- Split the product into static frontend pages
- Added a scrollable homepage experience
- Built reusable components for navigation, cards, sections, dashboard panels, and mock assistant messages
- Added persistent dark/light mode using `localStorage`
- Configured static export for GitHub Pages
- Added a GitHub Actions workflow for deployment

## Engineering Challenges

### 1. Preserving the original design

The goal was not to redesign the product. I translated the provided HTML/CSS design into a Next.js app while keeping the same spacing, color system, typography, cards, dashboard layout, and overall product feel.

### 2. Turning one prototype into real pages

The original design was a single-page prototype. I converted it into route-based static pages while keeping the homepage scrollable for a website-style demo.

### 3. Making theme state feel global

The dark/light toggle needed to work once across the whole website. I used `localStorage` and a root layout script so the selected theme persists when navigating between pages.

## Tradeoffs

- All data is mocked, so there is no real internship search or filtering yet
- The resume review page is visual only and does not process uploaded files yet
- The chatbot page is a static interface and does not call an AI API yet
- There is no login because this first version is focused on frontend presentation
- GitHub Pages is simple for static hosting, while Vercel may be better later if server features are added

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

### 3. Build the static site

```bash
npm run build
```

The static export is generated in:

```text
out/
```

## Deployment

### GitHub Pages

This project includes a GitHub Actions workflow at:

```text
.github/workflows/deploy-pages.yml
```

To deploy:

1. Push the project to GitHub
2. Open the repository settings
3. Go to **Pages**
4. Choose **GitHub Actions** as the source
5. Push to `main`

The workflow will install dependencies, build the static site, upload the `out/` folder, and deploy it to GitHub Pages.

### Vercel Alternative

This is a Next.js app, so it can also be deployed on Vercel:

```bash
vercel
```

For production:

```bash
vercel --prod
```

## Future Improvements

- Add authentication and student profiles
- Connect internship listings to a real database
- Add resume upload and parsing
- Add AI-powered resume feedback
- Add chatbot responses with an AI API
- Add saved jobs and application tracking
- Add admin tools for managing internships
- Add real visa rule logic and document reminders

## Resume-Friendly Talking Points

- Built a polished career platform frontend using Next.js, TypeScript, React, and Tailwind CSS
- Converted a static UI design into a responsive multi-page website with reusable components
- Implemented persistent dark/light mode across routes using local storage and root-level theme setup
- Created mock product flows for internships, visa checking, resume review, chatbot assistance, and dashboard tracking
- Configured static export and GitHub Pages deployment with GitHub Actions

## Recruiter Summary

This project demonstrates:

- frontend product design implementation
- responsive UI engineering
- component-based React development
- static deployment with GitHub Pages
- practical product thinking for international student career support

