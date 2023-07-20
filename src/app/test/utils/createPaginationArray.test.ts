import {createPaginationArray} from '../../utils/createPaginationArray';

describe('createPaginationArray modules', () => {
  test('Create Pagination Array no ellipsis', () => {
    expect(createPaginationArray(1, 3, 3)).toStrictEqual([1, 2, 3]);
  });

  test('Create Pagination Array Middle Ellipsis', () => {
    expect(createPaginationArray(1, 500, 7)).toStrictEqual([1, 2, 3, NaN, 498, 499, 500]);
  });

  test('Create Pagination Array Last Ellipsis', () => {
    expect(createPaginationArray(4, 500, 7)).toStrictEqual([1, 2, 3, 4, 5, NaN, 500]);
  });

  test('Create Pagination Array 2 Ellipsis', () => {
    expect(createPaginationArray(5, 500, 7)).toStrictEqual([1, NaN, 4, 5, 6, NaN, 500]);
  });
});
