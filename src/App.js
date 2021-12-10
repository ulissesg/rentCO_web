import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from './components/Clients/Clients';
import CreateClient from './components/CreateClient/CreateClient';
import Client from './components/ClientInfo/ClientInfo';

function App() {
  return (
      <BrowserRouter>
        <Menu />
        <Routes>
            <Route exact path="/clientes" element={ <Clients />} /> 
            <Route exact path="/criar-cliente" element={ <CreateClient />} /> 
            <Route exact path="/client/:id" element={< Client />} />
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
