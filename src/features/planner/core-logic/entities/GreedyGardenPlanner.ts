import { Either, Left, Right } from 'purify-ts/Either';
import { addPlantedCrop, createFilledParcel, FilledParcel, getPlantCountInFilledParcel } from './FilledParcel';
import { Parcel } from './Parcel';
import { isCompatibleWith, Plant } from './Plant';

const calculateMinPlantsForPerson = (plant: Plant, personNumber: number): number => {
  const requiredArea = plant.spacing.m2PerPerson * personNumber;
  return Math.ceil(requiredArea * plant.spacing.plantsPerM2);
};

const sortPlantsByCompatibility = (plants: readonly Plant[]): Plant[] =>
  [...plants].sort((a, b) => b.compatibilityPlants.length - a.compatibilityPlants.length);

const calculateCompatibilityScore = (plant: Plant, filledParcel: FilledParcel): number => {
  const compatiblePlants = filledParcel.plantedCrops.filter((crop) => isCompatibleWith(plant, crop.plant.id));
  const uniqueCompatibleSpecies = new Set(compatiblePlants.map((crop) => crop.plant.id)).size;
  return uniqueCompatibleSpecies * 2 + compatiblePlants.length;
};

const canAddPlantToFilledParcel = (filledParcel: FilledParcel, plant: Plant, count: number): boolean => {
  const spaceRequired = (1 / plant.spacing.plantsPerM2) * count;
  return (
    filledParcel.remainingSpace >= spaceRequired &&
    filledParcel.plantedCrops.every((crop) => isCompatibleWith(crop.plant, plant.id))
  );
};

const findBestParcel = (
  plant: Plant,
  filledParcels: FilledParcel[],
  personNumber: number,
): [FilledParcel, number] | null => {
  const minPlants = calculateMinPlantsForPerson(plant, personNumber);

  return filledParcels.reduce<[FilledParcel, number] | null>((best, currentParcel) => {
    const currentPlantCount = getPlantCountInFilledParcel(currentParcel, plant.id);
    const spaceForNewPlants = Math.floor(currentParcel.remainingSpace * plant.spacing.plantsPerM2);
    const plantsToAdd = Math.min(minPlants - currentPlantCount, spaceForNewPlants);

    if (plantsToAdd <= 0 || !canAddPlantToFilledParcel(currentParcel, plant, plantsToAdd)) {
      return best;
    }

    const currentScore = calculateCompatibilityScore(plant, currentParcel);
    const [bestParcel, bestPlantsToAdd] = best || [null, 0];
    const bestScore = bestParcel ? calculateCompatibilityScore(plant, bestParcel) : -1;

    if (currentScore > bestScore || (currentScore === bestScore && plantsToAdd > bestPlantsToAdd)) {
      return [currentParcel, plantsToAdd];
    }

    return best;
  }, null);
};

const runGreedyPlacement = (
  parcels: readonly Parcel[],
  plants: readonly Plant[],
  personNumber: number,
): FilledParcel[] => {
  const sortedPlants = sortPlantsByCompatibility(plants);
  let filledParcels = parcels.map(createFilledParcel);

  for (const plant of sortedPlants) {
    let remainingPlants = calculateMinPlantsForPerson(plant, personNumber);

    while (remainingPlants > 0) {
      const best = findBestParcel(plant, filledParcels, personNumber);
      if (!best) break;

      const [bestParcel, plantsToAdd] = best;
      const parcelIndex = filledParcels.findIndex((p) => p.parcel.id === bestParcel.parcel.id);
      filledParcels[parcelIndex] = addPlantedCrop(bestParcel, plant, plantsToAdd);
      remainingPlants -= plantsToAdd;
    }
  }

  return filledParcels;
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
        parcelScore += 5;
      }
    });

    parcelScore += filledParcel.plantedCrops.length * 2;

    return totalScore + parcelScore;
  }, 0);

export const startGreedyPlacement = (
  parcels: readonly Parcel[],
  plants: readonly Plant[],
  personNumber: number,
): Either<Error, readonly FilledParcel[]> => {
  if (parcels.length === 0) {
    return Left(new Error('At least one parcel is required'));
  }
  if (plants.length === 0) {
    return Left(new Error('At least one plant is required'));
  }
  if (personNumber <= 0) {
    return Left(new Error('Person number must be greater than zero'));
  }

  const finalConfiguration = runGreedyPlacement(parcels, plants, personNumber);
  const score = evaluateConfiguration(finalConfiguration, personNumber);
  console.log(`Greedy algorithm score: ${score}`);
  return Right(finalConfiguration);
};
