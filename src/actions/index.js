import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './actionTypes';

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

function changeFilter(payload) {
  return {
    type: CHANGE_FILTER,
    payload,
  }
}

export { createBook, removeBook, changeFilter };
