import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetAreas from '../actions/GetAreas';
import MealsList from '../components/MealsList';
import FullCategoriesList from '../components/FullCategoriesList';
import GetFullCategories from '../actions/GetFullCategories';

function IndexRoot() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetAreas());
    dispatch(GetFullCategories());
  }, [dispatch]);
  const mealAreas = useSelector(state => state.AreasList);
  const fullMealCategories = useSelector(state => state.FullCategoriesList);
  if (fullMealCategories.loading === true || mealAreas.loading === true) {
    return <div>Loading...</div>;
  }
  if (fullMealCategories.errorMsg !== '' || mealAreas.errorMsg !== '') {
    return (
      <div>
        <h2>An error has occured</h2>
        <p>{fullMealCategories.errorMsg}</p>
        <p>{mealAreas.errorMsg}</p>
      </div>
    );
  }
  return (
    <div>
      <FullCategoriesList list={fullMealCategories.categories} />
      <MealsList title="Areas" data={mealAreas.areas} str="strArea" />
    </div>
  );
}

export default IndexRoot;
