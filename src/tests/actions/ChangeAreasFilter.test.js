import {
  CHANGE_AREA_FILTER,
  changeAreasFilter,
} from '../../actions/ChangeAreasFilter';

describe('Change filter', () => {
  it('Should return an object containing the action and payload with the filter', () => {
    const response = changeAreasFilter('All');
    expect(response.type).toEqual(CHANGE_AREA_FILTER);
    expect(response.payload).toEqual('All');
  });

  it('Should return the filter of the area Mexican', () => {
    const response = changeAreasFilter('Mexican');
    expect(response.type).toEqual(CHANGE_AREA_FILTER);
    expect(response.payload).toEqual('Mexican');
  });
});
