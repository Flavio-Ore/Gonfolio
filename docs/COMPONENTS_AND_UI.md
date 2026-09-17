# Components & Design System

## Overview

Gonfolio's user interface is engineered as an authoritative **AI Software Engineer** personal brand platform. It uses modular Astro components with Tailwind CSS utility styling, Fontsource web typography, subtle micro-interactions, and a sleek **Obsidian Luxe with Amber & Emerald** design palette.

---

## Design System Foundations

### 1. Color Palette

The design relies on deep obsidian canvases, subtle warm amber accents for engineering prestige, and emerald indicators for live availability:

| Token                         | Class / Value           | Psychological Role                                                     |
| :---------------------------- | :---------------------- | :--------------------------------------------------------------------- |
| `dark`                        | `#09090b` (Obsidian)    | Deep, focused dark canvas conveying modern technical maturity          |
| `light`                       | `#fafafa` (Clean White) | Crisp, editorial reading background for light mode                     |
| `amber-500` / `amber-400`     | Warm Gold / Amber       | Primary engineering accent, highlights, active tabs, CTA borders       |
| `emerald-500` / `emerald-400` | Emerald Green           | Live availability status pulse, verified checkmarks, trust cues        |
| `zinc-900` / `zinc-800`       | Obsidian Glass Tiles    | Subtle container cards with fine 1px borders and frosted backdrop blur |

### 2. Typography (`tailwind.config.mjs`)

Three fonts are integrated via `@fontsource`:

- **Primary Body & Headings**: `Hanken Grotesk Variable` + `Inter Variable`
- **Display Accents**: `Inder`

---

## Component Catalog

### Main Layout (`src/layouts/Layout.astro`)

The root HTML shell. Responsible for:

- Injecting SEO metadata via `_SEO.astro`.
- Initializing `ClientRouter` for smooth transitions.
- Setting ambient dual-layer glow background (amber + emerald warmth) and custom scrollbar styling.
- Running the `IntersectionObserver` for `.reveal` elements.

### Navigation (`src/components/Navigation.astro`)

- Floating pill glassmorphic navbar (`bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md`).
- Smooth anchor navigation linking to `#about`, `#skills`, `#projects`, `#experience`, `#contact`.
- Integrates `ChangeLang.astro` for instant language switching with flag pills.

### Header / Identity (`src/components/Header.astro`)

- Verified engineer avatar with live emerald status indicator.
- Brand signature: `Flavio Oré` and `Full-Stack Software Engineer • Operational Systems` subtitle.
- Direct quick channels: GitHub, LinkedIn, and Email with sleek glass hover effects.

### Profile / Hero (`src/components/Profile.astro`)

- **Live Status Badge**: Pulsing green availability pill (`🟢 Available for Full-Stack & Operational Systems • 2026`).
- **Commanding Headline & Value Proposition**: Clear authority-driven narrative on operational systems, business automation, and microservices.
- **Trust Metrics Strip**: 3 high-trust stats cards (Production ERP & Microservices, Business Automation & Logic, 800+ GitHub Contributions).
- **Core Engineering Pillars Bento**: 3 cards highlighting (1) Operational Systems & ERPs, (2) Business Automation & Requirements, and (3) Cloud & Full-Stack Architecture.
- **Action Triggers**: Refined warm amber glass button ("Explore Flagship Systems") and complementary contact button.

### Projects Showcase (`src/components/Projects.astro`)

- Engineering case study presentation with case study badges.
- Bullet points rendered with emerald checkmarks.
- Responsive image previews with subtle zoom hover effects.
- Dual action buttons: "Live System" and "Source Code".
- Technology badges with custom animated SVG icons.

### Skills & Arsenal (`src/components/Skills.astro`)

- **Interactive Category Tabs**: Filter pill bar (`All`, `Frontend`, `Backend`, `Cloud & DevOps`, `Other & Tools`) with client-side zero-reload switching.
- **Normalized Categories**:
  1. Frontend Architecture (React, TypeScript, Angular, TailwindCSS, ShadCN, React Query)
  2. Backend & Microservices (Node.js, NestJS, Next.js, Java Spring, GraphQL)
  3. Cloud & Infrastructure (AWS, Google Cloud, Docker, Vite, Appwrite, SQL Server)
  4. Languages & Tooling (Java, C#/.NET, Python, Figma)
- **Responsive Compact Grid**: `grid-cols-3 sm:grid-cols-4 md:grid-cols-6` tiles with tactile touch response (`active:scale-95`).

### Experience Timeline (`src/components/Experience.astro`)

- Vertical gradient timeline axis with glowing amber node indicators.
- Displays engineering roles, enterprise achievements, Angular 14→15 migration leadership, and cloud microservices delivery.
- Summary statistics grid (Systems Built, Core Technologies, GitHub Repos, Contributions).

### Contact & Conversion Hub (`src/components/Contact.astro`)

- **Copy-on-Click Email**: Interactive button that copies `gonzaloorech@gmail.com` to the clipboard with live toast feedback.
- **Trust Guarantee**: "Direct engineer communication • Guaranteed reply within 24 hours".
- **Direct Channels**: Verified LinkedIn and GitHub cards.
- **Inquiry Form**: Clean glassmorphism inputs with instant submission state feedback.

### Footer (`src/components/Footer.astro`)

- Brand signature, copyright statement, and smooth back-to-top button.

---

## Icon System (`src/components/icons/`)

The repository contains 38 modular `.astro` SVG icons:

```
src/components/icons/
├── AWSIcon.astro         ├── GoogleCloudIcon.astro ├── ReactIcon.astro
├── AngularIcon.astro     ├── GraphQLIcon.astro     ├── ReactQueryIcon.astro
├── AppwriteIcon.astro    ├── JavaIcon.astro        ├── SQLServerIcon.astro
├── AutomationIcon.astro  ├── JavaSpringIcon.astro  ├── ShadcnIcon.astro
├── CSharpIcon.astro      ├── LangIcon.astro        ├── ShieldCheckIcon.astro
├── CloudIcon.astro       ├── LinkIcon.astro        ├── SnapgramLogo.astro
├── ComputerIcon.astro    ├── LinkedInIcon.astro    ├── SunIcon.astro
├── DockerIcon.astro      ├── MicrosoftIcon.astro   ├── TailwindIcon.astro
├── ERPIcon.astro         ├── MoonIcon.astro        ├── TypeScriptIcon.astro
├── FigmaIcon.astro       ├── NestJSIcon.astro      ├── UniversityIcon.astro
├── GithubAltIcon.astro   ├── NextJSIcon.astro      └── ViteIcon.astro
├── GithubIcon.astro      ├── NodeJsIcon.astro
├── GmailIcon.astro       ├── PortfolioIcon.astro
└── PythonIcon.astro
```
