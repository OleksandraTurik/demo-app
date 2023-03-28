import { Button } from '@/components/Form';
import Logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div>
      <img src={Logo} alt='logo' />
      <h1>Congratulations</h1>
      <p>
        Now you are on the main page. Soon we will provide you with detailed feedback on the result
        of your work
      </p>
      <Button text='Log Out' type='button' variant='contained' />
    </div>
  );
};

export default Home;
