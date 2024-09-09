import { createReducer } from '@reduxjs/toolkit';
import { StoreState } from '../../../../store/storeState.ts';
import { FAILED_TO_RETRIEVE_PLANT, PLANT_RETRIEVED, PLANT_RETRIEVING } from '../../actions/plantActions.ts';

export const plantsReducer = createReducer<StoreState['plants']>(
  {
    plants: [],
    loading: 'idle',
    error: null,
  },
  (builder) => {
    builder
      .addCase(PLANT_RETRIEVING, (state) => {
        return {
          ...state,
          loading: 'pending',
        };
      })
      .addCase(PLANT_RETRIEVED, (state, action) => {
        return {
          ...state,
          plants: action.payload,
          loading: 'success',
          error: null,
        };
      })
      .addCase(FAILED_TO_RETRIEVE_PLANT, (state, action) => {
        return {
          ...state,
          loading: 'error',
          error: action.payload,
        };
      });
  },
);
