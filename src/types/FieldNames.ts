import { BusinessName } from './BusinessName';
import { UserInputs } from './UserInputs';

export type FieldNames = keyof UserInputs | keyof BusinessName;
