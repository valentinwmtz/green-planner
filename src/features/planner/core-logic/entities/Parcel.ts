import { Maybe } from 'purify-ts/Maybe';
import { getPlantSpaceRequirement, isCompatibleWith, Plant } from './Plant';

export type Parcel = Readonly<{
  id: string;
  sizeInSquareMeters: number;
  plants: readonly Plant[];
  remainingSpace: number;
}>;

export const createParcel = (id: string, sizeInSquareMeters: number): Parcel => ({
  id,
  sizeInSquareMeters,
  plants: [],
  remainingSpace: sizeInSquareMeters,
});

export const canAddPlant = (parcel: Parcel, newPlant: Plant): boolean => {
  const spaceRequired = getPlantSpaceRequirement(newPlant);
  return (
    parcel.remainingSpace >= spaceRequired &&
    parcel.plants.every((existingPlant) => isCompatibleWith(existingPlant, newPlant.id))
  );
};

export const addPlant = (parcel: Parcel, newPlant: Plant): Maybe<Parcel> => {
  if (canAddPlant(parcel, newPlant)) {
    const spaceRequired = getPlantSpaceRequirement(newPlant);
    return Maybe.of({
      ...parcel,
      plants: [...parcel.plants, newPlant],
      remainingSpace: parcel.remainingSpace - spaceRequired,
    });
  }
  return Maybe.empty();
};

export const getPlantCountInParcel = (parcel: Parcel, plantId: string): number =>
  parcel.plants.filter((plant) => plant.id === plantId).length;
