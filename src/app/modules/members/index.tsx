/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type Dispatch,
  type ReactNode,
} from 'react';
import {
  deleteMember,
  loadMembers,
  membersInitial,
  membersReducer,
  setMembersError,
  setMembersLoading,
} from './reducer';
import { MOCK_DATA } from '../../constants';

type StateContext = {
  state: any;
};

type DispatchContext = {
  dispatch: Dispatch<any>;
  fetchAll: () => void;
  remove: (id: number) => void;
};

const MembersStateContext = createContext<StateContext | undefined>(undefined);
const MembersDispatchContext = createContext<DispatchContext | undefined>(undefined);

export const MembersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(membersReducer, membersInitial);

  // For now mocked the data in-memory
  const fetchAll = async () => {
    dispatch(setMembersLoading(true));
    try {
      dispatch(loadMembers(MOCK_DATA.members));
    } catch (e: any) {
      dispatch(setMembersError(e?.message ?? 'Failed to fetch members'));
    } finally {
      dispatch(setMembersLoading(false));
    }
  };

  const remove = (id: number): void => {
    dispatch(deleteMember(id));
  };
  useEffect(() => {
    // gautham -> fetch the members list and set it in the state or dispatch
    fetchAll();
  }, []);

  return (
    <MembersStateContext.Provider value={{ state }}>
      <MembersDispatchContext.Provider value={{ dispatch, fetchAll, remove }}>
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

  return { ...dispatchContext };
};
