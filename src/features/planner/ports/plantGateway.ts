import { Either } from 'purify-ts';
import { Plant } from '../core-logic/entities/Plant.ts';

export interface PlantGateway {
  addPlant: (plant: Plant) => Promise<Either<Error, void>>;
  addPlants: (plants: Plant[]) => Promise<Either<Error, void>>;
  getPlants: () => Promise<Either<Error, Plant[]>>;
}
