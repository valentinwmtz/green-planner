import { Store } from '@reduxjs/toolkit';
import { observeStore } from './storeObserver';

export const trackLoadingStates = async <State, T extends Record<string, unknown>>(
  store: Store<State>,
  stateAccessors: { [K in keyof T]: (state: State) => T[K] },
  action: () => Promise<void>,
): Promise<{ [K in keyof T]: T[K][] }> => {
  const results: { [K in keyof T]: T[K][] } = Object.keys(stateAccessors).reduce(
    (acc, key) => {
      acc[key as keyof T] = [];
      return acc;
    },
    {} as { [K in keyof T]: T[K][] },
  );

  const unsubscribers: (() => void)[] = [];

  Object.entries(stateAccessors).forEach(([key, accessor]) => {
    const unsubscribe = observeStore(store, accessor, (value) => {
      results[key as keyof T].push(value as T[keyof T]);
    });
    unsubscribers.push(unsubscribe);
  });

  await action();

  unsubscribers.forEach((unsubscribe) => unsubscribe());

  return results;
};
