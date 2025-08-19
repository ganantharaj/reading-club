export type Member = {
  id: number;
  email: string;
  joinedAt: string;
  photoUrl: string;
  books: number[];
};

export type MembersState = {
  items: Member[];
  loading: boolean;
  error: string | null;
};

export type MembersAction =
  | { type: 'LOAD_MEMBERS'; payload: Member[] }
  | { type: 'ADD_MEMBER'; payload: Member }
  | { type: 'UPDATE_MEMBER'; payload: Member }
  | { type: 'DELETE_MEMBER'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

export const MembersActionType = {
  LOAD_MEMBERS: 'LOAD_MEMBERS',
  ADD_MEMBER: 'ADD_MEMBER',
  UPDATE_MEMBER: 'UPDATE_MEMBER',
  DELETE_MEMBER: 'DELETE_MEMBER',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
} as const;
