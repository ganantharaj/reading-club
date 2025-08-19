import MuiCard, { type CardProps } from '@mui/material/Card';
import MuiCardContent, { type CardContentProps } from '@mui/material/CardContent';
import MuiCardActions, { type CardActionsProps } from '@mui/material/CardActions';

export const Card = (p: CardProps) => <MuiCard elevation={2} {...p} />;
export const CardContent = (p: CardContentProps) => <MuiCardContent {...p} />;
export const CardActions = (p: CardActionsProps) => <MuiCardActions {...p} />;
