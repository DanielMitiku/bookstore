import React from 'react';

function BooksForm() {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];
  return (
    <form>
      <input type='text' name='title' />
      <select>
        {categories.map(cat => (
          <option>{cat}</option>
        ))}
      </select>
      <input type='sumbit' name='title' />
    </form>
  );
}

export default BooksForm;
