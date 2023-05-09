# Getting started with X-Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Set up environment

Before installing the dependencies and running start the project, follow the next steps:

1. Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) in case of not have it
2. Run `nvm install && nvm use && node -v` to use the node version defined on `.nvmrc` file
3. Run `yarn` to install all the node dependencies

## Available Scripts

In the project directory, you can run:

- Run `yarn start` to run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Run `yarn test` to run all tests.
- Run `yarn build` to create a production build.
- Run `yarn lint` to check the lint.
- Run `yarn lint:fix` to fix all the lint issues and format with eslint.
- Run `yarn storybook` to run the storybook.

## Basic structure and configurations

Before read the structure, please read the following [Server components](https://nextjs.org/docs/getting-started/react-essentials#server-components).

```
src/                    // Container to other folders with the source code of the app
  app/
    layout.tsx          // Root layout for all the pages
    page.tsx            // Main page of the app
    main.css            // Styles applied to the layout
    styles.ts           // Styled components used on the main page
  components/
    client/             // Components that use the tags 'use client'
      providers/        // Providers components e.g. ThemeProvider, ReduxProvider, ContextProvider
        index.tsx       // Provider component to include all providers
      ui/               // Components that are being used on the pages or server components
    server/             // Components that are static
  config/               // Configuration files
  constants/            // Global constants
  lib/
  interfaces/           // Global interfaces
  types/                // Declaration types for typescript
  utils/                // Reusable functions
.env                    // Environment variables
package.json            // Deps and workspace scripts
tsconfig.json           // Typescript configuration
README.md               // Docs are important!
```

## Web

### Page structure

Before read this section, please read the following [Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) to understand a base for creating routes.

Each Page must follow the next structure and the name of it must be in `kebab-case`:

```
src/
  app/
    layout.tsx
    page.tsx
    styles.ts
    example-route/
                        // If there is no layout it will apply the layout from `app/layout.tsx`.
      page.tsx          // This page should be access with the url: /example-route
      styles.ts
```

### Component structure

Each component must follow the next structure and the name of it must be in `kebab-case`:

```
src/
  ...
  components/
    ...                     // Can be on the client or server directory
      example/              // Name of the component
        example.stories.ts  // File read by storybook
        index.tsx           // Component logic
        styles.ts           // Styled components
        types.ts            // Types used only on this component
```

## Server

### WIP

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
