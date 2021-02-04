# graphqlzero-photo-search

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg)](https://github.com/airbnb/javascript)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f6efae01-90ef-4c8e-8d81-cc6b1abbf952/deploy-status)](https://app.netlify.com/sites/quirky-beaver-0902f0/deploys)

**Welcome to graphql-photo-search!**

This project is a FE only SPA in React and TypeScript, interacting with [GraphQLZero](https://graphqlzero.almansi.me/) to search and display photos.

- Minimal UI using Tailwind CSS, _mostly_ mobile friendly
- React 17 and TypeScript 4
- Deployed on Netlify (see deployment section)

## Development

Clone the repository:

```bash
git clone git@github.com:davidvuong/graphqlzero-photo-search.git
```

Install dependencies and configure your local environment:

```bash
yarn
yarn run build:css
```

## Testing

There aren't many tests, only core functionality tested.

```bash
> yarn test

PASS  src/components/SearchBar.test.tsx
PASS  src/App.test.tsx
PASS  src/components/SearchResultsList.test.tsx
PASS  src/utils/getPaginationPages.test.ts

Test Suites: 4 passed, 4 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        3.297 s, estimated 4 s
```

## Deployment

This project has been deployed and hosted via [Netlify](https://www.netlify.com/). It can be found here:

https://quirky-beaver-0902f0.netlify.app/
