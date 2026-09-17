# Gonfolio Documentation

Welcome to the **Gonfolio** codebase documentation. This documentation suite is engineered to provide both AI assistants and human software engineers with an in-depth, structured, and unambiguous understanding of the portfolio repository.

---

## Documentation Index

| Document                                                                                         | Description                                                                                         |
| :----------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| [System Overview](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/SYSTEM_OVERVIEW.md)                    | High-level overview, project goals, tech stack, and hosting architecture.                           |
| [Architecture & Data Flow](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/ARCHITECTURE.md)              | Directory structure, component hierarchy, layout lifecycle, and client scripts.                     |
| [Internationalization & Routing](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/I18N_AND_ROUTING.md)    | Multilingual routing (`[...lang].astro`), dictionary translations (`ui.ts`), and locale management. |
| [Content Collections & Data](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/CONTENT_COLLECTIONS.md)     | Astro Content Layer API, Zod schemas, Markdown content, and static value datasets.                  |
| [Components & Design System](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/COMPONENTS_AND_UI.md)       | Component catalog, theming (Dark/Light/System), Tailwind styling, and SVG icon library.             |
| [Skills UX/UI Analysis](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/SKILLS_UX_UI_ANALYSIS.md)        | Comprehensive mobile UX/UI audit and modernization strategy for the Skills section.                 |
| [Development & AI Guidelines](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/DEVELOPMENT_GUIDELINES.md) | Package scripts, TypeScript strict rules, JSDoc comment requirements, and AI agent instructions.    |

---

## Rapid Reference Cheat Sheet

### Core Technologies

- **Framework**: [Astro 7.1.0](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS 3.4.17](https://tailwindcss.com/) with [`@midudev/tailwind-animations`](https://github.com/midudev/tailwind-animations)
- **Type Checking**: TypeScript 5.8.2 (`astro/tsconfigs/strictest`)
- **Package Manager**: `pnpm`
- **Hosting Target**: Cloudflare Pages (`https://gonfolio.pages.dev/`)

### Key Entry Points

- **Main Dynamic Route**: [`src/pages/[...lang].astro`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/pages/[...lang].astro)
- **Root Redirect**: [`src/pages/index.astro`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/pages/index.astro) (Redirects to `/es/`)
- **Content Configuration**: [`src/content.config.ts`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/content.config.ts)
- **UI Dictionaries**: [`src/i18n/ui.ts`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/i18n/ui.ts)
- **Main Layout**: [`src/layouts/Layout.astro`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/layouts/Layout.astro)

---

## AI Agent Ingestion Guide

When working on this repository, AI agents should follow this sequence:

1. **Understand Task Scope**: Determine whether the task affects UI components, content markdown, translation dictionaries, or build configurations.
2. **Consult Specific Guides**:
   - For UI / Theme changes: Read [`COMPONENTS_AND_UI.md`](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/COMPONENTS_AND_UI.md).
   - For adding/modifying projects or profile info: Read [`CONTENT_COLLECTIONS.md`](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/CONTENT_COLLECTIONS.md).
   - For translations or locale-specific copy: Read [`I18N_AND_ROUTING.md`](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/I18N_AND_ROUTING.md).
   - For coding standards: Read [`DEVELOPMENT_GUIDELINES.md`](file:///c:/gon-sudo/DEVEL/Gonfolio/docs/DEVELOPMENT_GUIDELINES.md).
3. **Verify Existing Symbols**: Check [`src/values/`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/values) and [`src/components/icons/`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/components/icons) to reuse existing constants and icons before introducing new ones.
