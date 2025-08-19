import Box from '@mui/material/Box';
import { CardContent } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { HoverCard } from './styles';

// Gautham need to add styles for the Card and add avatar
export const MemberCard = ({ member, bookTitles }: { member: any; bookTitles: string[] }) => (
  <Box position="relative">
    <HoverCard>
      <CardContent>
        <Typography variant="body2">{member.email}</Typography>
        <Typography variant="caption">
          Joined {new Date(member.joinedAt).toLocaleDateString()}
          {bookTitles}
        </Typography>
      </CardContent>
    </HoverCard>
  </Box>
);
