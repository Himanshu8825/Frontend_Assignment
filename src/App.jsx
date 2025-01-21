import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login } from './Index';

const App = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" replace />;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
    </Routes>
  );
};

export default App;
