import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GetCategory from '../actions/GetCategory';
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
    dispatch(GetCategory(term));
  }, [dispatch, term]);
  const meals = useSelector(state => state.CategoryList);
  if (meals.loading === true) {
    return <Loading />;
  }
  if (meals.errorMsg !== '') {
    return <Error errors={[meals.errorMsg]} />;
  }
  return (
    <div className="p-1">
      <h2 className="text-indigo-900 font-bold text-2xl">
        Category Search:&nbsp;
        <span className="font-extrabold underline italic">{term}</span>
      </h2>
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
            <div className="w-full bg-indigo-300">
              <h3 className="font-bold text-2xl pl-3">{meal.strMeal}</h3>
            </div>
            <div className="w-full flex justify-center mt-3">
              <div className="bg-transparent hover:bg-blue-500 text-blue-700 text-sm font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">
                View Meal
              </div>
            </div>
          </Link>
        ))}
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
