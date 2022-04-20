<p align="center">
  <a href="https://reactjs.org/" target="blank"><img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark-700x235.png" width="320" alt="React Logo" /></a>
</p>
<p align="center">A <a href="https://javascript.com" target="_blank">JavaScript</a> library for building user interfaces.</p>

## Описание
📍 Шаблон для мини-приложений.

- **⚛️ React 18**. Поддержка конкурентного рендеринга и Suspense.
- **⚡️ Vite**. Быстрый и оптимизированный сборщик.
- **❄️ Typescript**. Строгая типизация.
- **🎯 CSS Modules**. Удобное использование CSS.
- **🚀 ESLint & Prettier**. Форматирование кода.
- **📦 Роутер**. `@itznevikat/router` для удобной навигации.
- **🏁 Стейт менеджер**. `@mntm/precoil` в качестве глобального состояния.
- **⛓ VK Bridge**. `@mntm/painless-bridge` как улучшенную альтернативу стандартному.

## Установка
```bash
$ yarn
```

## Запуск
```bash
# development and watch mode
$ yarn dev

# production mode
$ yarn build && yarn serve
```

## Использование с **VK Tunnel**/**Ngrok**/etc.
В `vite.config.ts` в объекте `server` убираем `https`, `host` и `proxy`, добавляем:
```typescript
hmr: {
  clientPort: 443
}
```
Подробнее - https://github.com/vitejs/vite/discussions/5399.

## Лицензия
[MIT](LICENSE)
