import { User } from '../types/User';
import getDataFromStorage from './getDataFromStorage';
import { setDataToStorage } from './setDataToStorage';

const getUser = () => getDataFromStorage<User, null>('user', null);

const createUser = (user: User) => setDataToStorage('user', user);

const getIsAuthorized = () => getDataFromStorage<boolean, boolean>('isAuthorized', false);
const setIsAuthorized = (isAuthorized: boolean) => setDataToStorage('isAuthorized', isAuthorized);

const getProducts = () => getUser()?.products || [];

export const useDataFromStorage = {
  getUser,
  createUser,
  getIsAuthorized,
  setIsAuthorized,
  getProducts,
};
