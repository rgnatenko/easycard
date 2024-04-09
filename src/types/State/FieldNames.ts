import { BusinessName } from '../FieldValues/BusinessName';
import { CardInfo } from '../FieldValues/CardInfo';
import { SearchQuery } from '../FieldValues/SearchQuery';
import { UserInputs } from '../FieldValues/UserInputs';

export type FieldNames = keyof UserInputs
  | keyof BusinessName | keyof SearchQuery | keyof CardInfo;
