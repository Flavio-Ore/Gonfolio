# Development Guidelines & AI Instructions

## Development Environment & Scripts

This repository uses **pnpm** as its primary package manager.

### Common Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local Astro dev server (default port `4321`) |
| `pnpm build` | Runs type checks (`astro check`) and creates static build in `dist/` |
| `pnpm preview` | Starts local web server to preview the built `dist/` directory |
| `pnpm astro` | Runs Astro CLI commands directly |

---

## Engineering Standards

### 1. TypeScript & Type Safety
- **Strict Preset**: The codebase extends `astro/tsconfigs/strictest`.
- **No `any`**: Avoid untyped variables or loose types.
- **Path Aliases**: Use absolute imports configured in `tsconfig.json` (e.g. `import { ui } from "i18n/ui"` rather than relative `../../i18n/ui`).

### 2. Naming Conventions & Self-Documenting Code
- **Explicit Identifiers**: Use descriptive names revealing clear intent (e.g., `experienceIndex`, `activeThemePreference`).
- **Forbidden Names**: Do NOT use single-letter identifiers or vague abbreviations (`x`, `temp`, `data`, `arr`, `val`, `item`, `res`).
- **Casing Standards**:
  - Components: `PascalCase.astro` (e.g., `ToggleDarkLight.astro`)
  - TypeScript Files & Helpers: `camelCase.ts` (e.g., `utils.ts`, `technologies.ts`)
  - Constants: `UPPER_SNAKE_CASE` or `PascalCase` objects (e.g., `LANGUAGES`, `TECHNOLOGIES`)

### 3. Mandatory Function Header Documentation (JSDoc)
Every function, method, and procedure MUST have a structured documentation block placed directly above its signature with the following fields:

```typescript
/**
 * Short concise summary detailing what the unit does and its purpose.
 *
 * @param parameterName - Description of parameter and expected type/format.
 * @returns Description of return value and behavior.
 * @throws Description of any thrown exceptions or key error edge cases handled.
 */
```

---

## Instructions for AI Agents & Automated Modifiers

When tasked with adding features or fixing bugs in this repository, follow these precise procedures:

### Adding a New Project
1. Create a new markdown file in each language folder:
   - `src/content/es-projects/es-[N]-[name].md`
   - `src/content/en-projects/en-[N]-[name].md`
   - `src/content/cs-projects/cs-[N]-[name].md`
   - `src/content/de-projects/de-[N]-[name].md`
2. Ensure the frontmatter satisfies the schema in `src/content.config.ts`:
   - `name`, `description`, `tech` (using values in `src/values/technologies.ts`), `github`, `demo`, `cover`, `imageAlt`.
3. If new technologies are introduced:
   - Add the key to `TECHNOLOGIES` in `src/values/technologies.ts`.
   - Add the corresponding SVG icon in `src/components/icons/` if not present.
   - Update the `switch` statement in `src/components/Projects.astro` to render the new icon.

### Adding a New UI String / Translation Key
1. Add the key and localized value to all 4 language dictionaries in `src/i18n/ui.ts` (`en`, `es`, `cs`, `de`).
2. Consume the string in Astro components using `t("your.key")`.

### Adding a New Work / Education Milestone
1. Add the entry to all 4 language arrays in `src/values/experiences.ts`.
2. Ensure each entry has `title`, `organization`, `period`, `description`, and `achievements`.

### Modifying Styles or Themes
1. Always maintain dual light/dark mode support by pairing light utilities with `dark:` variants (e.g., `text-amber-600 dark:text-amber-300`).
2. Do not hardcode dark theme colors into the body tag without checking `Layout.astro` and `ToggleDarkLight.astro`.

### Verification Before Completion
Always run `pnpm build` (or `npx astro check`) to verify that all content collections, schemas, imports, and TypeScript types compile cleanly without errors.
