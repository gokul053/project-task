import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import PrivateRoute from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
import LayoutProvider from './page/Layout';
import UserInterest from './page/UserInterest';

const App = () => {
  const checkLocalStorage = () => {
    if (
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
      <Routes>
        <Route element={<Wrapper />}>
          <Route element={<LayoutProvider />} >
            <Route path='/' element={<HomePage />} />
            <Route element={<PrivateRoute isAuth={checkLocalStorage()} />}>
              <Route path='/hello' element={<UserInterest />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
export default App;
