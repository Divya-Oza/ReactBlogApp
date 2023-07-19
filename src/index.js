import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Test from './testreact';
import Mytest from './mytest';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const CarID=42;
// console.log(CarID);
// function sendCars(day,...CarID)
// {
//   CarID.forEach(id=>console.log(id));
//   console.log(day);
// }
//sendCars('Monday',1,2,3);
// let CarID =[100,200,300];
// let[,...theRest]=CarID;
// console.log(theRest);
root.render(
  <React.StrictMode>
    <App/>
        {/* <Depart></Depart> */}
    <Mytest/>
    {/* <mytest1></mytest1> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
