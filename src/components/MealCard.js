import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MealCard(props) {
  const { color, meal } = props;
  return (
    <Link
      to={`/meal/${meal.idMeal}`}
      key={meal.strMeal}
      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-1 mb-2 shadow border rounded bg-white mb-5 cursor-default"
    >
      <div className="w-full">
        <img className="w-full" src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className={`w-full bg-${color}-300`}>
        <h3 className="font-bold text-2xl pl-3">{meal.strMeal}</h3>
      </div>
      <div className="w-full flex justify-center mt-3">
        <div className={`bg-transparent hover:bg-${color}-500 text-${color}-700 text-sm font-semibold hover:text-white py-2 px-4 border border-${color}-500 hover:border-transparent rounded cursor-pointer`}>
          View Meal
        </div>
      </div>
    </Link>
  );
}

MealCard.propTypes = {
  color: PropTypes.string.isRequired,
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MealCard;
