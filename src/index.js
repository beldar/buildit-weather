import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');

render(
  <Provider store={configureStore()}>
      <div>
        <App />
      </div>
  </Provider>,
  target
);

registerServiceWorker();
