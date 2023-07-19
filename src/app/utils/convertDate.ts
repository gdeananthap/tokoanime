export type Date = {
  year: number,
  month: number,
  day: number,
}

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'Decemner',
]

export function convertDate(date: Date | undefined): string {
  if( !date ) return '-'
  return `${date.day} ${month[date.month - 1]} ${date.year}`;
}