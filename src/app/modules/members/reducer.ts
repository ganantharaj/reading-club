import { MOCK_DATA } from '../../constants';
import { type MembersState, type MembersAction, type Member, MembersActionType } from './types';

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

export const loadMembers = (payload: Member[]): MembersAction => ({
  type: MembersActionType.LOAD_MEMBERS,
  payload,
});

export const deleteMember = (id: number): MembersAction => ({
  type: MembersActionType.DELETE_MEMBER,
  payload: id,
});

export const setMembersLoading = (flag: boolean): MembersAction => ({
  type: MembersActionType.SET_LOADING,
  payload: flag,
});

export const setMembersError = (msg: string | null): MembersAction => ({
  type: MembersActionType.SET_ERROR,
  payload: msg,
});
