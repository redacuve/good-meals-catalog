import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GetSearch from '../actions/GetSearch';
import Loading from '../components/Loading';
import Error from '../components/Error';

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
    return <Loading />;
  }
  if (meals.errorMsg !== '') {
    return <Error errors={[meals.errorMsg]} />;
  }
  if (meals.meals === null) {
    return (
      <div className="p1">
        <h2 className="text-orange-900 font-bold text-2xl">
          Oops No Results for:&nbsp;
          <i className="fas fa-ban" />
          &nbsp;
          <span className="font-extrabold underline italic">{term}</span>
        </h2>
        <p className="text-orange-900 text-2xl">Please try another search.</p>
      </div>
    );
  }
  return (
    <div className="p-1">
      <h2 className="text-indigo-900 font-bold text-2xl">
        Showing Result for:&nbsp;
        <span className="font-extrabold underline italic">{term}</span>
      </h2>
      <h3 className="text-orange-900 font-bold">
        {meals.meals.length}
        &nbsp;Result(s)
      </h3>
      <div className="flex flex-wrap items-center">
        {meals.meals.map(meal => (
          <Link
            to={`/meal/${meal.idMeal}`}
            key={meal.strMeal}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-1 mb-2 shadow border rounded bg-white mb-5 cursor-default"
          >
            <div className="w-full">
              <img
                className="w-full"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
            </div>
            <div className="w-full bg-orange-300">
              <h3 className="font-bold text-2xl pl-3">{meal.strMeal}</h3>
            </div>
            <div className="w-full flex justify-center mt-3">
              <div className="bg-transparent hover:bg-orange-500 text-orange-700 text-sm font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded cursor-pointer">
                View Meal
              </div>
            </div>
          </Link>
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
