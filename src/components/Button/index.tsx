// Styles
import { CustomButton } from './styled';

type TVariant = 'contained' | 'outlined' | 'text';
type TButtonType = 'button' | 'submit' | 'reset';

interface ICustomButton {
  variant: TVariant;
  text: string;
  type: TButtonType;
  handleClick?: () => void;
}

const Button = ({ variant, text, type, handleClick }: ICustomButton) => (
  <CustomButton variant={variant} type={type} onClick={handleClick}>
    {text}
  </CustomButton>
);

export default Button;
