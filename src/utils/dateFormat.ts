export default (date: Date, separator: string = '-') => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}${separator}${month}${separator}${day}`;
};
