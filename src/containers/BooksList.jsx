import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import PropTypes from 'prop-types';

function BooksList({ books }) {
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map(book => <Book book={book} />)}
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => {
  return { books: state.books };
};
export default connect(mapStateToProps)(BooksList);
