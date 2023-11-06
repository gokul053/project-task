import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import HeaderPage from './page/HeaderPage';
import FooterPage from './page/FooterPage';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const checkLocalStorage = () => {
    if(
      localStorage.getItem('accessToken') &&
      localStorage.getItem('refreshToken')
    )
    return true;
    else
    return false;
  }
  const Wrapper = () => {
    return (
      <div className="wrapper">
        <Outlet />
      </div>
    );
  };
  return (
    <>
      <HeaderPage />
      <Routes>
        <Route element={<Wrapper/>}>
          <Route path='/' element={<HomePage />} />
          <Route element={<PrivateRoute isAuth={checkLocalStorage()} />}>
            
          </Route>
        </Route>
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
