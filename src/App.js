import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from './components/Clients/Clients';
import CreateClient from './components/CreateClient/CreateClient';
import Client from './components/ClientInfo/ClientInfo';
import UpdateClient from './components/UpdateClient/UpdateClient';
import Products from './components/Products/Products';
import ProductInfo from './components/ProductInfo/ProductInfo';
import CreateProduct from './components/CreateProduct/CreateProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct'


function App() {
  return (
      <BrowserRouter>
        <Menu />
        <Routes>
            <Route exact path="/clientes" element={ <Clients />} /> 
            <Route exact path="/criar-cliente" element={ <CreateClient />} /> 
            <Route exact path="/client/:id" element={< Client />} />
            <Route exact path="/client/update/:id" element={< UpdateClient />} />
            <Route exact path='/produtos' element={<Products />} />
            <Route exact path='/product/:id' element={< ProductInfo />} />
            <Route exact path='/criar-produto' element={< CreateProduct />} />
            <Route exact path='/product/update/:id' element={< UpdateProduct />} />
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
