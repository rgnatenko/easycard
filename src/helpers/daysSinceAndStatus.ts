import { calculatePercentage } from './calculatePercentage';

export const daysSinceAndStatus = (date: Date) => {
  const givenDate = new Date(date);
  const totalDays = 42;

  const currentDate = new Date();

  const differenceMs = Number(currentDate) - Number(givenDate);

  const daysPassed = Math.floor(differenceMs / (1000 * 60 * 60 * 24)) + 1;

  const challengeStatus = calculatePercentage(daysPassed, totalDays);

  return { daysPassed, challengeStatus };
};
