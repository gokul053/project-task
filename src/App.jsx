import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import HeaderPage from './page/HeaderPage';
import FooterPage from './page/FooterPage';
import PrivateRoute from './PrivateRoute';
import { ToastContainer } from 'react-toastify';

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
      <>
        <ToastContainer 
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <Outlet />
      </>
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
