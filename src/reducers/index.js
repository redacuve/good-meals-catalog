import { combineReducers } from 'redux';
import CategoriesListReducer from './CategoriesListReducer';
import FullCategoriesListReducer from './FullCategoriesListReducer';
import AreasListReducer from './AreasListReducer';
import CategoryReducer from './CategoryReducer';

const rootReducer = combineReducers({
  CategoriesList: CategoriesListReducer,
  FullCategoriesList: FullCategoriesListReducer,
  AreasList: AreasListReducer,
  CategoryList: CategoryReducer,
});

export default rootReducer;
