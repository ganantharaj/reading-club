export type AdminMode = 'create' | 'edit';

export type AdminState = {
  modalOpen: boolean;
  mode: AdminMode;
  editingMemberId: number | null;
};

export type AdminAction =
  | { type: 'OPEN_CREATE' }
  | { type: 'OPEN_EDIT'; payload: { memberId: number } }
  | { type: 'CLOSE_MODAL' };
