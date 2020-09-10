const CHANGE_AREA_FILTER = 'CHANGE_AREA_FILTER';

const changeAreasFilter = filter => ({
  type: CHANGE_AREA_FILTER,
  payload: filter,
});

export { CHANGE_AREA_FILTER, changeAreasFilter };
