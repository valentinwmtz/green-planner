import { Either, Right } from 'purify-ts';
import { Maybe } from 'purify-ts/Maybe';
import { createPlant, Plant } from '../../../../core-logic/entities/Plant.ts';
import { PlantGateway } from '../../../../ports/plantGateway.ts';
import { plantsDatabase } from './plantsData.ts';

export type PlantDataCompatibilityPlants = {
  id: string;
  name: string;
};
export type PlantDataSpacing = {
  plantationType: string[];
  distanceBetweenGrains: number;
  distanceBetweenLines: number;
  seedsPerM2: number;
  plantsPerM2: number;
  plantsPerPerPerson: number;
  m2PerPerson: number;
  link: string | null;
};
export type PlantData = {
  id: string;
  name: string;
  compatibilityPlants: PlantDataCompatibilityPlants[];
  spacing: PlantDataSpacing;
};

export class FakePlantAdapter implements PlantGateway {
  private plants: Plant[] = [];

  constructor() {}

  async addPlant(plant: Plant): Promise<Either<Error, void>> {
    await new Promise((resolve) => setTimeout(resolve, 700));
    this.plants.push(plant);
    return Right(undefined);
  }

  async addPlants(plants: Plant[]): Promise<Either<Error, void>> {
    this.plants.push(...plants);
    return Right(undefined);
  }

  async getPlants(): Promise<Either<Error, Plant[]>> {
    return Right(this.plants);
  }

  feedWithPlants(plants: Plant[]): void {
    this.plants.push(...plants);
  }

  initWithData(): void {
    this.plants = plantsDatabase.map((plantData: PlantData) =>
      createPlant(plantData.id, plantData.name, plantData.compatibilityPlants, {
        ...plantData.spacing,
        link: Maybe.fromNullable(plantData.spacing.link),
      }),
    );
  }
}
