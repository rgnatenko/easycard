import { Location } from '../Location';

export interface LocationState {
  selectedLocation: Location | null,
  locations: Location[],
  customName: string,
  locatiansAreLoading: boolean,
  locationsError: string
}
