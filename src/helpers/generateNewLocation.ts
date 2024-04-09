import { Location } from '../types/Location';
import generateId from './generateId';

export const generateNewLocation = (name: string): Location => ({
  name,
  place_id: generateId(),
  display_name: name
});
