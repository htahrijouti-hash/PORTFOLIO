# Hamza Tahri Jouti — Portfolio

> **Live:** [https://portfolio-hamza-tahri-jouti.vercel.app](https://portfolio-hamza-tahri-jouti.vercel.app)

A modern, responsive personal portfolio built with **Astro** and deployed on **Vercel**. Features dark/light theme, glassmorphism design, AI chatbot assistant, and ATS-compatible resume export (PDF & DOCX).

## Project Structure

```text
/
├── public/              # Static assets (favicon)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── BackToTop.astro
│   │   ├── AiAssistant.astro
│   │   └── ResumeExport.astro
│   ├── data/
│   │   └── portfolio.ts # ← Single source of truth for all content
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── vercel.json
├── astro.config.mjs
└── package.json
```

## How to Update Content

Edit **`src/data/portfolio.ts`** — this single file controls all sections: personal info, skills, education, experience, publications, projects, certifications, and social links. Navigation is generated automatically from sections with data.

## Commands

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start local dev server at `localhost:4321`   |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview build locally                        |
| `npx vercel --prod` | Deploy to Vercel                             |

## Features

- Dark/Light theme with glassmorphism design
- Fully responsive (mobile, tablet, desktop)
- AI chatbot assistant (client-side, no API needed)
- ATS-compatible resume export (PDF & DOCX)
- Scroll-reveal animations
- Contact form via FormSubmit
- Vercel Analytics integration

## Tech Stack

**Astro** · **TypeScript** · **CSS Custom Properties** · **jsPDF** · **docx** · **Vercel**

---

Built with [Astro](https://astro.build) · Deployed on [Vercel](https://vercel.com)
