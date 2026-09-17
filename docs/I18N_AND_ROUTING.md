# Internationalization (i18n) & Routing

## Overview

Gonfolio features full internationalization support across 4 languages without requiring runtime localization libraries. Astro's static dynamic routing combined with typed dictionary mappings ensures fast load times and clean URLs.

---

## Supported Locales

| Locale Code | Language | Native Name | Flag | Status             |
| :---------- | :------- | :---------- | :--- | :----------------- |
| `es`        | Spanish  | Español     | 🇵🇪   | **Default Locale** |
| `en`        | English  | English     | 🇺🇸   | Supported          |
| `cs`        | Czech    | Čeština     | 🇨🇿   | Supported          |
| `de`        | German   | Deutsch     | 🇩🇪   | Supported          |

---

## Routing Strategy

### 1. Root Redirection (`src/pages/index.astro`)

The root `/` route serves a minimal HTML file that redirects immediately to `/es/`:

```html
<meta http-equiv="refresh" content="0;url=/es/" />
```

### 2. Localized Dynamic Route (`src/pages/[...lang].astro`)

The catch-all route `[...lang].astro` implements `getStaticPaths()` to pre-render the 4 language versions at build time:

```typescript
export async function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "es" } },
    { params: { lang: "cs" } },
    { params: { lang: "de" } },
  ];
}

export type Params = {
  lang: "en" | "es" | "cs" | "de";
};
```

During build, Astro generates static HTML files for:

- `/es/index.html`
- `/en/index.html`
- `/cs/index.html`
- `/de/index.html`

---

## Translation Architecture

The translation system is divided into two modules:

1. [`src/i18n/ui.ts`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/i18n/ui.ts): Defines the supported language constants, default language, and dictionary key-value pairs.
2. [`src/i18n/utils.ts`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/i18n/utils.ts): Exposes helper functions for retrieving current language and translation lookups.

### UI Dictionary (`src/i18n/ui.ts`)

```typescript
export const LANGUAGES = {
  en: "en",
  es: "es",
  cs: "cs",
  de: "de",
};

export const defaultLang = "es";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    // ...
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    // ...
  },
  cs: {
    /* ... */
  },
  de: {
    /* ... */
  },
} as const;
```

### Utility Functions (`src/i18n/utils.ts`)

#### `getLangFromUrl(url: URL)`

Extracts the language code from a given URL pathname. If the code is missing or not present in `ui`, it falls back to `defaultLang` (`es`).

#### `useTranslations(lang: keyof typeof ui)`

Returns a translation function `t(key)` that looks up the translated string in the selected locale with automatic fallback to `defaultLang`.

```typescript
import { useTranslations } from "i18n/utils";

const t = useTranslations("en");
const aboutLabel = t("nav.about"); // "About"
```

---

## Localized Content Collections

In addition to UI strings, long-form content is localized via dedicated content collection folders matching `${lang}-profile` and `${lang}-projects`:

```
src/content/
├── es-profile/ / es-projects/
├── en-profile/ / en-projects/
├── cs-profile/ / cs-projects/
└── de-profile/ / de-projects/
```

In [`src/pages/[...lang].astro`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/pages/[...lang].astro), content is fetched dynamically based on the current `lang` param:

```typescript
const { lang } = Astro.params as Params;
const profile = await getEntry(`${lang}-profile`, `${lang}-profile`);
const projects = await getCollection(`${lang}-projects`);
```

---

## Language Switcher Component (`ChangeLang.astro`)

The [`ChangeLang.astro`](file:///c:/gon-sudo/DEVEL/Gonfolio/src/components/ChangeLang.astro) component renders flag buttons linking to each locale's URL (`/en/`, `/es/`, `/cs/`, `/de/`). It highlights the currently active language and applies `data-astro-reload` to ensure clean transitions when switching languages.
