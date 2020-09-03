const CHANGE_CATEGORY_FILTER = 'CHANGE_CATEGORY_FILTER';

const changeCategoriesFilter = filter => ({
  type: CHANGE_CATEGORY_FILTER,
  payload: filter,
});

export { CHANGE_CATEGORY_FILTER, changeCategoriesFilter };
