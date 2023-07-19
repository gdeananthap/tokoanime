export function convertArray(array: any[] | undefined): string {
  if (!array || array.length === 0) {
    return '-';
  }

  if (array.length === 1) {
    return array[0].toString();
  }

  const lastElement = array[array.length - 1];
  const remainingElements = array.slice(0, -1);
  const joinedString = remainingElements.join(', ');

  return `${joinedString}, ${lastElement}`;
}