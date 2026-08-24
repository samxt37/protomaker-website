# Protomaker Website

Custom 3D-printed accessories shop — product catalog with WhatsApp ordering.

## Features

- Trilingual site (English, French, Arabic)
- Product image slideshows
- WhatsApp order buttons
- Easy price editing in `src/data/prices.js`

## Quick start

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

## Edit prices

Open **`src/data/prices.js`** and change the values, then save and refresh the browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/data/prices.js       ← change prices here
src/data/products.js     ← products, images, categories
src/data/translations.js ← text + WhatsApp number
public/assets/images/    ← product photos
```

## Tech stack

- React + Vite
- React Router
