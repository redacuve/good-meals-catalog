import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import GetMeal from '../actions/GetMeal';

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
    return <div>Loading...</div>;
  }
  if (meal.errorMsg !== '') {
    return (
      <div>
        <h2>An error has occured</h2>
        <p>{meal.errorMsg}</p>
      </div>
    );
  }
  const ingredients = [];
  for (let i = 1; i < 21; i += 1) {
    if (meal.meal[`strIngredient${i}`] !== '' && meal.meal[`strIngredient${i}`] !== null) {
      ingredients.push(`${meal.meal[`strMeasure${i}`]} - ${meal.meal[`strIngredient${i}`]}`);
    }
  }
  return (
    <div>
      <h2>{meal.meal.strMeal}</h2>
      <div>
        <img src={meal.meal.strMealThumb} alt={meal.meal.strMeal} />
      </div>
      <div>
        <div>
          <img src={`/assets/img/${meal.meal.strArea}.jpg`} alt={meal.meal.strArea} />
          <p>{meal.meal.strArea}</p>
        </div>
        <p>
          Source:
          <a href={meal.meal.strSource}>{meal.meal.strSource}</a>
        </p>
        <p>
          Watch on Youtube:
          <a href={meal.meal.strYoutube}>{meal.meal.strYoutube}</a>
        </p>
      </div>
      <div>
        <h3>Ingredients:</h3>
        <div>
          <ul>
            <li>Measure - Ingredient</li>
            {
            ingredients.map((e, i) => (
              // eslint-disable-next-line
              <li key={i}>{e}</li> 
            ))
          }
          </ul>

        </div>
      </div>
      <div>
        <h3>Instructions:</h3>
        <p className="whitespace-pre-line">{ meal.meal.strInstructions }</p>
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
