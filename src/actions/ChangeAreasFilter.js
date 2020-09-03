const CHANGE_FILTER = 'CHANGE_FILTER';

const changeAreasFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export { CHANGE_FILTER, changeAreasFilter };
