/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type Dispatch,
  type ReactNode,
} from 'react';
import { membersInitial, membersReducer } from './reducer';

type StateContext = {
  state: any;
};

type DispatchContext = {
  dispatch: Dispatch<any>;
};

const MembersStateContext = createContext<StateContext | undefined>(undefined);
const MembersDispatchContext = createContext<DispatchContext | undefined>(undefined);

export const MembersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(membersReducer, membersInitial);

  useEffect(() => {
    // gautham -> fetch the members list and set it in the state or dispatch
  }, []);

  return (
    <MembersStateContext.Provider value={{ state }}>
      <MembersDispatchContext.Provider value={{ dispatch }}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};

export const useMembersStateContext = () => {
  const stateContext = useContext(MembersStateContext);

  if (!stateContext) {
    throw new Error('useMembersStateContext should be wrapped under Members Provider');
  }

  const { state } = stateContext;
  return { ...state };
};

export const useMembersDispatchContext = () => {
  const dispatchContext = useContext(MembersDispatchContext);

  if (!dispatchContext) {
    throw new Error('useMembersDispatchContext should be wrapped under Members Provider');
  }

  const { dispatch } = dispatchContext;
  return dispatch;
};
