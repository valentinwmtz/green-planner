import { Either, Left, Right } from 'purify-ts/Either';
import { addPlant, Parcel } from './Parcel';
import { isCompatibleWith, Plant } from './Plant';

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

const runSimulation = (parcels: readonly Parcel[], plants: readonly Plant[]): readonly Parcel[] => {
  return plants.reduce<Parcel[]>(
    (updatedParcels, plant) => {
      const randomParcelIndex = getRandomInt(updatedParcels.length);
      const randomParcel = updatedParcels[randomParcelIndex];
      const updatedParcel = addPlant(randomParcel, plant);

      return updatedParcel.caseOf({
        Just: (newParcel) => [
          ...updatedParcels.slice(0, randomParcelIndex),
          newParcel,
          ...updatedParcels.slice(randomParcelIndex + 1),
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

export const startMonteCarloSimulation = (
  parcels: readonly Parcel[],
  plants: readonly Plant[],
  iterations: number,
): Either<Error, readonly Parcel[]> => {
  if (iterations <= 0) {
    return Left(new Error('Iterations must be a positive number'));
  }

  let bestConfiguration: readonly Parcel[] | null = null;
  let bestScore = -Infinity;

  for (let i = 0; i < iterations; i++) {
    const configuration = runSimulation(parcels, plants);
    const score = evaluateConfiguration(configuration);

    if (score > bestScore) {
      bestScore = score;
      bestConfiguration = configuration;
    }
  }

  return bestConfiguration ? Right(bestConfiguration) : Left(new Error('No valid configuration found'));
};
