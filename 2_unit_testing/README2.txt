<p align="center">
  <a href="https://badge.fury.io/js/jest">
    <img src="https://badge.fury.io/js/jest.svg" alt="npm version">
  </a>
  <a href="https://github.com/facebook/jest/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Jest is released under the MIT license." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=fbjest">
    <img src="https://img.shields.io/twitter/follow/fbjest.svg?style=social&label=Follow%20@fbjest" alt="Follow on Twitter" />
  </a>
</p>
<p align="center">
  <a href="https://gitpod.io/#https://github.com/facebook/jest"><img alt="Gitpod ready-to-code" src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod"></a>
</p>

<!-- A spacer -->
<p>&nbsp;</p>
<h2 align="center">🃏 Delightful JavaScript Testing</h2>

**👩🏻‍💻 Developer Ready**: A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects.

**🏃🏽 Instant Feedback**: Fast, interactive watch mode only runs test files related to changed files.

**📸 Snapshot Testing**: Capture snapshots of large objects to simplify testing and to analyze how they change over time.

<p align="right"><em>See more on <a href="https://jestjs.io">jestjs.io</a></em></p>

## Getting Started

<!-- copied from Getting Started docs, links updated to point to Jest website -->

Install Jest using [`yarn`](https://yarnpkg.com/en/package/jest):

```bash
yarn add --dev jest
```

Or [`npm`](https://www.npmjs.com/package/jest):

```bash
npm install --save-dev jest
```

## Running from command line

This is to Run the integration Tests:

This is to Run the unit Test:
```bash
yarn test -t 'Name of the test' or npm test -t 'Name of the test' 
EX: npm test -- -t 'TC-1 Add cattle info to the database fails with invalid data'
```
If you'd like to learn more about running `jest` through the command line, take a look at the [Jest CLI Options](https://jestjs.io/docs/cli) page.

## Additional Configuration

### Generate a basic configuration file

Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:

```bash
jest --init
```


Jest is [MIT licensed](./LICENSE).
