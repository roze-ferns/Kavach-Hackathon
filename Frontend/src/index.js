import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App';
import Home from './home';
import LogIn from './login';
import FaceR from './Face_Recognition.js';
import ANPR from './ANPR.js';
import reportWebVitals from './reportWebVitals';

const WebPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/facerecognition" element={<FaceR />} />
        <Route path="/automatic-number-plate-recognition" element={<ANPR />} />
        {/* <Route path="/PGCountryNames/:name" element={<PostGraduationCountry />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WebPages />
    {/* <FaceR /> */}
    {/* <ANPR /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
