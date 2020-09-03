import { combineReducers } from 'redux';
import CategoriesListReducer from './CategoriesListReducer';
import FullCategoriesListReducer from './FullCategoriesListReducer';
import AreasListReducer from './AreasListReducer';
import CategoryReducer from './CategoryReducer';
import AreaReducer from './AreaReducer';
import MealReducer from './MealReducer';
import SearchReducer from './SearchReducer';

const rootReducer = combineReducers({
  CategoriesList: CategoriesListReducer,
  FullCategoriesList: FullCategoriesListReducer,
  AreasList: AreasListReducer,
  CategoryList: CategoryReducer,
  AreaList: AreaReducer,
  Meal: MealReducer,
  Search: SearchReducer,
});

export default rootReducer;
