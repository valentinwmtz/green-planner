import { createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../../../../store/storeState.ts';
import { ASKED_TO_GENERATE_PARCEL, GENERATE_PARCEL, PARCEL_GENERATED } from '../../actions/plannerActions.ts';

export const plannerReducer = createReducer<StoreState['planner']>(
  {
    loading: 'idle',
    error: null,
    generatedParcels: [],
    generatedParcelsWithDivision: [],
  },
  (builder) => {
    builder.addCase(GENERATE_PARCEL, (state) => {
      return {
        ...state,
        loading: 'pending',
        error: null,
        generatedParcels: [],
        generatedParcelsWithDivision: [],
      };
    });
    builder.addCase(ASKED_TO_GENERATE_PARCEL, (state) => {
      return {
        ...state,
        loading: 'idle',
        error: null,
        generatedParcels: [],
        generatedParcelsWithDivision: [],
      };
    });
    builder.addCase(PARCEL_GENERATED, (state, action) => {
      return {
        ...state,
        loading: 'success',
        error: null,
        generatedParcels: action.payload.withoutDivision,
        generatedParcelsWithDivision: action.payload.withDivision,
      };
    });
  },
);
