import { Store } from '@reduxjs/toolkit';

export const observeStore = <State, SelectedState>(
  store: Store<State>,
  select: (state: State) => SelectedState,
  onChange: (selectedState: SelectedState) => void,
): (() => void) => {
  let currentState: SelectedState;

  const handleChange = () => {
    const nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  };

  const unsubscribe = store.subscribe(handleChange);
  handleChange();

  return unsubscribe;
};
