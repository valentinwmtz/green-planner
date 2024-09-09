import { Either } from 'purify-ts/Either';
import { AppThunk } from '../../../../../store/store.ts';
import { FAILED_TO_GENERATE_PARCEL, GENERATE_PARCEL, PARCEL_GENERATED } from '../../../actions/plannerActions.ts';
import { PlanFormValues } from '../../../adapters/primary/components/PlanForm.tsx';
import { GardenPlanResult, startGreedyPlacement } from '../../entities/GreedyGardenPlanner.ts';
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

    console.log(generateParcelProps);

    let simulation: Either<Error, GardenPlanResult>;
    if (generateParcelProps.algorithm === 'glouton') {
      const start = performance.now();
      simulation = startGreedyPlacement(
        generateParcelProps.parcels,
        generateParcelProps.selectedPlants,
        generateParcelProps.personNumber,
      );
      const end = performance.now();
      console.log(`Greedy algorithm time: ${(end - start).toFixed(2)}ms`);
    } else
      simulation = startGreedyPlacement(
        generateParcelProps.parcels,
        generateParcelProps.selectedPlants,
        generateParcelProps.personNumber,
      );

    simulation.caseOf({
      Left: (error) => {
        dispatch(FAILED_TO_GENERATE_PARCEL(error));
      },
      Right: (assignment) => {
        dispatch(PARCEL_GENERATED(assignment ?? []));
      },
    });
  };
