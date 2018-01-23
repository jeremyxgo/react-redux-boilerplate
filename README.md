# React SPA Boilerplate

> A boilerplate for building React single-page application.

## Features

* Core - [React](https://reactjs.org)
* State Management - [Redux](https://redux.js.org)
* State Persistence - [Redux Persist](https://github.com/rt2zz/redux-persist)
* Side Effects Handling - [Redux-Saga](https://redux-saga.js.org)
* Routing - [React Router](https://reacttraining.com/react-router)
* Next Generation JavaScript - [Babel](https://babeljs.io)
* HMR - [React Hot Loader](http://gaearon.github.io/react-hot-loader)
* CSS-in-JS - [styled-components](https://www.styled-components.com)
* Code Bundler - [Webpack](https://webpack.js.org)
* Testing - [Jest](https://facebook.github.io/jest), [Enzyme](http://airbnb.io/enzyme)

## Usage

Setup:

```bash
# clone the repo
$ git clone https://github.com/jeremyxgo/react-spa-boilerplate.git your-project-name

# install dependencies
cd your-project-name
yarn install
```

Configure Webpack:
```bash
# for development
$ cp webpack.config.example.js webpack.config.dev.js

# for production
$ cp webpack.config.example.js webpack.config.prod.js
```

Output bundle:
```bash
# for development
$ yarn run build:dev

# for production
$ yarn run build
```

Run tests:
```bash
# run all tests
$ yarn test

# watch files for changes and rerun tests
$ yarn run test:watch
```

Start dev server:
```bash
$ yarn start
```
Now the app is running at `http://{webpackDevServerHost}:{webpackdevServerPort}`


## License

MIT
