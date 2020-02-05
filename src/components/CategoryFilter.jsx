import React from 'react';
import PropTypes from 'prop-types';
import categories from '../utils';

const CategoryFilter = ({ onFilterChange }) => (
  <div className="filter">
    <p>Filter By:
      <select className="filterSelect" onChange={e => onFilterChange(e.target.value)}>
        <option key="All" value="All">All</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </p>
  </div>
);

CategoryFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
