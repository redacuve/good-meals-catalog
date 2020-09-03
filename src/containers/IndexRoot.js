import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetAreas from '../actions/GetAreas';
import MealsList from '../components/MealsList';
import FullCategoriesList from '../components/FullCategoriesList';
import GetFullCategories from '../actions/GetFullCategories';
import Filter from '../components/Filter';
import { changeAreasFilter } from '../actions/ChangeAreasFilter';

function IndexRoot() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetAreas());
    dispatch(GetFullCategories());
  }, [dispatch]);

  const fullMealCategories = useSelector(state => state.FullCategoriesList);
  const categoriesMeals = [];
  const categoriesMealsFiltered = [];
  fullMealCategories.categories.map(m => categoriesMeals.push(m.strCategory));

  const mealAreas = useSelector(state => state.AreasList);
  const areasFilter = useSelector(state => state.AreasFilter.filter);
  const areasMeals = [];
  mealAreas.areas.map(m => areasMeals.push(m.strArea));
  let areasMealsFiltered = [];
  if (areasFilter !== '') {
    areasMealsFiltered = mealAreas.areas.filter(m => m.strArea === areasFilter);
  } else {
    areasMealsFiltered = [...mealAreas.areas];
  }
  const handleAreasFilterChange = filter => dispatch(changeAreasFilter(filter));

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
      <Filter
        categories={categoriesMeals}
        changeFilter={a => console.log(a)}
      />
      <FullCategoriesList list={fullMealCategories.categories} />
      <Filter
        categories={areasMeals}
        changeFilter={handleAreasFilterChange}
      />
      <MealsList title="Areas" data={areasMealsFiltered} str="strArea" />
    </div>
  );
}

export default IndexRoot;
