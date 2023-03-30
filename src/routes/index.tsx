// Absolute imports
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from '@/containers/Home';
import Auth from '@/containers/Auth';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Auth />} />
    <Route path='/auth' element={<Auth />} />
    <Route path='/home' element={<Home />} />
  </Routes>
);

export default AppRoutes;
