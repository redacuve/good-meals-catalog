import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GetMeal from '../actions/GetMeal';
import Loading from '../components/Loading';
import Error from '../components/Error';

function SingleMeal(props) {
  const {
    match: {
      params: { id },
    },
  } = props;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetMeal(id));
  }, [dispatch, id]);
  const meal = useSelector(state => state.Meal);
  if (meal.loading === true) {
    return <Loading />;
  }
  if (meal.errorMsg !== '') {
    return <Error errors={[meal.errorMsg]} />;
  }
  const ingredients = [];
  for (let i = 1; i < 21; i += 1) {
    if (
      meal.meal[`strIngredient${i}`] !== ''
      && meal.meal[`strIngredient${i}`] !== null
    ) {
      ingredients.push(
        `${meal.meal[`strMeasure${i}`]} - ${meal.meal[`strIngredient${i}`]}`,
      );
    }
  }
  return (
    <div className="p-1 shadow border rounded bg-white max-w-screen-lg mx-auto">
      <div className="w-full bg-indigo-300">
        <h2 className="font-bold text-2xl pl-3">{meal.meal.strMeal}</h2>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="mb-2 sm:w-2/3 md:w-1/2 mx-auto md:p-1">
          <img
            className="w-full"
            src={meal.meal.strMealThumb}
            alt={meal.meal.strMeal}
          />
        </div>
        <div className="mb-2 w-full sm:w-3/4 md:w-1/2 lg:w-2/3 lg:order-3 mx-auto">
          <div className="flex flex-wrap justify-center items-center">
            <Link to={`/area/${meal.meal.strArea}`} className="w-1/3 pr-1">
              <img
                className="w-full"
                src={`/assets/img/${meal.meal.strArea}.jpg`}
                alt={meal.meal.strArea}
              />
              <div className="w-full bg-orange-300 text-center">
                <p className="font-bold">{meal.meal.strArea}</p>
              </div>
            </Link>
            <div className="w-2/3">
              <p className="bg-gray-800 text-white font-bold">Source:</p>
              <div className="overflow-x-auto">
                <a
                  className="cursor-pointer text-underline text-blue-700 text-sm md:text-base lg:text-lg"
                  href={meal.meal.strSource}
                >
                  {meal.meal.strSource}
                </a>
              </div>
              <p className="bg-gray-800 text-white font-bold">
                Watch on Youtube:
              </p>
              <div className="overflow-x-auto">
                <a
                  className="cursor-pointer text-underline text-blue-700 text-sm md:text-base lg:text-lg"
                  href={meal.meal.strYoutube}
                >
                  {meal.meal.strYoutube}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-2 w-full lg:order-2 lg:w-1/2">
          <div className="w-full bg-indigo-300 lg:mt-1">
            <h3 className="font-bold text-2xl pl-3">Ingredients:</h3>
          </div>
          <div>
            <ul className="px-3 md:text-lg lg:text-xl">
              <li className="pl-1 bg-orange-300">
                <span className="font-bold">Measure - Ingredient</span>
              </li>
              {ingredients.map((e, i) => (
                // eslint-disable-next-line
                <li className="pl-1 text-gray-800" key={i}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full bg-indigo-300">
          <h3 className="font-bold text-2xl px-3">Instructions:</h3>
        </div>
        <p className="whitespace-pre-line text-lg lg:text-2xl text-gray-800 pl-3">
          {meal.meal.strInstructions}
        </p>
      </div>
    </div>
  );
}

SingleMeal.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleMeal;
