import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <>
      <nav className="nav">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      </nav>
      <div className="container">
        <BooksList />
        <BooksForm />
      </div>
    </>
  );
}

export default App;
