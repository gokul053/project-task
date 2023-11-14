import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import store from './redux/store';
import setupInterceptors from './globals/interceptors';
import 'react-toastify/dist/ReactToastify.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#de342f'
               },
    secondary: {
      main: "#ffcc80"
                }
           }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
setupInterceptors(store);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
