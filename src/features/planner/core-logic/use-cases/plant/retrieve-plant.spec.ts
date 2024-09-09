import { AllEpics, initReduxStore, ReduxStore } from '../../../../../store/store.ts';
import { StoreState } from '../../../../../store/storeState.ts';
import { trackLoadingStates } from '../../../../../utils/tests/trackLoadingStates.ts';
import { FakePlantAdapter } from '../../../adapters/secondary/ports/plants/fakePlantAdapter.ts';
import { plantsDatabase } from '../../../adapters/secondary/ports/plants/plantsData.ts';
import { retrievePlantUseCase } from './retrieve-plant.ts';

describe('retrieve plants use case', () => {
  let store: ReduxStore;
  let plantGateway: FakePlantAdapter;

  beforeEach(() => {
    plantGateway = new FakePlantAdapter();
    store = initReduxStore({
      gateways: {
        plantGateway,
      },
      epics: AllEpics,
    });
  });

  it('should be in default state', () => {
    const state = store.getState();
    expect(state.plants.loading).toBe('idle');
    expect(state.plants.plants).toEqual([]);
  });

  it('should retrieve plants', async () => {
    plantGateway.initWithData();
    const trackedStates = await trackLoadingStates(
      store,
      {
        plantsLoading: (state: StoreState) => state.plants.loading,
      },
      () => store.dispatch(retrievePlantUseCase()),
    );
    expect(trackedStates.plantsLoading).toEqual(['idle', 'pending', 'success']);
    expect(store.getState().plants.plants.length).toEqual(plantsDatabase.length);
  });
});
