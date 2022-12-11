import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Center from './components/Center';
import Footer1 from './components/Footer1';
import Border1 from './components/Border1';
import Table1 from './components/Table1';
import Table2 from './components/Table2';
import Table3 from './components/Table3';
import Table4 from './components/Table4';
import Border2 from './components/Border2';
import Footer2 from './components/Footer2';
import Footer3 from './components/Footer3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Center/>
    <Footer1/>
    <Border1/>
    <Table1/>
    <Table2/>
    <Table3/>
    <Table4/>
    <Border2/>
    <Footer2/>
    <Footer3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();