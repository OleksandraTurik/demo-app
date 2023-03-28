import { Button, Input } from '@/components/Form';
import { signUpSchema } from '@/helpers/schema';
import { registration } from '@/store/slice/authUser';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Form } from '../styled';
import Logo from '../../assets/logo.png';

interface IFormInputs {
  displayName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Registration = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(signUpSchema),
  });

  //   const { registrationSuccess, error, loading } = useSelector((state: any) => state.userReducer);
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const onSubmit = (data: IFormInputs) => {
    dispatch(registration(data));
    console.log(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <img src={Logo} alt='logo' />
      <h1>SIGN UP</h1>
      <Controller
        name='displayName'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Input
            field={field}
            label='Full Name'
            variant='standard'
            id='fullName'
            size='small'
            error={!!errors.displayName}
            helperText={errors.displayName?.message}
          />
        )}
      />
      <Controller
        name='username'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Input
            field={field}
            id='username'
            size='small'
            label='User Name'
            variant='standard'
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Input
            field={field}
            id='password'
            size='small'
            label='Password'
            variant='standard'
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
      />
      <Controller
        name='confirmPassword'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <Input
            field={field}
            id='confirmPassword'
            size='small'
            label='Confirm Password'
            variant='standard'
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
      />

      <Button type='submit' variant='contained' text='Sign Up' />
    </Form>
  );
};

export default Registration;

//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };
