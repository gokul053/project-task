import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import HeaderPage from './page/HeaderPage';
import FooterPage from './page/FooterPage';

const App = () => {
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
        </Route>
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
