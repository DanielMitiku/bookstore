import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div>
      <nav className="nav">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      </nav>
      <div className="container">
        <div className="booksList">
          <BooksList />
        </div>
        <div className="booksForm">
          <BooksForm />
        </div>
      </div>
    </div>
  );
}

export default App;
