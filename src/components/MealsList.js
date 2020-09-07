import React from 'react';
import PropTypes from 'prop-types';
import IndexCard from './IndexCard';

function MealsList(props) {
  const { title, data, str } = props;
  return (
    <div>
      <h2 className="text-indigo-900 font-bold text-2xl">{title}</h2>
      <div>
        {data.map(meal => (
          <IndexCard key={meal.strArea} color="orange" hasDescription={false} hasImage={false} linkTo="area" meal={meal} str={str} />
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
