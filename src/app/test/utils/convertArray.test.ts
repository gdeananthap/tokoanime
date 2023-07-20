import {convertArray} from '../../utils/convertArray';

describe('convertArray modules', () => {
  test('Convert Empty Array', () => {
    expect(convertArray([])).toBe('-');
  });
  test('Convert Array', () => {
    expect(convertArray([ "Action", "Comedy", "Sports"])).toBe('Action, Comedy, Sports');
  });
  test('Convert Array Undefined', () => {
    expect(convertArray(undefined)).toBe('-');
  });
});
