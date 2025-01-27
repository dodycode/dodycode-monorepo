# Dodycode Monorepo

A customized version of the [T3 Stack template](https://create.t3.gg/) that I use in my daily work.

Feel free to fork and customize it to suit your needs.

## What's Inside?

This turborepo uses [pnpm](https://pnpm.io) as the package manager. It includes the following packages and applications:

### Apps and Packages

#### Apps

- `apps/nextjs`: Next.js 15 with React 19.

You can add any other apps here, such as `apps/www` for a landing page or `apps/docs`.

#### Internal Libraries

- `internal/api`: tRPC v11 router definitions and API endpoints.
- `internal/auth`: Authentication using NextAuth.js v5.
- `internal/db`: Type-safe database access using Drizzle ORM.
- `internal/utilities`: Shared utilities for internal packages, such as Services and Repository classes.

#### UI and Tooling

- `packages/ui`: Shared React components built on shadcn/ui.
- `tooling/tailwind`: Shared Tailwind CSS configuration.
- `tooling/typescript`: Base TypeScript configurations.
- `tooling/eslint`: Shared ESLint configuration.
- `tooling/prettier`: Shared Prettier configuration.

Each package is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo comes with additional tools already set up for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) for code linting.
- [Prettier](https://prettier.io/) for code formatting.
- My custom Prettier configuration located at `.vscode/settings.json`.

### Getting Started

Follow the instructions below to get started.

#### Setup

1. Create a `.env` file next to `.env.example`.
2. Fill in the `.env` file with all required environment variables.
3. Run `pnpm dev` to start the development server.

#### Build

To build all apps and packages, run the following command:

```bash
cd my-turborepo
pnpm run build
```

### New Package

To add a new package, simply run `pnpm turbo gen init` in the monorepo root. This command will prompt you for a package name and ask if you want to install any dependencies for the new package (you can also do this manually later).

The generator sets up the `package.json`, `tsconfig.json`, and an `index.ts`, as well as configuring all the necessary tooling for your package, such as formatting, linting, and type checking. Once the package is created, you're ready to build it out.

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cached artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching, you will need an account with Vercel. If you don't have an account, you can [create one](https://vercel.com/signup). After that, enter the following commands:

```bash
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
