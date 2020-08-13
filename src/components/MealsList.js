import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MealsList(props) {
  const { title, data, str } = props;
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map(meal => (
          <ul key={meal[str]}>
            <h2>{meal[str]}</h2>
            <Link to={`/category/${meal[str]}`}>View Category</Link>
          </ul>
        ))}
      </ul>
    </div>
  );
}

MealsList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  str: PropTypes.string.isRequired,
};

export default MealsList;
