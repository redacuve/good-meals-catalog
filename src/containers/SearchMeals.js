import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GetSearch from '../actions/GetSearch';

function SearchMeals(props) {
  const {
    match: {
      params: { term },
    },
  } = props;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetSearch(term));
  }, [dispatch, term]);
  const meals = useSelector(state => state.Search);
  if (meals.loading === true) {
    return <div>Loading...</div>;
  }
  if (meals.errorMsg !== '') {
    return (
      <div>
        <h2>An error has occured</h2>
        <p>{meals.errorMsg}</p>
      </div>
    );
  }
  if (meals.meals === null) {
    return (
      <div>
        <h2>
          Oops No Results for:
          {' '}
          <span>{term}</span>
        </h2>
        <p>Please try another search.</p>
      </div>
    );
  }
  return (
    <div>
      <h2>
        Showing Result for:&nbsp;
        <span>{term}</span>
      </h2>
      <div>
        {meals.meals.length}
        {' '}
        Result(s)
      </div>
      <div>
        {meals.meals.map(meal => (
          <div key={meal.strMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <Link to={`/meal/${meal.idMeal}`}>View Meal</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

SearchMeals.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      term: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchMeals;
