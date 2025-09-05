# Portfolio 2025

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind Css
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Formatting**: Prettier
- **Containerization**: Docker
- **Internationalization**: Custom i18n configuration
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions (Build & Push Docker to ECR)

## Folder Structure

src
├── app
│ ├── [locale] # Locale-specific pages
│ │ ├── about # About page
│ │ ├── contact # Contact page
│ │ └── portfolio # Portfolio page
├── components
│ ├── AboutScreen # Components for the About page
│ ├── common # Shared components like LinkButton, PageHeader, etc.
│ ├── ui # UI-specific components like button, dialog, etc.
├── configs
│ ├── i18n # Internationalization configurations
├── constants # Application constants
├── lib # Utility functions
├── locales
│ ├── en # English translations
│ ├── ja # Japanese translations
├── providers # Context providers like ThemeProvider
├── styles # Global CSS files
├── types # TypeScript type definitions

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/[locale]/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
