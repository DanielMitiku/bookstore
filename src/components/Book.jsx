import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <tr>
    <td className="book-panel">
      <span className="book-cat">{book.category}</span>
      <br />
      <span className="book-title">{book.title}</span>
      <br />
      <button className="book-btn" type="button" onClick={() => removeBook(book)}>Remove</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
