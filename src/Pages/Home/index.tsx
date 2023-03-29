import { Button, Loader } from '@/components';
import Logotype from '../../assets/logo.png';
import Image from '../../assets/vector.png';
import Decor from '../../assets/decor.png';
import { Container, Description, Firework, InfoWrapper, Logo, Title, Wrapper } from '../styled';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/store/slice/authUser';

const Home = () => {
  const { loading } = useSelector((state: any) => state.userReducer);
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const navigate = useNavigate();
  if (loading) return <Loader />;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth', { replace: true });
  };

  return (
    <Container>
      <Logo src={Logotype} alt='logo' />
      <InfoWrapper>
        <Wrapper>
          <Title>Congratulations</Title>
          <Firework src={Decor} alt='Fireworks' />
        </Wrapper>
        <Description>
          Now you are on the main page. Soon we will provide you with detailed feedback on the
          result of your work
        </Description>
        <Button text='Log Out' type='button' variant='contained' handleClick={handleLogout} />
        <img src={Image} alt='people' />
      </InfoWrapper>
    </Container>
  );
};

export default Home;
