import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from './reducers';
import Root from './components/Root';

import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(todoApp, composeEnhancers(applyMiddleware(logger)));

// let store = createStore(todoApp)

render(<Root store={store} />, document.getElementById('root'));

registerServiceWorker();
