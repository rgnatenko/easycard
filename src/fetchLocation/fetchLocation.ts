import { Location } from '../types/Location';

const request = async<T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
};

const fetchLocation = (query: string) => {
  const requestUrl = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;

  return request<Location[]>(requestUrl);
};

export default fetchLocation;
