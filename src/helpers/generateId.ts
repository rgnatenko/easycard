const generateId = () => {
  return Number(Math.random().toString().slice(2, 13));
};

export default generateId;
