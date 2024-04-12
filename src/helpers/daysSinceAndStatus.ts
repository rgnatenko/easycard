import { calculatePercentage } from './calculatePercentage';
import getDataFromStorage from './getDataFromStorage';
import { setDataToStorage } from './setDataToStorage';

export const daysSinceAndStatus = () => {
  const givenDate = new Date();
  const totalDays = 42;

  let currentDate = getDataFromStorage<number, null>('startDate', null);

  if (!currentDate) {
    currentDate = Number(new Date());

    setDataToStorage('startDate', currentDate);
  }

  const differenceMs = Number(givenDate) - Number(currentDate);

  const daysPassed = Math.ceil(differenceMs / (1000 * 60 * 60 * 24)) + 1;

  const challengeStatus = calculatePercentage(daysPassed, totalDays);

  return { daysPassed, challengeStatus };
};
