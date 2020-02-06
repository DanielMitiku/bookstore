import { createStore } from 'redux';
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
  filter: 'All',
};

const store = createStore(rootReducer, initialState);


export default store;
