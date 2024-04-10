export const calculatePercentage = (daysSince: number, totalDays: number) => {
  daysSince = Math.min(daysSince, totalDays);

  const percentage = (daysSince / totalDays) * 100;

  return Math.floor(percentage);
};
