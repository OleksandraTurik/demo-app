import Home from '@/Pages/Home';
import Login from '@/Pages/Login';
import Registration from '@/Pages/Registration';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='home' element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
