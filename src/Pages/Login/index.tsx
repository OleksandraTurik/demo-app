import { Button, Input } from '@/components/Form';
import { signInSchema } from '@/helpers/schema';
import { login } from '@/store/slice/authUser';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormWrapper } from '../styled';
import Logo from '../../assets/logo.png';

interface IFormInputs {
  username: string;
  password: string;
}

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(signInSchema),
  });

  //   const { registrationSuccess, error, loading } = useSelector((state: any) => state.userReducer);
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    dispatch(login(data));
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <img src={Logo} alt='logo' />
        <h1>SIGN IN</h1>
        <FormWrapper>
          <Controller
            name='username'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <Input
                field={field}
                label='User Name'
                variant='standard'
                id='username'
                size='small'
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
          <Button type='submit' variant='contained' text='Sign In' />
        </FormWrapper>
      </Form>
    </div>
  );
};

export default Login;
