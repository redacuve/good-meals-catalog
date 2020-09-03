import React from 'react';
import PropTypes from 'prop-types';

function Filter(props) {
  const { categories, changeFilter } = props;
  return (
    <select onChange={e => changeFilter(e.target.value)}>
      <option value="All">All</option>
      {categories.map(c => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
