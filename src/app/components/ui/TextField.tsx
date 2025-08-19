import MuiTextField, { type TextFieldProps } from '@mui/material/TextField';

export const TextField = (props: TextFieldProps) => (
  <MuiTextField size="small" fullWidth {...props} />
);
