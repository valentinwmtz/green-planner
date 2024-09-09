import { Maybe } from 'purify-ts/Maybe';

export type PlantId = string;
export type PlantName = string;

export type CompatibilityPlant = {
  readonly id: PlantId;
  readonly name: PlantName;
};

export type Spacing = Readonly<{
  plantationType: readonly string[];
  distanceBetweenGrains: number;
  distanceBetweenLines: number;
  seedsPerM2: number;
  plantsPerM2: number;
  plantsPerPerPerson: number;
  m2PerPerson: number;
  link: Maybe<string>;
}>;

export type Plant = Readonly<{
  id: PlantId;
  name: PlantName;
  compatibilityPlants: readonly CompatibilityPlant[];
  spacing: Spacing;
}>;

export const isCompatibleWith = (plant: Plant, otherPlantId: PlantId): boolean =>
  plant.compatibilityPlants.some((compatPlant) => compatPlant.id === otherPlantId);

export const createPlant = (
  id: PlantId,
  name: PlantName,
  compatibilityPlants: readonly CompatibilityPlant[],
  spacing: Spacing,
): Plant => ({
  id,
  name,
  compatibilityPlants,
  spacing,
});

export const getPlantSpaceRequirement = (plant: Plant): number => 1 / plant.spacing.plantsPerM2;
