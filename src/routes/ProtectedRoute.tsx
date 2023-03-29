import { tokenService } from '@/services/tokenService';
import { useNavigate } from 'react-router-dom';

interface IProtectedRoute {
  children: any;
}

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const navig = useNavigate();
  const auth = tokenService.getAccessToken();
  if (!auth) {
    navig('/auth');
  }

  return children;
};

export default ProtectedRoute;
