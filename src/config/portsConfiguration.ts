import { FakePlantAdapter } from '../features/planner/adapters/secondary/ports/plants/fakePlantAdapter.ts';
import { PlantGateway } from '../features/planner/ports/plantGateway.ts';

export type Gateways = {
  plantGateway: PlantGateway;
};

const plantGateway = new FakePlantAdapter();
plantGateway.initWithData();

export const demoPortsConfiguration: Gateways = {
  plantGateway,
};
