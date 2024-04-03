import { User } from './User';

export type UserInputs = Omit<User, 'products'>;
