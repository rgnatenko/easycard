/* eslint-disable @typescript-eslint/no-explicit-any */
export const updateElementInArray = <T extends { id: number }, T2 extends { id: number }>(
  array: T[],
  element: T2
) => {
  return array.map(el => (el.id === element.id ? element : el));
};
