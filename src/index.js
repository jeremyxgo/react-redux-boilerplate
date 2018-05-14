import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { persistReducer, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';
import App from './containers/App';
import reducers from './reducers';
import saga from './sagas';

const persistConfig = { key: 'root', version: 1, storage };
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const reducer = persistReducer(persistConfig, reducers);
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(saga);

const render = Component => {
  ReactDom.render(
    <Provider key={Math.random()} store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Route path="/" component={Component}/>
        </Router>
      </PersistGate>
    </Provider>,
    document.getElementById('app-root')
  );
};

render(App);
