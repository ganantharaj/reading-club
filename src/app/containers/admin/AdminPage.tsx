/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '../../components/ui/Button';
import { Typography } from '../../components/ui/Typography';
import { MOCK_DATA } from '../../constants';
import { useAdminDispatchContext, useAdminStateContext } from '../../modules/admin';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { MemberListItem } from '../../components/admin/MemberListItem';

export const AdminPage = () => {
  const members = MOCK_DATA.members;
  const state = useAdminStateContext();
  const dispatch = useAdminDispatchContext();

  return (
    <Box padding={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">Admin</Typography>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="body2">Total: {members.length}</Typography>
          <Button onClick={() => dispatch({ type: 'OPEN_CREATE' })}>Add Member</Button>
        </Stack>
      </Stack>

      <Divider />

      <Stack gap={1.25} marginTop={2} sx={{ maxHeight: 'calc(100vh - 180px)', overflow: 'auto' }}>
        {members.map((member) => (
          <MemberListItem
            key={member.id}
            memberId={member.id}
            onEdit={() => {
              console.log('Edit handler');
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};
