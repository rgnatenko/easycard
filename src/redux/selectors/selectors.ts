import { useAppSelector } from '../hooks';

export const useUser = () => useAppSelector(state => state.user);
export const useProducts = () => useAppSelector(state => state.products);
