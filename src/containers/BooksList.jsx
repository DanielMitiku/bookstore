import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

function BooksList( { books } ) {
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {books.map((book) => <Book book={book} />)}
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {books: state.books};
}
export default connect(mapStateToProps)(BooksList);
