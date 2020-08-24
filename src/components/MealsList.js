import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MealsList(props) {
  const { title, data, str } = props;
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {data.map(meal => (
          <div key={meal[str]}>
            <h3>{meal[str]}</h3>
            <img src={`/assets/img/${meal[str]}.jpg`} alt={meal[str]} />
            <Link to={`/area/${meal[str]}`}>View Category</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

MealsList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  str: PropTypes.string.isRequired,
};

export default MealsList;
