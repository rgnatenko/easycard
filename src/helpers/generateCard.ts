import { Card } from '../types/Card';
import { formatDate } from './formatDate';
import generateId from './generateId';

export const generateCard = (ownerName: string): Card => ({
  ownerName,
  productId: generateId(),
  status: true,
  scanDate: formatDate(new Date()),
  taps: Number(Math.random().toString().slice(2, 4))
});
