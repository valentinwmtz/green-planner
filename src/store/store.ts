import { Action, configureStore, Store, ThunkAction, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable';
import { Gateways } from '../config/portsConfiguration.ts';
import { plannerReducer } from '../features/planner/core-logic/reducers/plannerReducer.ts';
import { plantsReducer } from '../features/planner/core-logic/reducers/plantsReducer.ts';
import { AllActions } from './AllActions.ts';
import { StoreState } from './storeState.ts';

export const AllEpics: Epic<AllActions, AllActions, StoreState, Gateways> = combineEpics();
export type InitReduxStoreReturnType = ReturnType<typeof initReduxStore>;

export const initReduxStore = (
  config: {
    gateways?: Partial<unknown>;
    epics?: Epic<AllActions, AllActions, StoreState, Gateways>;
  } = {
    gateways: undefined,
    epics: AllEpics,
  },
) => {
  const epicMiddleware = createEpicMiddleware<AllActions, AllActions, StoreState, Gateways>();

  const store = configureStore({
    reducer: {
      planner: plannerReducer,
      plants: plantsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: config.gateways,
        },
        serializableCheck: false,
      }).concat(epicMiddleware),
    devTools: true,
  });

  if (config?.epics) epicMiddleware.run(config.epics);

  return store;
};

export type ReduxStore = Store<StoreState> & {
  dispatch: ThunkDispatch<StoreState, Gateways, Action>;
};

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreState, Gateways, UnknownAction>;
export type AppDispatch = ThunkDispatch<StoreState, Gateways, Action>;
