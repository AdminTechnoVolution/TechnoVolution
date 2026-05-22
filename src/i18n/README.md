# Internationalization (i18n)

## Supported languages

- `en` — English (fallback)
- `es` — Spanish
- `pt` — Portuguese
- `it` — Italian
- `fr` — French
- `de` — German

The app detects the browser language via `Accept-Language` and redirects to `/<locale>/...`. If the language is not supported, it falls back to **English**.

Users can override the language with the header switcher (stored in the `NEXT_LOCALE` cookie).

## Add a new language

1. Copy `src/i18n/locales/en.json` to `src/i18n/locales/<code>.json` (e.g. `ja.json`).
2. Translate all string values keeping the same keys.
3. Register the locale in `src/i18n/locale-loaders.ts`:
   ```ts
   import ja from "./locales/ja.json";
   // add `ja` to the `dictionaries` object
   ```
4. Optionally add a label in `src/i18n/config.ts` → `localeLabels`.

Routes are locale-prefixed: `/es/nosotros`, `/en/productos`, etc.
