import React from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from './components/Clients';
import CreateClient from './components/CreateClient';

function App() {
  return (
      <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/clientes" element={ <Clients />} /> 
            <Route path="/criar-cliente" element={ <CreateClient />} /> 
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
