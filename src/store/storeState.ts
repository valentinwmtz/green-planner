import { FilledParcel } from '../features/planner/core-logic/entities/FilledParcel.ts';
import { Plant } from '../features/planner/core-logic/entities/Plant.ts';
import { LoadingStatus } from '../types/loading.ts';

export interface StoreState {
  planner: {
    loading: LoadingStatus;
    error: Error | null;
    generatedParcels: readonly FilledParcel[];
  };
  plants: {
    loading: LoadingStatus;
    error: Error | null;
    plants: Plant[];
  };
}
