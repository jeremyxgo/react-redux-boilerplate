# React SPA Boilerplate

> A boilerplate for building React single-page application.

## Features

* Core - [React](https://reactjs.org/)
* State management - [Redux](https://redux.js.org/)
* State persistence - [Redux Persist](https://github.com/rt2zz/redux-persist)
* Routing - [React Router](https://reacttraining.com/react-router/)
* Next generation JavaScript - [Babel](https://babeljs.io)
* HMR - [React Hot Loader](http://gaearon.github.io/react-hot-loader/)
* CSS-in-JS - [styled-components](https://www.styled-components.com)
* Code bundler - [Webpack](https://webpack.js.org)

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

Start dev server:
```bash
$ yarn start
```
Now the app is running at `http://{webpackDevServerHost}:{webpackdevServerPort}`


## License

MIT
