# CaloriTracker

A privacy-first, offline-capable web app for tracking daily calories and macronutrients. Add meals and snacks, create and save custom foods and recipes, set and monitor daily calorie targets, and visualize intake with interactive pie charts. All data is stored locally in the browser (no account required), enabling fully offline use and per-device privacy. Food data is sourced from FRIDA (National Food Institute, DTU, v5.5, 2025). Built with Vue 3, Vite, and includes PWA support for installation and improved offline behavior.

**Highlights**

* Track meals by category (breakfast, lunch, dinner, snacks) and log portions quickly.
* Create and save custom food items and recipe combinations.
* Set daily calorie goals and monitor progress with nutritional summaries.
* Macronutrient breakdowns and visual analytics via pie charts.
* Offline-first: browser LocalStorage + PWA support; no server or account required.
* Food dataset: FRIDA (National Food Institute, Technical University of Denmark).

Can be accesed via the following url: https://rentfree-software.github.io/CalorieTracker/

## About

CaloriTracker helps you monitor your daily food consumption and nutritional goals. The application features:

- **Track Food Items**: Add meals and snacks to breakfast, lunch, dinner, or snack categories
- **Custom Recipes**: Create and save custom recipe combinations
- **Custom Recipes**: Create and save custom food items
- **Calorie Goals**: Set and monitor daily calorie targets
- **Nutritional Summary**: View detailed macronutrient breakdowns, all available food items, imported from Food data (frida.fooddata.dk), version 5.5, 2025, National. Food Institute, Technical University of Denmark
Food data made available by National Food Institute, Technical University of Denmark (frida.fooddata.dk)
- **Visual Analytics**: Pie charts showing meal distribution and caloric intake
- **Local Storage**: All data is saved locally in your browser - no account required

## Technology Stack

- **Frontend Framework**: Vue 3
- **Build Tool**: Vite
- **Progressive Web App**: PWA support (vite-plugin-pwa)
- **Language**: JavaScript (ES modules)
- **Storage**: Browser LocalStorage - this effectivly means that every device is its own user, and that it works fully offline

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
