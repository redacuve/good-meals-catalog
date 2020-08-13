import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import './assets/css/index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
