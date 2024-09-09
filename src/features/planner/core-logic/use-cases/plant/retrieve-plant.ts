import { EitherAsync } from 'purify-ts';
import { AppThunk } from '../../../../../store/store.ts';
import { FAILED_TO_RETRIEVE_PLANT, PLANT_RETRIEVED, PLANT_RETRIEVING } from '../../../actions/plantActions.ts';

export const retrievePlantUseCase = (): AppThunk<Promise<void>> => async (dispatch, _getState, extraArgument) => {
  dispatch(PLANT_RETRIEVING());
  await EitherAsync.liftEither(await extraArgument.plantGateway.getPlants())
    .mapLeft((error) => dispatch(FAILED_TO_RETRIEVE_PLANT(error)))
    .ifRight((plants) => dispatch(PLANT_RETRIEVED(plants)))
    .run();
};
