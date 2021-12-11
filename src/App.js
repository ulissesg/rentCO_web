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
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import Rents from './components/Rents/Rents';
import CreateRent from './components/CreateRent/CreateRent';
import RentInfo from './components/RentInfo/RentInfo';
import UpdateRent from './components/UpdateRent/UpdateRent';


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
            <Route exact path='/locacoes' element={< Rents />} />
            <Route exact path='/locacoes/:id' element={< RentInfo />} />
            <Route exact path='/criar-locacao' element={< CreateRent />} />
            <Route exact path='/' element={<Products />} />
            <Route exact path='/locacao/update/:id' element={< UpdateRent />} />
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
