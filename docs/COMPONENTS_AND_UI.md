# Components & Design System

## Overview

Gonfolio's user interface is constructed using modular Astro components with Tailwind CSS for utility styling, Fontsource for web typography, and `@midudev/tailwind-animations` for micro-animations.

---

## Design System Foundations

### 1. Color Palette

The design relies on a warm amber/orange accent palette combined with deep dark and crisp light backgrounds:

| Token                       | Class / Value         | Usage                                             |
| :-------------------------- | :-------------------- | :------------------------------------------------ |
| `light`                     | `#fcfcfc`             | Light mode page background                        |
| `dark`                      | `#060606`             | Dark mode page background                         |
| `text-dark` / `text-light`  | `#060606` / `#fcfcfc` | Body text default                                 |
| `amber-500` / `amber-200`   | Amber shades          | Section headers, borders, highlights              |
| `orange-500` / `orange-600` | Orange shades         | Primary CTA buttons, timeline dots, hover accents |

### 2. Typography (`tailwind.config.mjs`)

Three fonts are integrated via `@fontsource`:

- **Primary Body & Headings**: `Hanken Grotesk Variable` + `Inter Variable`
- **Display Accents**: `Inder`

### 3. Keyframe Animations (`@midudev/tailwind-animations`)

Classes used across components:

- `animate-fade-in-down` / `animate-fade-in-up` / `animate-fade-in-left` (Entrance transitions)
- `animate-tada` (GitHub badge celebration)
- `animate-sway` (Social icon hover)
- `animate-spin-clockwise` (React icon hover)
- `animate-squeeze` (TypeScript icon hover)
- `animate-dancing` (Tailwind icon hover)
- `animate-swing-drop-in` (JavaSpring icon hover)
- `animate-rubber-band` (Active status indicator dot)

---

## Component Catalog

### Main Layout (`src/layouts/Layout.astro`)

The root HTML shell. Responsible for:

- Injecting SEO tags via `_SEO.astro`.
- Initializing `ClientRouter` for smooth transitions.
- Setting global background gradients and scrollbar styling.
- Running the `IntersectionObserver` for `.reveal` elements.

### Navigation (`src/components/Navigation.astro`)

- Sticky top navigation with backdrop blur (`backdrop-blur-md`).
- Hides automatically when scrolling down; reappears on scroll up.
- Integrates `ChangeLang.astro` for quick language switching.

### Profile / Hero (`src/components/Profile.astro`)

- Editorial book-style presentation with a refined amber accent rule (`border-l-2`) and balanced typographic hierarchy.
- Displays `profile.data.title`, `profile.data.subtitle`, and `profile.data.description` with relaxed reading leading (`leading-relaxed`).
- Action triggers: Refined warm amber glass button ("View My Work" / `#projects`) with `PortfolioIcon` and understated dark/light glass button ("Get In Touch" / `#contact`) with `GmailIcon` and tactile response (`active:scale-[0.98]`).

### Experience Timeline (`src/components/Experience.astro`)

- Vertical gradient timeline line (`from-orange-500 via-amber-500 to-yellow-500`).
- Displays roles, organizations, dates, and bulleted achievements from `src/values/experiences.ts`.
- Summary statistics grid (Projects, Technologies, Repos, Contributions).

### Skills Section (`src/components/Skills.astro`)

- **Interactive Category Tabs**: Segmented filter pill bar (`All`, `Frontend`, `Backend`, `Cloud & DevOps`, `Other & Tools`) with dynamic client-side filtering and smooth transition states.
- **Normalized Categories**:
  1. Frontend Development (React, TypeScript, Angular, TailwindCSS, ShadCN, React Query)
  2. Backend & APIs (Node.js, NestJS, Next.js, Java Spring, GraphQL)
  3. Cloud & DevOps (AWS, Google Cloud, Docker, Vite, Appwrite, SQL Server)
  4. Other Technologies & Tools (Java, C#/.NET, Python, Figma)
- **Responsive Compact Grid**: `grid-cols-3 sm:grid-cols-4 md:grid-cols-6` tiles with dark glassmorphism styling, ambient hover glows, and tactile touch feedback (`active:scale-95`).
- Detailed UX audit available at [`docs/SKILLS_UX_UI_ANALYSIS.md`](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/SKILLS_UX_UI_ANALYSIS.md).

### Projects Showcase (`src/components/Projects.astro`)

- Iterates over project items from the Content Layer.
- Parses period-separated descriptions into formatted checkmarks.
- Displays responsive image previews via `astro:assets` `<Picture />`.
- Technology badge list with custom hover animations per technology.
- Action buttons linking to GitHub repository (`Source`) and live URL (`Demo`).

### Contact Form & Channels (`src/components/Contact.astro`)

- Direct contact cards (Email, LinkedIn, GitHub).
- Interactive contact form with status feedback, submit loading state, and Formspree integration point.

### Theme Switcher (`src/components/ToggleDarkLight.astro`)

- Fixed floating button in bottom-right corner.
- Popup menu with options: `Light` / `Dark` / `System`.
- Stores user preference in `localStorage.getItem("theme")`.
- Responds to OS system preference changes via `window.matchMedia`.

### SEO Component (`src/components/_SEO.astro`)

- Generates Open Graph (`og:*`), Twitter Card (`twitter:*`), Canonical URL, and standard `<title>` and `<meta>` tags.

---

## Icon System (`src/components/icons/`)

The repository contains 34 custom `.astro` SVG icons:

```
src/components/icons/
├── AWSIcon.astro         ├── GoogleCloudIcon.astro ├── ReactIcon.astro
├── AngularIcon.astro     ├── GraphQLIcon.astro     ├── ReactQueryIcon.astro
├── AppwriteIcon.astro    ├── JavaIcon.astro        ├── SQLServerIcon.astro
├── CSharpIcon.astro      ├── JavaSpringIcon.astro  ├── ShadcnIcon.astro
├── ComputerIcon.astro    ├── LangIcon.astro        ├── SnapgramLogo.astro
├── DockerIcon.astro      ├── LinkIcon.astro        ├── SunIcon.astro
├── FigmaIcon.astro       ├── LinkedInIcon.astro    ├── TailwindIcon.astro
├── GithubAltIcon.astro   ├── MicrosoftIcon.astro   ├── TypeScriptIcon.astro
├── GithubIcon.astro      ├── MoonIcon.astro        ├── UniversityIcon.astro
├── GmailIcon.astro       ├── NestJSIcon.astro      └── ViteIcon.astro
```

Each icon accepts standard HTML attributes (`class`, `size`, etc.) and renders scalable SVG markup.
