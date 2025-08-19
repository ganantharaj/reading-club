/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react';
import { initialState, reducer } from './reducer';

type StateContext = {
  state: any;
};

type DispatchContext = {
  dispatch: Dispatch<any>;
};

const MainStateContext = createContext<StateContext | undefined>(undefined);
const MainDispatchContext = createContext<DispatchContext | undefined>(undefined);

export const MainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainStateContext.Provider value={{ state }}>
      <MainDispatchContext.Provider value={{ dispatch }}>{children}</MainDispatchContext.Provider>
    </MainStateContext.Provider>
  );
};

export const useMainStateContext = () => {
  const stateContext = useContext(MainStateContext);

  if (!stateContext) {
    throw new Error('useMainStateContext should be wrapped under Main Provider');
  }

  const { state } = stateContext;
  return { ...state };
};

export const useMainDispatchContext = () => {
  const dispatchContext = useContext(MainDispatchContext);

  if (!dispatchContext) {
    throw new Error('useMainDispatchContext should be wrapped under Main Provider');
  }

  const { dispatch } = dispatchContext;
  return dispatch;
};
