import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './Assets/css/fonts.css'
import './Assets/css/style.css'
// import './Assets/css/swiper-bundle.min.css'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "./Style/tailindex.css" 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

