import { Either, Left, Right } from 'purify-ts/Either';
import { addPlant, canAddPlant, Parcel } from './Parcel';
import { isCompatibleWith, Plant } from './Plant';

const sortPlantsByCompatibility = (plants: readonly Plant[]): Plant[] =>
  [...plants].sort((a, b) => b.compatibilityPlants.length - a.compatibilityPlants.length);

const calculateCompatibilityScore = (plant: Plant, parcel: Parcel): number =>
  parcel.plants.filter((p) => isCompatibleWith(plant, p.id)).length;

const findBestParcel = (plant: Plant, parcels: readonly Parcel[]): Parcel | null => {
  return parcels.reduce<Parcel | null>((bestParcel, currentParcel) => {
    if (!canAddPlant(currentParcel, plant)) {
      return bestParcel;
    }

    const currentScore = calculateCompatibilityScore(plant, currentParcel);
    const bestScore = bestParcel ? calculateCompatibilityScore(plant, bestParcel) : -1;

    if (
      currentScore > bestScore ||
      (currentScore === bestScore && currentParcel.plants.length < (bestParcel?.plants.length ?? Infinity))
    ) {
      return currentParcel;
    }

    return bestParcel;
  }, null);
};

const runGreedyPlacement = (parcels: readonly Parcel[], plants: readonly Plant[]): readonly Parcel[] => {
  const sortedPlants = sortPlantsByCompatibility(plants);
  return sortedPlants.reduce<Parcel[]>(
    (updatedParcels, plant) => {
      const bestParcel = findBestParcel(plant, updatedParcels);
      if (!bestParcel) {
        return updatedParcels; // No suitable parcel found for this plant
      }

      const parcelIndex = updatedParcels.findIndex((p) => p.id === bestParcel.id);
      const updatedParcel = addPlant(bestParcel, plant);

      return updatedParcel.caseOf({
        Just: (newParcel) => [
          ...updatedParcels.slice(0, parcelIndex),
          newParcel,
          ...updatedParcels.slice(parcelIndex + 1),
        ],
        Nothing: () => updatedParcels,
      });
    },
    [...parcels],
  );
};

const evaluateConfiguration = (parcels: readonly Parcel[]): number =>
  parcels.reduce((totalScore, parcel) => {
    let parcelScore = 0;
    for (let i = 0; i < parcel.plants.length; i++) {
      for (let j = i + 1; j < parcel.plants.length; j++) {
        if (isCompatibleWith(parcel.plants[i], parcel.plants[j].id)) {
          parcelScore++;
        }
      }
    }
    return totalScore + parcelScore;
  }, 0);

export const startGreedyPlacement = (
  parcels: readonly Parcel[],
  plants: readonly Plant[],
): Either<Error, readonly Parcel[]> => {
  if (parcels.length === 0) {
    return Left(new Error('At least one parcel is required'));
  }
  if (plants.length === 0) {
    return Left(new Error('At least one plant is required'));
  }

  const finalConfiguration = runGreedyPlacement(parcels, plants);
  const score = evaluateConfiguration(finalConfiguration);

  console.log(`Greedy algorithm score: ${score}`);

  return Right(finalConfiguration);
};
