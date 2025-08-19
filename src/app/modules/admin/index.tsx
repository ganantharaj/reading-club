/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer, type Dispatch, type ReactNode } from 'react';
import { adminInitial, adminReducer } from './reducer';

type StateContext = {
  state: any;
};

type DispatchContext = {
  dispatch: Dispatch<any>;
};

const AdminStateContext = createContext<StateContext | undefined>(undefined);
const AdminDispatchContext = createContext<DispatchContext | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, adminInitial);

  return (
    <AdminStateContext.Provider value={{ state }}>
      <AdminDispatchContext.Provider value={{ dispatch }}>{children}</AdminDispatchContext.Provider>
    </AdminStateContext.Provider>
  );
};

export const useAdminStateContext = () => {
  const stateContext = useContext(AdminStateContext);

  if (!stateContext) {
    throw new Error('useAdminStateContext should be wrapped under Admin Provider');
  }

  const { state } = stateContext;
  return { ...state };
};

export const useAdminDispatchContext = () => {
  const dispatchContext = useContext(AdminDispatchContext);

  if (!dispatchContext) {
    throw new Error('useAdminDispatchContext should be wrapped under Admin Provider');
  }

  const { dispatch } = dispatchContext;
  return dispatch;
};
