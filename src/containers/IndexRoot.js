import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetCategories from '../actions/GetCategories';
import GetAreas from '../actions/GetAreas';
import MealsList from '../components/MealsList';

function IndexRoot() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetCategories());
    dispatch(GetAreas());
  }, [dispatch]);
  const mealCategories = useSelector(state => state.CategoriesList);
  const mealAreas = useSelector(state => state.AreasList);
  if (mealCategories.loading === true || mealAreas.loading === true) {
    return <div>Loading...</div>;
  }
  if (mealCategories.errorMsg !== '' || mealAreas.errorMsg !== '') {
    return (
      <div>
        <h2>An error has occured</h2>
        <p>{mealCategories.errorMsg}</p>
      </div>
    );
  }
  return (
    <div>
      <MealsList title="Areas" data={mealAreas.areas.meals} str="strArea" />
      <MealsList title="Categories" data={mealCategories.categories.meals} str="strCategory" />
    </div>
  );
}

export default IndexRoot;
