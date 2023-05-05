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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Basic structure and configurations

```
src/                  // Container to other folders with the source code of the app
  app/
    layout/           // layout for the different pages
    pages/            // page components
      index.ts        // export all the page components
  shared/           // components that are being used on the entire app
    common/         // app components
      index.ts      // export all app components
    ui/             // atomic components
      index.ts      // export all atomic components
  config/             // configuration files
  constants/          // global constants
  interfaces/         // global interfaces
  utils/              // reusable functions
.env                  // environment variables
package.json          // deps and workspace scripts
tsconfig.json         // typescript configuration
README.md             // docs are important
```
