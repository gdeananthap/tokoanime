import {convertEnum} from '../../utils/convertEnum';

describe('convertEnum modules', () => {
  test('Convert Simple Enum', () => {
    expect(convertEnum('SPRING')).toBe('Spring');
  });
  test('Convert Enum with underscore', () => {
    expect(convertEnum('NOT_YET_AIRING')).toBe('Not Yet Airing');
  });
  test('Convert Enum Undefined', () => {
    expect(convertEnum(undefined)).toBe('-');
  });
});
