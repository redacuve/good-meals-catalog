import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GetArea from '../actions/GetArea';
import Loading from '../components/Loading';
import Error from '../components/Error';

function CategoryList(props) {
  const {
    match: {
      params: { term },
    },
  } = props;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetArea(term));
  }, [dispatch, term]);
  const meals = useSelector(state => state.AreaList);
  if (meals.loading === true) {
    return <Loading />;
  }
  if (meals.errorMsg !== '') {
    return <Error errors={[meals.errorMsg]} />;
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
