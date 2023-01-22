<div align="center">

# 📝 next-mdx-blog

**Zero-config Next.js + MDX blog with dark mode, RSS, and code highlighting**

_The blog template I used to publish tech notes through 2022-23. Lean, fast, no CMS._

[![Next.js](https://img.shields.io/badge/Next.js-13.x-000?style=for-the-badge&logo=nextdotjs&logoColor=fff)](https://nextjs.org)
[![MDX](https://img.shields.io/badge/MDX-2.x-1B1F24?style=for-the-badge&logo=mdx&logoColor=fff)](https://mdxjs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-00C853?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

- ✍️ Posts written in **MDX** — markdown + React components
- 🌗 Dark mode with `prefers-color-scheme` + manual override
- ⚡ Static generation — every page pre-rendered at build time
- 🎨 Syntax highlighting via Shiki (zero runtime cost)
- 📡 Auto-generated RSS feed
- 🔍 SEO meta + OpenGraph image generation per post
- 📊 Reading time estimation
- 🏷️ Tag-based filtering and archive page

## 🚀 Run locally

```bash
git clone https://github.com/hii24/next-mdx-blog.git
cd next-mdx-blog
npm install
npm run dev
```

Drop a `.mdx` file in `posts/` and it shows up automatically on the index.

## 📝 Sample post

```mdx
---
title: "Why Decimal.js for money in JavaScript"
date: "2022-11-04"
tags: ["javascript", "fintech"]
---

JavaScript's `Number` is a 64-bit float. That's fine for sensors but
absolutely catastrophic for money. Here's why:

```js
0.1 + 0.2 // → 0.30000000000000004
```

<Callout type="warning">
  Never use floats for money. Use `Decimal.js` or store cents as integers.
</Callout>
```

## 🧠 Why I built it

I tried Medium, dev.to, Hashnode — each had something I didn't like (paywalls, ads, weird code blocks). Eventually I just built a Next.js + MDX blog. ~150 lines of config, pure markdown content, no CMS to maintain.

This is the template. Strip out my posts in `posts/`, add yours.

## 🛠️ Tech notes

- **Framework**: Next.js 13 with `app/` router (was `pages/` originally — migrated in Mar 2023)
- **Content**: MDX 2 with `remark-gfm` + custom Callout component
- **Highlighting**: Shiki (build-time, zero JS shipped)
- **Styling**: CSS modules + custom properties for theming
- **Deploy**: Vercel (one-click)

## 📜 License

MIT
