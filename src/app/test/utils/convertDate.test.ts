import {convertDate} from '../../utils/convertDate';

describe('convertDate modules', () => {
  test('Convert Date', () => {
    expect(convertDate({
      year: 2023,
      month: 7,
      day: 20,
    })).toBe('20 July 2023');
  });
});
