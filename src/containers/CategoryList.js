import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GetCategory from '../actions/GetCategory';
import Loading from '../components/Loading';

function CategoryList(props) {
  const {
    match: {
      params: { term },
    },
  } = props;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetCategory(term));
  }, [dispatch, term]);
  const meals = useSelector(state => state.CategoryList);
  if (meals.loading === true) {
    return <Loading />;
  }
  if (meals.errorMsg !== '') {
    return (
      <div>
        <h2>An error has occured</h2>
        <p>{meals.errorMsg}</p>
      </div>
    );
  }
  return (
    <div>
      Category Search:
      {term}
      <div>
        {
            meals.meals.map(meal => (
              <div key={meal.strMeal}>
                <h3>{meal.strMeal}</h3>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <Link to={`/meal/${meal.idMeal}`}>View Meal</Link>
              </div>
            ))
          }
      </div>
    </div>
  );
}

CategoryList.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      term: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryList;
