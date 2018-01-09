# Electron <> Svelte

A quick starter kit for building [electron](https://electronjs.org/) apps with [Svelte.js](https://svelte.technology).

## Getting Started

Clone this repository:

```bash

# download
git clone https://github.com/sjones6/electron-svelte.git your-project
cd your_project

# get rid of the git repo
rm -rf .git

# install dependencies (or `npm install`)
yarn
```

## Development

Start the build process: `npm run dev`.

**Warning**: This will likely not work on windows due to the use of `child_process.spawn`. PRs welcome to fix this.

This will start a watcher process for the Webpack build and an electron app, which will reload the application on file change.

## Testing

**Renderer**

Renderer tests are run using `karma`. Eventually, we'll be able to use `electron-mocha` or similar to run the tests but `karma` allows the runtime in Chrome/Chromium and will work for the moment.

Test files can be found in `test/unit/renderer`.

Run the tests with `npm run test:r` or `npm run test:renderer`.

**Main**

Main process tests are run using `electron-mocha`.

Test files can be found in `test/unit/main`.

Run the tests with `npm run test:main`