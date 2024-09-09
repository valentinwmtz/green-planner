import { Either, Left, Right } from 'purify-ts/Either';
import { addPlantedCrop, createFilledParcel, FilledParcel } from './FilledParcel';
import { createParcel, Parcel } from './Parcel';
import { getPlantSpaceRequirement, isCompatibleWith, Plant } from './Plant';

const LARGE_PARCEL_THRESHOLD = 5; // m²
const MIN_PARCEL_SIZE = 2.5; // m²

const calculateMinPlantsForPerson = (plant: Plant, personNumber: number): number => {
  return Math.ceil(plant.spacing.plantsPerPerPerson * personNumber);
};

const canAddPlantToParcel = (parcel: FilledParcel, plant: Plant, count: number): boolean => {
  const spaceRequired = getPlantSpaceRequirement(plant) * count;
  return parcel.remainingSpace >= spaceRequired;
};

const isCompatibleWithAll = (plant: Plant, parcel: FilledParcel): boolean => {
  return parcel.plantedCrops.every((crop) => isCompatibleWith(plant, crop.plant.id));
};

const calculateCompatibilityScore = (plant: Plant, parcel: FilledParcel): number => {
  return parcel.plantedCrops.reduce((score, crop) => {
    if (isCompatibleWith(plant, crop.plant.id)) {
      score += crop.count;
    }
    return score;
  }, 0);
};

const findBestParcelForPlant = (
  parcels: FilledParcel[],
  plant: Plant,
  count: number,
  compatibleOnly: boolean,
): [FilledParcel, number] | null => {
  let bestParcel: FilledParcel | null = null;
  let bestScore = -1;
  let bestCount = 0;

  for (const parcel of parcels) {
    if (canAddPlantToParcel(parcel, plant, count) && (!compatibleOnly || isCompatibleWithAll(plant, parcel))) {
      const compatibilityScore = calculateCompatibilityScore(plant, parcel);
      const maxCount = Math.min(count, Math.floor(parcel.remainingSpace / getPlantSpaceRequirement(plant)));
      const score = compatibleOnly ? compatibilityScore * maxCount : parcel.remainingSpace;

      if (score > bestScore) {
        bestScore = score;
        bestParcel = parcel;
        bestCount = maxCount;
      }
    }
  }

  return bestParcel ? [bestParcel, bestCount] : null;
};

const divideLargeParcels = (parcels: readonly Parcel[]): Parcel[] => {
  return parcels.flatMap((parcel) => {
    if (parcel.sizeInSquareMeters > LARGE_PARCEL_THRESHOLD) {
      const numDivisions = Math.floor(parcel.sizeInSquareMeters / MIN_PARCEL_SIZE);
      const newSize = parcel.sizeInSquareMeters / numDivisions;
      return Array.from({ length: numDivisions }, (_, index) => createParcel(`${parcel.id}-${index + 1}`, newSize));
    }
    return [parcel];
  });
};

const runGreedyPlacement = (
  parcels: readonly Parcel[],
  plants: readonly Plant[],
  personNumber: number,
  divideParcels: boolean,
): FilledParcel[] => {
  const initialParcels = divideParcels ? divideLargeParcels(parcels) : parcels;
  let filledParcels = initialParcels.map(createFilledParcel);

  // First pass: place plants prioritizing compatibility
  for (const plant of plants) {
    let remainingPlants = calculateMinPlantsForPerson(plant, personNumber);

    while (remainingPlants > 0) {
      const best = findBestParcelForPlant(filledParcels, plant, remainingPlants, true);
      if (!best) break;

      const [parcel, plantsToAdd] = best;
      const parcelIndex = filledParcels.findIndex((p) => p.parcel.id === parcel.parcel.id);
      filledParcels[parcelIndex] = addPlantedCrop(parcel, plant, plantsToAdd, true);
      remainingPlants -= plantsToAdd;
    }
  }

  // Second pass: fill remaining space with any plants, compatible or not
  let allPlantsPlaced = false;
  while (!allPlantsPlaced) {
    allPlantsPlaced = true;
    for (const plant of plants) {
      const best = findBestParcelForPlant(filledParcels, plant, Number.MAX_SAFE_INTEGER, false);
      if (best) {
        const [parcel, plantsToAdd] = best;
        const parcelIndex = filledParcels.findIndex((p) => p.parcel.id === parcel.parcel.id);
        filledParcels[parcelIndex] = addPlantedCrop(parcel, plant, plantsToAdd, false);
        allPlantsPlaced = false;
      }
    }
  }

  return filledParcels.filter((parcel) => parcel.plantedCrops.length > 0);
};

const evaluateConfiguration = (filledParcels: FilledParcel[], personNumber: number): number =>
  filledParcels.reduce((totalScore, filledParcel) => {
    let parcelScore = 0;

    for (let i = 0; i < filledParcel.plantedCrops.length; i++) {
      for (let j = i + 1; j < filledParcel.plantedCrops.length; j++) {
        if (isCompatibleWith(filledParcel.plantedCrops[i].plant, filledParcel.plantedCrops[j].plant.id)) {
          parcelScore += filledParcel.plantedCrops[i].count * filledParcel.plantedCrops[j].count;
        }
      }
    }

    filledParcel.plantedCrops.forEach((crop) => {
      const minPlants = calculateMinPlantsForPerson(crop.plant, personNumber);
      if (crop.count >= minPlants) {
        parcelScore += crop.isIdealPlacement ? 10 : 5; // Higher bonus for compatible placements
      }
    });

    parcelScore += filledParcel.plantedCrops.length * 2; // Reward diversity
    parcelScore += Math.floor((1 - filledParcel.remainingSpace / filledParcel.parcel.sizeInSquareMeters) * 5); // Reward space utilization

    return totalScore + parcelScore;
  }, 0);

export type GardenPlanResult = {
  withoutDivision: FilledParcel[];
  withDivision: FilledParcel[];
  scoreWithoutDivision: number;
  scoreWithDivision: number;
};

export const startGreedyPlacement = (
  parcels: readonly Parcel[],
  plants: readonly Plant[],
  personNumber: number,
): Either<Error, GardenPlanResult> => {
  if (parcels.length === 0) {
    return Left(new Error('At least one parcel is required'));
  }
  if (plants.length === 0) {
    return Left(new Error('At least one plant is required'));
  }
  if (personNumber <= 0) {
    return Left(new Error('Person number must be greater than zero'));
  }

  const withoutDivision = runGreedyPlacement(parcels, plants, personNumber, false);
  const withDivision = runGreedyPlacement(parcels, plants, personNumber, true);

  const scoreWithoutDivision = evaluateConfiguration(withoutDivision, personNumber);
  const scoreWithDivision = evaluateConfiguration(withDivision, personNumber);

  console.log(`Greedy algorithm score without division: ${scoreWithoutDivision}`);
  console.log(`Greedy algorithm score with division: ${scoreWithDivision}`);

  return Right({
    withoutDivision,
    withDivision,
    scoreWithoutDivision,
    scoreWithDivision,
  });
};
