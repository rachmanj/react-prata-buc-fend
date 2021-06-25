import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import { Provider } from 'react-redux';
import ReduxStore from './store';

import 'resources/styles/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
