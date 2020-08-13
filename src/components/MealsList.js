import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GetCategories from '../actions/GetCategories';

function MealsList() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetCategories());
  }, [dispatch]);
  const mealCategories = useSelector(state => state.CategoriesList);
  if (mealCategories.loading === true) {
    return <div>Loading...</div>;
  }
  if (mealCategories.errorMsg !== '') {
    return (
      <div>
        <h2>An error has occured</h2>
        <p>{mealCategories.errorMsg}</p>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {mealCategories.categories.meals.map(meal => (
          <ul key={meal.strCategory}>
            <h2>{meal.strCategory}</h2>
            <Link to={`/category/${meal.strCategory}`}>View Category</Link>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default MealsList;
