import React, { useMemo } from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import { Typography } from '../ui/Typography';
import { MOCK_DATA } from '../../constants';

const Row = styled(Paper)`
  border-radius: var(--radius);
  padding: 12px 14px;
`;

type Props = {
  memberId: number;
  onEdit: () => void;
};

export const MemberListItem = ({ memberId, onEdit }: Props) => {
  const state = MOCK_DATA.members;

  const member = useMemo(() => state.find((m) => m.id === memberId), [state, memberId]);
  if (!member) return null;

  return (
    <Row elevation={1}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={1.25}>
          <Avatar src={member.photoUrl} alt={member.email} />
          <div>
            <Typography variant="body1">{member.email}</Typography>
            <Typography variant="caption" color="text.secondary">
              Joined {new Date(member.joinedAt).toLocaleDateString()}
            </Typography>
          </div>
        </Stack>

        <Stack direction="row" gap={0.5}>
          <IconButton aria-label="edit" onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => {
              console.log('Delete clicked');
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Row>
  );
};
