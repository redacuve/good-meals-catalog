import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetAreas from '../actions/GetAreas';
import MealsList from '../components/MealsList';
import FullCategoriesList from '../components/FullCategoriesList';
import GetFullCategories from '../actions/GetFullCategories';
import Filter from '../components/Filter';
import { changeAreasFilter } from '../actions/ChangeAreasFilter';
import { changeCategoriesFilter } from '../actions/ChangeCategoriesFilter';
import Loading from '../components/Loading';
import Error from '../components/Error';

function IndexRoot() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetAreas());
    dispatch(GetFullCategories());
  }, [dispatch]);

  const fullMealCategories = useSelector(state => state.FullCategoriesList);
  const categoriesFilter = useSelector(
    state => state.CategoriesFilter.filter,
  );
  const categoriesMeals = [];
  fullMealCategories.categories.map(m => categoriesMeals.push(m.strCategory));
  let categoriesMealsFiltered = [];
  if (categoriesFilter !== '') {
    categoriesMealsFiltered = fullMealCategories.categories.filter(
      m => m.strCategory === categoriesFilter,
    );
  } else {
    categoriesMealsFiltered = [...fullMealCategories.categories];
  }
  const handleCategoriesFilterChange = filter => dispatch(changeCategoriesFilter(filter));

  const mealAreas = useSelector(state => state.AreasList);
  const areasFilter = useSelector(state => state.AreasFilter.filter);
  const areasMeals = [];
  mealAreas.areas.map(m => areasMeals.push(m.strArea));
  let areasMealsFiltered = [];
  if (areasFilter !== '') {
    areasMealsFiltered = mealAreas.areas.filter(
      m => m.strArea === areasFilter,
    );
  } else {
    areasMealsFiltered = [...mealAreas.areas];
  }
  const handleAreasFilterChange = filter => dispatch(changeAreasFilter(filter));

  if (fullMealCategories.loading === true || mealAreas.loading === true) {
    return <Loading />;
  }
  if (fullMealCategories.errorMsg !== '' || mealAreas.errorMsg !== '') {
    return <Error errors={[fullMealCategories.errorMsg, mealAreas.errorMsg]} />;
  }
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 p-5">
        <Filter
          categories={categoriesMeals}
          changeFilter={handleCategoriesFilterChange}
        />
        <FullCategoriesList list={categoriesMealsFiltered} />
      </div>
      <div className="w-full lg:w-1/2 p-5">
        <Filter
          categories={areasMeals}
          changeFilter={handleAreasFilterChange}
        />
        <MealsList title="Areas" data={areasMealsFiltered} str="strArea" />
      </div>
    </div>
  );
}

export default IndexRoot;
