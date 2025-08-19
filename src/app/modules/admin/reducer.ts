import type { AdminState, AdminAction } from './types';

export const adminInitial: AdminState = {
  modalOpen: false,
  mode: 'create',
  editingMemberId: null,
};

export const adminReducer = (state: AdminState, action: AdminAction): AdminState => {
  switch (action.type) {
    case 'OPEN_CREATE':
      return { modalOpen: true, mode: 'create', editingMemberId: null };
    case 'OPEN_EDIT':
      return { modalOpen: true, mode: 'edit', editingMemberId: action.payload.memberId };
    case 'CLOSE_MODAL':
      return { ...state, modalOpen: false, editingMemberId: null };
    default:
      return state;
  }
};
