import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

function createBook(payload) {
  return {
    type: CREATE_BOOK,
    payload,
  };
}

function removeBook(payload) {
  return {
    type: REMOVE_BOOK,
    payload,
  };
}

export { createBook, removeBook };
