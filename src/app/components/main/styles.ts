import styled from 'styled-components';
import { Card } from '../ui/Card';

export const HoverCard = styled(Card)`
  &:hover {
    transform: translateY(-3px) scale(1.01);
  }
`;
