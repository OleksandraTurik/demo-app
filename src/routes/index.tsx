import { Route, Routes } from 'react-router-dom';
import Home from '@/Pages/Home';
import Auth from '@/Pages/Auth';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='auth' element={<Auth />} />
      <Route path='home' element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
