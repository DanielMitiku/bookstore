import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

function booksReducer(state = [], action) {
  switch (action.type) {
    case CREATE_BOOK: {
        const newState = action.payload;
        newState.id = Math.floor(Math.random() * 1000);
        return [...state, newState];
    }
    case REMOVE_BOOK: {
        state.splice(state.indexOf(action.payload), 1);
        return [...state];
    }
    default:
      return state;
  }
}

export default booksReducer;
