import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store, {history} from "./store/configureStore";


const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
