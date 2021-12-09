import React from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Client from './components/Client';

function App() {
  return (
      <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/client" element={ <Client />} /> 
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
