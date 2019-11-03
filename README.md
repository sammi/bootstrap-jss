bootstrap-jss
=============
Build JSS components for Bootstrap by JSS

[![CircleCI](https://circleci.com/gh/sammi/bootstrap-jss.svg?style=svg)](https://circleci.com/gh/sammi/bootstrap-jss)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1135d152405baa4e466b/test_coverage)](https://codeclimate.com/github/sammi/bootstrap-jss/test_coverage)
<span class="badge-npmversion"><a href="https://npmjs.com/package/bootstrap-jss" title="View this project on NPM"><img src="https://img.shields.io/npm/v/bootstrap-jss.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.com/package/bootstrap-jss" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/bootstrap-jss.svg" alt="NPM downloads" /></a></span>

# Checkout the live demo!

https://sammi.github.io/bootstrap-jss

# Developer quick start
## Install Visusl Studio Code Extensions

* Jest
* ESLint
* Babel ES6/ES7
* Jest Snippets
* EditorConfig for VS Code
* Code Outline
* Badges

## Install latest yarn version
```bash
  npm install yarn -g
```

## Test Driven Development

1. Start the test watcher
```bash
yarn
yarn test:watch
```
2. Change and save code, make sure all tests are passing

3. When test failed, click "Debug" above each Jest Unit test, step into the source code.


## Setup the localhost StoryBook
 ```bash
 cd stories
 yarn
 yarn start
 ```
Check out http://localhost:9001

## Publish npm module
```bash
 npm login
 npm pack
 npm publish bootstrap-jss-x.x.x.tgz
```

