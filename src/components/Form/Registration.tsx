// Absolute imports
import { useState } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

// Store
import { registration } from '@/store/slice/authUser';

// Components
import { Button, Input, Loader, Login, Notice } from '@/components';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IconButton } from '@material-ui/core';

// Helpers
import { signUpSchema } from '@/helpers/schema';
import { errorMessage } from '@/helpers/errorMessage';

// Assets
import Logotype from '../../assets/logo.png';
import Show from '../../assets/show.png';
import Hide from '../../assets/hidden.png';

// Styles
import { Form, FormWrapper, HiddenBtn, P, Title } from '@/Pages/styled';
import { Icon } from './styled';

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

  const [isShowPassword, setIsShowPassword] = useState({ current: false, confirm: false });
  const [isShowComponent, setIsShowComponent] = useState(false);

  const { registrationSuccess, error, loading } = useSelector((state: any) => state.userReducer);
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  if (registrationSuccess) return <Login />;
  if (loading) return <Loader />;

  const onSubmit = (data: IFormInputs) => {
    dispatch(registration(data));
    console.log(data);
    reset();
  };

  const handleShowComponent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    return setIsShowComponent((prevState) => !prevState);
  };

  const handleClickShowPassword = (e: React.MouseEvent<HTMLButtonElement>, value: boolean) => {
    console.log(isShowPassword);
    e.stopPropagation();
    setIsShowPassword({ ...isShowPassword, [e.currentTarget.name]: value });
  };

  return (
    <div>
      {isShowComponent ? (
        <Login />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <img src={Logotype} alt='logo' />
          <Title>SIGN UP</Title>
          <FormWrapper>
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
                  type={isShowPassword.current ? 'text' : 'password'}
                  field={field}
                  id='password'
                  size='small'
                  // name='password'
                  label='Password'
                  variant='standard'
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          name='current'
                          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            handleClickShowPassword(e, !isShowPassword.current)
                          }
                        >
                          {isShowPassword.current ? (
                            <Icon src={Show} alt='hide' />
                          ) : (
                            <Icon src={Hide} alt='show' />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Controller
              name='confirmPassword'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Input
                  type={isShowPassword.confirm ? 'text' : 'password'}
                  field={field}
                  id='confirmPassword'
                  size='small'
                  label='Confirm Password'
                  variant='standard'
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          name='confirm'
                          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            handleClickShowPassword(e, !isShowPassword.confirm)
                          }
                        >
                          {isShowPassword.current ? (
                            <Icon src={Show} alt='hide' />
                          ) : (
                            <Icon src={Hide} alt='show' />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Button type='submit' variant='contained' text='Sign Up' />
            {error ? <Notice message={errorMessage.registration} /> : null}
            <P>
              I have an account.
              <HiddenBtn onClick={handleShowComponent} type='button'>
                Go to Sign in
              </HiddenBtn>
            </P>
          </FormWrapper>
        </Form>
      )}
    </div>
  );
};

export default Registration;
