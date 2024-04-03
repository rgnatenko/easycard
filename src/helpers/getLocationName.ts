import { User } from '../types/User';

export const getLocationName = (user: User | null) => {
  const userHasProducts = user !== null && user.products.length > 0 || false;
  const locationName = userHasProducts
    ? user?.products[0].location.name as string
    : 'Connect Location';

  return { locationName, userHasProducts };
};
