import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

function BooksList({
  books, removeBook, changeFilter, filter,
}) {
  const handleFilterChange = filter => changeFilter(filter);
  const renderBooks = () => (
    filter === 'All'
      ? books
        .map(book => <Book key={book.id} book={book} removeBook={removeBook} />)
      : books
        .filter(book => book.category === filter)
        .map(book => <Book key={book.id} book={book} removeBook={removeBook} />)
  );

  return (
    <div>
      <CategoryFilter onFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {renderBooks()}
        </tbody>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => (state);
const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
