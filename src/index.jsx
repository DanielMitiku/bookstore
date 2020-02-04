import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 1000),
      title: 'fakeTitle1',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'fakeTitle2',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'fakeTitle3',
      category: 'Horror',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
