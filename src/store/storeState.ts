import { Parcel } from '../features/planner/core-logic/entities/Parcel.ts';
import { Plant } from '../features/planner/core-logic/entities/Plant.ts';
import { LoadingStatus } from '../types/loading.ts';

export interface StoreState {
  planner: {
    loading: LoadingStatus;
    error: Error | null;
    generatedParcels: readonly Parcel[];
  };
  plants: {
    loading: LoadingStatus;
    error: Error | null;
    plants: Plant[];
  };
}
