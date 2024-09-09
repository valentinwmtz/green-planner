import { Maybe } from 'purify-ts/Maybe';
import { isCompatibleWith, Plant } from './Plant';

export type Parcel = Readonly<{
  id: string;
  sizeInSquareMeters: number;
  plants: readonly Plant[];
}>;

export const createParcel = (id: string, sizeInSquareMeters: number): Parcel => ({
  id,
  sizeInSquareMeters,
  plants: [],
});

export const canAddPlant = (parcel: Parcel, newPlant: Plant): boolean =>
  parcel.plants.every((existingPlant) => isCompatibleWith(existingPlant, newPlant.id));

export const addPlant = (parcel: Parcel, newPlant: Plant): Maybe<Parcel> =>
  canAddPlant(parcel, newPlant)
    ? Maybe.of({
        ...parcel,
        plants: [...parcel.plants, newPlant],
      })
    : Maybe.empty();
