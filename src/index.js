import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import reducer from './reducers';
import saga from './sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

let sagaTask = sagaMiddleware.run(saga);

const render = Component => {
  ReactDom.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Component} />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });

  module.hot.accept('./reducers', () => {
    store.replaceReducer(reducer);
  });

  module.hot.accept('./sagas', () => {
    sagaTask.cancel();
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(saga);
    });
  });
}
