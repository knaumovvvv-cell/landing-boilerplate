# Landing Page Boilerplate

This repository provides a scalable Next.js landing page boilerplate for building multiple landing pages with a shared architecture.

## Project structure

- `app/` — Next.js app router files, root layout, and page entrypoints.
- `components/` — shared React components, organized by layout, sections, and UI primitives.
- `data/` — structured landing page data and content assets.
- `lib/` — reusable helpers, utilities, and feature libraries.
- `public/` — static assets available at runtime.
  - `public/images/` — landing page images.
  - `public/icons/` — icon and SVG assets.
- `styles/` — global styles and theme definitions.

## Usage

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Notes

- No business-specific sections (Hero, Features, FAQ, Pricing, etc.) are included.
- The repository is configured as an architectural starter template for landing pages.
- Add components under `components/` and data under `data/` as the project grows.

## ARCHITECTURE RULES

- `app/` содержит только маршруты, layout и базовые страницы.
- `components/layout/` — shell-компоненты, используемые на уровне страницы.
- `components/sections/` — лендинг-секции, добавляются позже по задаче.
- `components/ui/` — атомарные UI-примитивы и повторно используемые элементы.
- `data/` хранит только данные и контент, не визуальные компоненты.
- `lib/` содержит утилиты, константы и SEO-конфигурации.
- `public/images/` и `public/icons/` содержат только статические ассеты.
- `styles/` содержит глобальные стили и тему, подключенные из `app/layout.tsx`.
- Запрещено создавать бизнес-компоненты до отдельного указания.
- Секция = изолированный модуль.
- Секции не импортируют друг друга.
- Вся композиция секций должна выполняться только через `components/layout/Page.tsx`.
