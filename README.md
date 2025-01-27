# Dodycode Monorepo

My personal T3 Stack template that I mainly used in my daily work. It includes all the necessary tools and configurations to build and deploy a production ready full stack javascript app.

Please feel free to fork and customize it to your needs.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

#### Apps

- `apps/nextjs`: Next.js 15 with React 19.

You can put your any other apps here like `apps/www` for landing page or `apps/docs`.

#### Internal Libraries

- `internal/api`: tRPC v11 router definitions and API endpoints
- `internal/auth`: Authentication using NextAuth.js v5
- `internal/db`: Type-safe database access using Drizzle ORM

#### UI and Tooling

- `packages/ui`: Shared React components built on shadcn/ui
- `tooling/tailwind`: Shared Tailwind CSS configuration
- `tooling/typescript`: Base TypeScript configurations
- `tooling/eslint`: Shared ESLint configuration
- `tooling/prettier`: Shared Prettier configuration

Each package is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting
- My Custom Prettier configuration located at `.vscode/settings.json`

### Getting Started

Please follow the instructions below to get started.

#### Setup

1. Create a `.env` file next to `.env.example`
2. Fill in the `.env` file with all required environment variables.
3. Run `pnpm dev` to start the development server

However, if you want you can use [Infisical](https://infisical.com/docs/documentation/getting-started/introduction) to manage your secrets across the team. You can download my [script here](https://gist.github.com/dodycode/ae279f711795d6e9ccf787b84dedc893) and put it in `tooling/scripts`. Then run it in the monorepo root to generate the `.env`. Don't forget to create a new command in the monorepo root `package.json` to run the script.

More details on Infisical CLI can be found [here](https://infisical.com/docs/cli/usage).

#### Build

To build all apps and packages, run the following command:

```bash
cd my-turborepo
pnpm run build
```

### New Package

To add a new package, simply run `pnpm turbo gen init` in the monorepo root. This will prompt you for a package name as well as if you want to install any dependencies to the new package (of course you can also do this yourself later).

The generator sets up the package.json, tsconfig.json and a index.ts, as well as configures all the necessary configurations for tooling around your package such as formatting, linting and typechecking. When the package is created, you're ready to go build out the package.

# IMPORTANT NOTE

When you add new internal packages that not meant to run with react server components, make sure to also add them in the `serverExternalPackages` array in `next.config.js`

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
cd my-turborepo
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

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
