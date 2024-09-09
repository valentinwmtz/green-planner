import { createAction } from '@reduxjs/toolkit';
import { Plant } from '../core-logic/entities/Plant.ts';

export const PLANT_RETRIEVING = createAction('PLANT_RETRIEVING');
export const PLANT_RETRIEVED = createAction<Plant[]>('PLANT_RETRIEVED');
export const FAILED_TO_RETRIEVE_PLANT = createAction<Error>('FAILED_TO_RETRIEVE_PLANT');

export type PlantActions =
  | ReturnType<typeof PLANT_RETRIEVING>
  | ReturnType<typeof PLANT_RETRIEVED>
  | ReturnType<typeof FAILED_TO_RETRIEVE_PLANT>;
