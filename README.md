# Astro Persona

A modern, responsive portfolio and persona website template built with [Astro](https://astro.build), [React](https://react.dev), and [Tailwind CSS v4](https://tailwindcss.com).

## 🚀 Tech Stack

- **Framework**: [Astro v7](https://astro.build)
- **UI Library**: [React v19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev) & [Unplugin Icons](https://github.com/unplugin/unplugin-icons)
- **Formatter & Linter**: [Biome](https://biomejs.dev)
- **Package Manager**: [pnpm](https://pnpm.io)

## 📁 Project Structure

```text
.
├── public/              # Static assets (favicons, OG image, robots.txt)
├── src/
│   ├── assets/          # Project images and SVG assets
│   ├── components/      # Astro and React UI components
│   │   └── ui/          # Reusable UI primitives (Button, Card, Calendar, etc.)
│   ├── layouts/         # Layout templates (BaseLayout.astro)
│   ├── lib/             # Utilities and site configuration (site.config.ts)
│   ├── pages/           # Astro page routes (index.astro, 404.astro)
│   └── styles/          # Global styles (global.css with Tailwind CSS v4)
├── astro.config.ts      # Astro configuration file
├── biome.jsonc          # Biome formatting and linting configuration
└── package.json         # Project metadata and dependencies
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have Node.js installed and [pnpm](https://pnpm.io) available on your machine.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/area44/astro-persona.git
cd astro-persona
pnpm install
```

### Development

Run the local development server:

```bash
pnpm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser to view the application.

## 📜 Available Scripts

- `pnpm run dev`: Starts the local development server.
- `pnpm run build`: Builds the static site for production into the `dist/` directory.
- `pnpm run preview`: Previews the production build locally.
- `pnpm run check`: Runs Biome check and auto-fixes formatting/linting issues.
- `pnpm run format`: Formats the codebase using Biome.
- `pnpm run lint`: Lints the codebase using Biome.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
