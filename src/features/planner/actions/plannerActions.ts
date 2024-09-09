import { createAction } from '@reduxjs/toolkit';
import { Parcel } from '../core-logic/entities/Parcel.ts';

export const GENERATE_PARCEL = createAction('GENERATE_PARCEL');
export const PARCEL_GENERATED = createAction<readonly Parcel[]>('PARCEL_GENERATED');
export const FAILED_TO_GENERATE_PARCEL = createAction<Error>('FAILED_TO_GENERATE_PARCEL');
export const ASKED_TO_GENERATE_PARCEL = createAction<void>('ASKED_TO_GENERATE_PARCEL');

export type PlannerActions =
  | ReturnType<typeof GENERATE_PARCEL>
  | ReturnType<typeof PARCEL_GENERATED>
  | ReturnType<typeof FAILED_TO_GENERATE_PARCEL>;
