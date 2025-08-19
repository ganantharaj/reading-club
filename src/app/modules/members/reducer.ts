import { MOCK_DATA } from '../../constants';
import type { MembersState, MembersAction } from './types';

export const membersInitial: MembersState = {
  items: MOCK_DATA.members,
  loading: false,
  error: null,
};

export const membersReducer = (state: MembersState, action: MembersAction): MembersState => {
  switch (action.type) {
    case 'LOAD_MEMBERS':
      return { ...state, items: action.payload, loading: false };
    case 'ADD_MEMBER':
      return { ...state, items: [...state.items, action.payload] };
    case 'UPDATE_MEMBER':
      return {
        ...state,
        items: state.items.map((m) => (m.id === action.payload.id ? action.payload : m)),
      };
    case 'DELETE_MEMBER':
      return { ...state, items: state.items.filter((m) => m.id !== action.payload) };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
