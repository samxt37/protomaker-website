# Protomaker Website

Custom 3D-printed accessories shop — product catalog with WhatsApp ordering.

## Features

- Trilingual site (English, French, Arabic)
- Product image slideshows
- WhatsApp order buttons
- Easy price editing in `src/data/prices.js`
- 3D printer hero background

## Quick start (local)

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
public/assets/images/hero/hero-3d-printer.jpg ← hero background
```

## Tech stack

- React + Vite
- React Router

---

## Push to GitHub

### 1. Create a new repository on GitHub

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: **`protomaker-website`** (or any name you like)
3. Keep it **Public** or **Private**
4. Do **NOT** check “Add a README” (you already have one)
5. Click **Create repository**

### 2. Connect and push from your computer

Open a terminal in this project folder and run (replace `YOUR_USERNAME` with your GitHub username):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/protomaker-website.git
git push -u origin main
```

If you already added `origin` before, use:

```bash
git push -u origin main
```

### 3. Enable GitHub Pages (free live website)

After the first push:

1. On GitHub, open your repository
2. Go to **Settings** → **Pages**
3. Under **Build and deployment** → **Source**, choose **GitHub Actions**
4. Wait 1–2 minutes — your site will be live at:

   `https://YOUR_USERNAME.github.io/protomaker-website/`

Every time you push to `main`, the site rebuilds automatically.

### 4. Save future changes

After editing prices or products:

```bash
git add .
git commit -m "Update prices"
git push
```

---

## Important files to edit

| What you want to change | File |
|---|---|
| Prices | `src/data/prices.js` |
| Products & photos | `src/data/products.js` |
| WhatsApp number | `src/data/translations.js` |
| Hero picture | `public/assets/images/hero/hero-3d-printer.jpg` |
