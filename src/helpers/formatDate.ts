export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? '0' + day : day.toString();
  const formattedMonth = month < 10 ? '0' + month : month.toString();

  const formattedDate = `${formattedMonth}/${formattedDay}/${year}`;

  return formattedDate;
};
