// Absolute imports
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

// Store
import { login } from '@/store/slice/authUser';
import { RootState } from '@/store';

// Components
import { Button, Input, Loader, Notice, Registration } from '@/components';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

// Helpers
import { signInSchema } from '@/helpers/schema';
import { errorMessage } from '@/helpers/errorMessage';

// Assets
import Logotype from '../../assets/logo.png';
import Show from '../../assets/show.png';
import Hide from '../../assets/hidden.png';

// Styles
import { Form, FormWrapper, HiddenBtn, Icon, TextBlock, Title } from './styled';

interface IFormInputs {
  displayName?: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(signInSchema),
  });

  const [isShowPassword, setIsShowPassword] = useState({ current: false, confirm: false });
  const [isShowRegistration, setIsShowRegistration] = useState(false);

  const { error, loading } = useSelector((state: RootState) => state.userReducer);
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: IFormInputs) => {
    dispatch(login(data)).then(() => {
      navigate('/home');
    });
  };

  const handleClickShowPassword = (e: React.MouseEvent<HTMLButtonElement>, value: boolean) => {
    e.stopPropagation();
    setIsShowPassword({ ...isShowPassword, [e.currentTarget.name]: value });
  };

  const handleShowRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsShowRegistration((prevState) => !prevState);
  };

  if (loading) return <Loader />;

  return (
    <>
      {isShowRegistration ? (
        <Registration />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <img src={Logotype} alt='logo' />
          <Title fontSize='56px'>SIGN IN</Title>
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
                  type={isShowPassword.current ? 'text' : 'password'}
                  field={field}
                  id='password'
                  size='small'
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
            <Button type='submit' variant='contained' text='Sign In' />
            <TextBlock>
              Don’t have account yet?
              <HiddenBtn onClick={handleShowRegistration} type='button'>
                New Account
              </HiddenBtn>
            </TextBlock>
            {error ? <Notice message={errorMessage.login} /> : null}
          </FormWrapper>
        </Form>
      )}
    </>
  );
};

export default Login;
