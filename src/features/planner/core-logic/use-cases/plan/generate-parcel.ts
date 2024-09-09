import { Either } from 'purify-ts/Either';
import { AppThunk } from '../../../../../store/store.ts';
import { FAILED_TO_GENERATE_PARCEL, GENERATE_PARCEL, PARCEL_GENERATED } from '../../../actions/plannerActions.ts';
import { PlanFormValues } from '../../../adapters/primary/components/PlanForm.tsx';
import { startGreedyPlacement } from '../../entities/GreedyGardenPlanner.ts';
import { startMonteCarloSimulation } from '../../entities/MonteCarloGardenPlanner.ts';
import { createParcel, Parcel } from '../../entities/Parcel.ts';
import { Plant } from '../../entities/Plant.ts';

export interface GenerateParcelProps {
  selectedPlants: Plant[];
  plants: Plant[];
  personNumber: number;
  algorithm: 'glouton' | 'monte carlo';
  parcels: Parcel[];
}

export const generateParcelUseCase =
  (plan: PlanFormValues): AppThunk<Promise<void>> =>
  async (dispatch, getState) => {
    dispatch(GENERATE_PARCEL());
    const generateParcelProps: GenerateParcelProps = {
      plants: getState().plants.plants,
      algorithm: plan.algorithm,
      parcels: plan.parcels.map((parcel) => createParcel(parcel.id, parcel.size)),
      personNumber: plan.personNumber,
      selectedPlants: getState().plants.plants.filter((plant) => plan.plantsId.includes(plant.id)),
    };

    let simulation: Either<Error, readonly Parcel[]>;
    if (generateParcelProps.algorithm === 'glouton') {
      simulation = startGreedyPlacement(generateParcelProps.parcels, generateParcelProps.selectedPlants);
    } else if (generateParcelProps.algorithm === 'monte carlo') {
      simulation = startMonteCarloSimulation(generateParcelProps.parcels, generateParcelProps.selectedPlants, 10000);
    } else
      simulation = startMonteCarloSimulation(generateParcelProps.parcels, generateParcelProps.selectedPlants, 10000);

    simulation.caseOf({
      Left: (error) => {
        dispatch(FAILED_TO_GENERATE_PARCEL(error));
      },
      Right: (assignment) => {
        dispatch(PARCEL_GENERATED(assignment ?? []));
      },
    });
  };
