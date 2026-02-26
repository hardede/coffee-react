# Tailwind migration plan for coffee-react

## Почему миграция не выполнена мгновенно

В текущем окружении установка зависимостей для Tailwind блокируется политикой registry (HTTP 403 на `autoprefixer`/`sass`), поэтому автоматическая интеграция через npm сейчас недоступна.

## Что нужно для полноценной миграции

1. Разблокировать npm registry для пакетов:
   - `tailwindcss`
   - `postcss`
   - `autoprefixer`
   - `sass` (или полностью убрать SCSS до миграции)
2. Инициализировать Tailwind конфиг (`tailwind.config.js`, `postcss.config.js`).
3. Добавить `@tailwind base; @tailwind components; @tailwind utilities;` в глобальный CSS.
4. Мигрировать компоненты поэтапно (см. ниже) и удалить SCSS импорты.

## Рекомендованный порядок миграции файлов

### Этап 1 (ядро, layout)
- `src/App.js`
- `src/components/Header/Header.jsx`
- `src/components/Footer/Footer.jsx`
- `src/components/Menu/Menu.jsx`

### Этап 2 (e-commerce flow)
- `src/components/Offers/Card/Card.jsx`
- `src/components/Drawer/Drawer.jsx`
- `src/pages/OrdersPage/Orders.jsx`

### Этап 3 (контент)
- `src/components/Hero/Hero.jsx`
- `src/components/News/News.jsx`
- `src/components/Gallery/Gallery.jsx`
- `src/components/Follow/Follow.jsx`
- `src/components/Info/Info.jsx`

### Этап 4 (cleanup)
- удалить `.scss`/`.module.scss`
- заменить на utility-классы tailwind
- убрать `node-sass` и любые sass-only зависимости

## Definition of Done

- проект собирается (`npm run build`) без `node-sass`
- все SCSS импорты удалены
- визуально ключевые страницы сопоставимы с текущим UI
- базовые smoke-тесты проходят
