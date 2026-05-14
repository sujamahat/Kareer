<div align="center">
  <h1>Kareer</h1>
  <p><strong>A career platform demo for international students in Korea, built with Next.js, TypeScript, and Tailwind CSS.</strong></p>
  <p>I built Kareer as a frontend demo for international students in Korea who want a clearer path from university life to internships, resume preparation, visa-aware career planning, and job readiness.</p>
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
  <a href="https://kareer-dun.vercel.app"><strong>Live Demo</strong></a>
  ·
  <a href="#getting-started"><strong>Run Locally</strong></a>
  ·
  <a href="#pages"><strong>Pages</strong></a>
  ·
  <a href="#resume-friendly-talking-points"><strong>Resume Points</strong></a>
</div>

## Live Deployment

Live demo:

- [Kareer on Vercel](https://kareer-dun.vercel.app)

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

As an international student in Korea, I wanted to explore a product idea that brings career planning, visa awareness, internships, resumes, and recruiter communication into one place.

I wanted Kareer to feel like an actual product demo instead of only a landing page, so I included:

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

The current version is a frontend prototype, but I structured it so it can later grow into a full product with accounts, saved internships, resume uploads, and AI-powered career guidance.

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
- Deployment target: Vercel

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
Static frontend deployment on Vercel
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
- Vercel-ready frontend deployment

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

public/
  .nojekyll              Static hosting compatibility file
```

## What I Built

- Recreated the provided Kareer UI design in Next.js
- Split the product into static frontend pages
- Added a scrollable homepage experience
- Built reusable components for navigation, cards, sections, dashboard panels, and mock assistant messages
- Added persistent dark/light mode using `localStorage`
- Prepared the project for frontend deployment

## Engineering Challenges

### 1. Turning one prototype into real pages

The original design was a single-page prototype. I converted it into route-based static pages while keeping the homepage scrollable for a website-style demo.

### 2. Making theme state feel global

The dark/light toggle needed to work once across the whole website. I used `localStorage` and a root layout script so the selected theme persists when navigating between pages.

### 3. Keeping the product clear without a backend

Since this version is frontend-only, I used mock data in a way that still shows the full product idea: dashboards, listings, visa checks, resume feedback, and chatbot-style support.

## Tradeoffs

- All data is mocked, so there is no real internship search or filtering yet
- The resume review page is visual only and does not process uploaded files yet
- The chatbot page is a static interface and does not call an AI API yet
- There is no login because this first version is focused on frontend presentation
- Vercel is the best fit for this Next.js frontend, especially if I add server features later

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

### Vercel

This is a Next.js app, so I am using Vercel for the live demo.

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
- Prepared the project for Vercel deployment

## Recruiter Summary

This project demonstrates:

- frontend product design implementation
- responsive UI engineering
- component-based React development
- static frontend deployment with Vercel
- practical product thinking for international student career support
