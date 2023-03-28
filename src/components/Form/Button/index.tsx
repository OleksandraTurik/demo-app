import { CustomButton } from './styled';

type TVariant = 'contained' | 'outlined' | 'text';
type TButtonType = 'button' | 'submit' | 'reset';

interface ICustomButton {
  variant: TVariant;
  text: string;
  type: TButtonType;
}

const Button = ({ variant, text, type }: ICustomButton) => {
  return (
    <CustomButton variant={variant} type={type}>
      {text}
    </CustomButton>
  );
};

export default Button;
