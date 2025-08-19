/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAdminDispatchContext, useAdminStateContext } from '../../modules/admin';

export const AdminPage = () => {
  const state = useAdminStateContext();
  const dispatch = useAdminDispatchContext();
  return <div>This is the admin page</div>;
};
