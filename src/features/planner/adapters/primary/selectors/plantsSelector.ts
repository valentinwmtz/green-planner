import { createSelector } from '@reduxjs/toolkit';
import { StoreState } from '../../../../../store/storeState.ts';

export const plantsSelector = (state: StoreState) => state.plants;

export const plantsLoadingSelector = (state: StoreState) => state.plants.loading;

export const plantList = createSelector(plantsSelector, (plant) => {
  return plant.plants.map((plant) => {
    return {
      name: plant.name,
      id: plant.id,
    };
  });
});
