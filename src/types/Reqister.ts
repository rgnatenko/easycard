import { UseFormRegister } from 'react-hook-form';
import { UserInputs } from './FieldValues/UserInputs';
import { BusinessName } from './FieldValues/BusinessName';
import { SearchQuery } from './FieldValues/SearchQuery';
import { CardInfo } from './FieldValues/CardInfo';

type FieldValues = UserInputs | BusinessName | SearchQuery | CardInfo;

export type Register = UseFormRegister<FieldValues>;
