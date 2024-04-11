import { Card } from '../types/Card';
import { Product } from '../types/Product';
import { User } from '../types/User';
import getDataFromStorage from './getDataFromStorage';
import { setDataToStorage } from './setDataToStorage';
import { updateElementInArray } from './updateElementInArray';

const getUser = () => getDataFromStorage<User, null>('user', null);

const setUser = (user: User) => setDataToStorage('user', user);

const getIsAuthorized = () => getDataFromStorage<boolean, boolean>('isAuthorized', false);
const setIsAuthorized = (isAuthorized: boolean) => setDataToStorage('isAuthorized', isAuthorized);

interface AuthorizeArgs {
  user: User,
  isAuthorized: boolean
}

const authorize = ({user, isAuthorized}: AuthorizeArgs) => {
  useDataFromStorage.setUser(user);
  useDataFromStorage.setIsAuthorized(isAuthorized);
};

const getProducts = () => getUser()?.products || [];

const getSelectedProduct = () => getDataFromStorage<Product, null>('selectedProduct', null);
const setSelectedProduct = (product: Product) => setDataToStorage('selectedProduct', product);

const createNewProduct = (product: Product) => {
  const user = getUser();

  if (user) {
    user.products.push(product);
    setUser(user);
  }
};

const addProduct = (product: Product) => {
  createNewProduct(product);
  setSelectedProduct(product);
};

const getCards = () => getSelectedProduct()?.cards || [];

const addCard = (card: Card) => {
  const product = getSelectedProduct();

  if (product) {
    const cards = getCards();

    const productToSet: Product = {
      ...product,
      cards: [...cards, card]
    };

    const user = getUser();

    if (user) {
      user.products = updateElementInArray<Product, Product>(user.products, productToSet);

      setSelectedProduct(productToSet);
      setUser(user);
    }
  }
};

const updateCard = (updatedCards: Card[]) => {
  const product = getSelectedProduct();

  if (product) {
    const productToSet: Product = {
      ...product,
      cards: updatedCards
    };

    const user = getUser();

    if (user) {
      user.products = updateElementInArray<Product, Product>(user.products, productToSet);

      setSelectedProduct(productToSet);
      setUser(user);
    }
  }
};

const getChallengeStatus = () => getDataFromStorage<boolean, boolean>('challengeStatus', false);
const setChallengeStatus = (status: boolean) => setDataToStorage('challengeStatus', status);

export const useDataFromStorage = {
  getUser,
  setUser,
  getIsAuthorized,
  setIsAuthorized,
  authorize,
  getProducts,
  getSelectedProduct,
  setSelectedProduct,
  createNewProduct,
  addProduct,
  getCards,
  addCard,
  updateCard,
  getChallengeStatus,
  setChallengeStatus
};
