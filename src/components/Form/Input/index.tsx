import { CustomInput } from './styled';

// Types
type TError = boolean;
type TVariant = 'outlined' | 'filled' | 'standard';
type TSize = 'small' | 'medium';

interface IInputProps {
  id: string;
  variant: TVariant;
  label: string;
  helperText?: string;
  error?: TError;
  inputProps?: any;
  size: TSize;
  field: any;
}

const Input = ({ field, label, helperText, ...rest }: IInputProps) => (
  <CustomInput {...field} label={label} helperText={helperText} {...rest} />
);

export default Input;
