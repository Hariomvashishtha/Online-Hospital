import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider >
    <ToastContainer theme="dark" position="top-right" autoClose={3000} closeOnClick pauseOnHover={false} />
    <App />

    </AuthContextProvider>
   
    </BrowserRouter>
   
  </React.StrictMode>,
)
