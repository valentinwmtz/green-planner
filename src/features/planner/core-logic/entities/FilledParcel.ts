import { Parcel } from './Parcel';
import { Plant } from './Plant';

export type PlantedCrop = Readonly<{
  plant: Plant;
  count: number;
  isIdealPlacement: boolean;
}>;

export type FilledParcel = Readonly<{
  parcel: Parcel;
  plantedCrops: PlantedCrop[];
  remainingSpace: number;
}>;

export const createFilledParcel = (parcel: Parcel): FilledParcel => ({
  parcel,
  plantedCrops: [],
  remainingSpace: parcel.sizeInSquareMeters,
});

export const addPlantedCrop = (
  filledParcel: FilledParcel,
  plant: Plant,
  count: number,
  isIdealPlacement: boolean = true,
): FilledParcel => {
  const spaceRequired = (1 / plant.spacing.plantsPerM2) * count;
  const existingCropIndex = filledParcel.plantedCrops.findIndex((crop) => crop.plant.id === plant.id);

  let updatedPlantedCrops: PlantedCrop[];
  if (existingCropIndex !== -1) {
    const existingCrop = filledParcel.plantedCrops[existingCropIndex];
    updatedPlantedCrops = [
      ...filledParcel.plantedCrops.slice(0, existingCropIndex),
      {
        plant,
        count: existingCrop.count + count,
        isIdealPlacement: existingCrop.isIdealPlacement && isIdealPlacement,
      },
      ...filledParcel.plantedCrops.slice(existingCropIndex + 1),
    ];
  } else {
    updatedPlantedCrops = [...filledParcel.plantedCrops, { plant, count, isIdealPlacement }];
  }

  return {
    ...filledParcel,
    plantedCrops: updatedPlantedCrops,
    remainingSpace: filledParcel.remainingSpace - spaceRequired,
  };
};

export const getPlantCountInFilledParcel = (filledParcel: FilledParcel, plantId: string): number => {
  const plantedCrop = filledParcel.plantedCrops.find((crop) => crop.plant.id === plantId);
  return plantedCrop ? plantedCrop.count : 0;
};
