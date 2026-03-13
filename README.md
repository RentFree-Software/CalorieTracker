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

Copyright © 2026 RentFree-software

This project is open‑source and released under the Apache License, Version 2.0. See the LICENSE file for the full terms. Developed and maintained by RentFree-software. Contributions, bug reports, and feature requests are welcome — please open an issue or pull request in the project repository. This software is provided "as is" without warranties or conditions of any kind (see the Apache 2.0 license for details).

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
