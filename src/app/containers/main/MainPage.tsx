import { Typography } from '@mui/material';
import { MemberCard } from '../../components/main/MemberCard';
import { useMembersStateContext } from '../../modules/members';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

export const MainPage = () => {
  const { loading, items } = useMembersStateContext();

  console.log(`loading`, loading);
  console.log(`items`, items);

  return (
    <div>
      <Box p={2}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} gap={2}>
          <Typography variant="h5">Members ({items.length})</Typography>
        </Stack>

        <Grid container spacing={2}>
          {items.map((member: any) => (
            //Gautham --> Need to write a custom function to fetch all book of the specefic member
            <MemberCard member={member} bookTitles={['book1', 'book2']} />
          ))}
        </Grid>
      </Box>
    </div>
  );
};
