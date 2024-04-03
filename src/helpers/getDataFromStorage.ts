const getDataFromStorage = <T, T2>(dataName: string, emptyVar: T2): T | T2 => {
  const dataInstorage = localStorage.getItem(dataName);

  const parsedData = dataInstorage
    ? JSON.parse(dataInstorage)
    : emptyVar;

  return parsedData;
};

export default getDataFromStorage;
