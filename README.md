# 🔗 Link-in-Bio Tool

> A sleek, modern, and fully customizable link-in-bio page — your own Linktree alternative. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsiegaarjay-hue%2FLink-in-Bio-Tool)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?style=flat-square&logo=framer)

---

## 📸 Screenshot

<!-- Replace with your own screenshot -->
![Link-in-Bio Screenshot](https://via.placeholder.com/600x800/7c3aed/ffffff?text=Link-in-Bio+Preview)

---

## ✨ Features

- 🎨 **Beautiful Design** — Glassmorphism card, gradient backgrounds, modern typography
- 🌗 **Dark / Light Theme** — Toggle with smooth transitions, persisted in localStorage
- 🎬 **Smooth Animations** — Powered by Framer Motion with staggered entrance effects
- 📱 **Mobile-First** — Fully responsive, looks great on any device
- ⚡ **Fast** — Built on Next.js App Router for optimal performance
- 🔧 **Easy to Customize** — Single config file to update all links and profile info
- 🚀 **One-Click Deploy** — Deploy to Vercel in seconds

---

## 🚀 Quick Start

### One-Click Deploy

Click the button below to deploy your own copy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsiegaarjay-hue%2FLink-in-Bio-Tool)

### Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/siegaarjay-hue/Link-in-Bio-Tool.git
   cd Link-in-Bio-Tool
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔧 Customization

All configuration lives in a single file: **`src/config/site.ts`**

### Profile

```ts
profile: {
  name: "Your Name",
  username: "@yourhandle",
  bio: "Your bio goes here ✨",
  avatarUrl: "https://your-avatar-url.com/photo.jpg", // or undefined for initials
},
```

### Links

```ts
links: [
  {
    title: "My Website",
    url: "https://example.com",
    icon: FiGlobe,
    description: "Check out my work",
  },
  // Add more links...
],
```

### Social Media

```ts
socials: [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: FaGithub,
  },
  // Add more socials...
],
```

Available icons come from [react-icons](https://react-icons.github.io/react-icons/) — you can use any icon from the `Fi` (Feather) or `Fa` (Font Awesome) sets.

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & theme variables
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page component
├── components/
│   ├── Avatar.tsx        # Profile avatar with initials fallback
│   ├── LinkCard.tsx      # Animated link button
│   ├── SocialLinks.tsx   # Social media icon row
│   └── ThemeToggle.tsx   # Dark/light mode toggle
└── config/
    └── site.ts           # ⚙️ All your customization goes here!
```

---

## 📄 License

MIT — feel free to use this for your own link-in-bio page!

---

Made with ❤️ by [Link-in-Bio Tool](https://github.com/siegaarjay-hue/Link-in-Bio-Tool)
