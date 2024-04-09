import { Card } from '../types/Card';
import { Product } from '../types/Product';
import { User } from '../types/User';
import getDataFromStorage from './getDataFromStorage';
import { setDataToStorage } from './setDataToStorage';

const getUser = () => getDataFromStorage<User, null>('user', null);

const setUser = (user: User) => setDataToStorage('user', user);

const getIsAuthorized = () => getDataFromStorage<boolean, boolean>('isAuthorized', false);
const setIsAuthorized = (isAuthorized: boolean) => setDataToStorage('isAuthorized', isAuthorized);

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
      const productsToSet = user.products
        .map(product => product.id === productToSet.id
          ? productToSet
          : product);

      user.products = productsToSet;

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
      const productsToSet = user.products
        .map(product => product.id === productToSet.id
          ? productToSet
          : product);

      user.products = productsToSet;

      setSelectedProduct(productToSet);
      setUser(user);
    }
  }
};

export const useDataFromStorage = {
  getUser,
  setUser,
  getIsAuthorized,
  setIsAuthorized,
  getProducts,
  getSelectedProduct,
  setSelectedProduct,
  createNewProduct,
  addProduct,
  getCards,
  addCard,
  updateCard
};
