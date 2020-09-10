import {
  CHANGE_CATEGORY_FILTER,
  changeCategoriesFilter,
} from '../../actions/ChangeCategoriesFilter';

describe('Change filter', () => {
  it('Should return an object containing the action and payload with the filter', () => {
    const response = changeCategoriesFilter('All');
    expect(response.type).toEqual(CHANGE_CATEGORY_FILTER);
    expect(response.payload).toEqual('All');
  });

  it('Should return the filter of the category beef', () => {
    const response = changeCategoriesFilter('Beef');
    expect(response.type).toEqual(CHANGE_CATEGORY_FILTER);
    expect(response.payload).toEqual('Beef');
  });
});
