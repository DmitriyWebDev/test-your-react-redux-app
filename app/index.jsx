import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Root from './Root';

const store = configureStore();

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app'),
);
