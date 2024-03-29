import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './components/home/home'
import Lolleague from './components/lolleague/lolleague'
import NavBottomBar from './components/navigation_bottombar/navigation_bottombar'
import Test from './test'
import ReactGA from 'react-ga';

const root = ReactDOM.createRoot(document.getElementById('root'));
const TRACKING_ID = "G-N3TTHRE5ZC"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);
root.render(
    <BrowserRouter>
      <NavBottomBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/br/thrive" element={<Lolleague />}></Route>
        <Route path="/test" element={
          <Test></Test>
        }></Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
