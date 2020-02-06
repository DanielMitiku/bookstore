import React from 'react';
import PropTypes from 'prop-types';
import categories from '../utils';

const CategoryFilter = ({ onFilterChange }) => (
  <select onChange={e => onFilterChange(e.target.value)}>
    <option key="All" value="All">All</option>
    {categories.map(cat => (
      <option key={cat} value={cat}>{cat}</option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
