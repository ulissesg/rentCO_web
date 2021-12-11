import React, { useState, useEffect } from "react";
import Select from 'react-select';
import api from "../../services/api";
import '../CreateClient/createClient.css'

export default function Rent (){
    const [clients, setClients] = useState([]);
    const [products, setProducts] = useState([]);
    const [productValue, setProductValue] = useState();
    const [client, setClient] = useState();
    const [message, setMessage] = useState();
    const [clientId, setClientId] = useState("");
    const [productId, setProductId] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [pickUpDate, setPickUpDate] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        api.get('/product/' + productId)
        .then((response) => setProductValue(response.data.product.price))
        .catch((err) => console.log('the following error ocurred while listing the clients: ' + err.message))
    }, [productId])

    useEffect(() => {
        api.get('/client/' + clientId)
        .then((response) => setClient(response.data.client))
        .catch((err) => console.log('the following error ocurred while listing the clients: ' + err.message))
    }, [clientId])

    useEffect(() => {
        api.get('/client/list')
        .then((response) => setClients(response.data.clients))
        .catch((err) => console.log('the following error ocurred while listing the clients: ' + err.message))
    }, [])

    useEffect(() => {
    api.get('/product/list')
        .then((response) => setProducts(response.data.products))
        .catch((err) => console.log('the following error ocurred while listing the products: ' + err.message))
    }, [])

    function createRent (event){
        const price = (productValue - ((productValue * client.clientType) / 100));
        event.preventDefault();
        if(clientId !== "" && productId !== "" && deliveryDate !== "" ){
            api.post('/rent/create',{
                "clientId": clientId,
                "productId": productId,
                "deliveryDate": deliveryDate,
                "pickUpDate": pickUpDate,
                "price": price
            })
            .then((response) => {
                setMessage('Locação criada com sucesso, ' + price + ' reais foi adiconado ao saldo do(a) cliente: ' + client.name);
                api.post('/client/update/' + client._id,{
                    "name": client.name,
                    "telephone": client.telephone,
                    "address": client.address,
                    "clientType": client.clientType,
                    "balance": (client.balance + price)
                })
            })
            .catch((err) => {
                setMessage("Algo não saiu como esperado");
            })
        }else{
            setMessage('Algum dos campos obrigatorios nao foi preenchidos corretamente')
        }
    }
     

  return (
    <form onSubmit={createRent}>
          <div className="message">
              {message}
          </div>
          <div className="form">
              <div className="lif">
                  <div className="sublif">
                        <label>Clientes</label>
                        <select name="client id" value={clientId} onChange={event => setClientId(event.target.value)}>
                            {clients.map(client => (
                            <option value={client._id}>{client.name}</option>
                            ))}
                        </select>
                  </div>
                  
              </div>
              
              <div className="lif">
                  <div className="sublif">
                        <label>Produtos</label>
                        <select name="product id" value={productId} onChange={event => setProductId(event.target.value)}>
                            {products.map(product => (
                            <option value={product._id}>{product.code}-{product.description}</option>
                            ))}
                        </select>
                  </div>

              </div>
              
              <div className="lif">
                  <div className="sublif">
                      <label>Data de entrega</label>
                      <input 
                            type={'date'}
                            id="dataEntrega" 
                            value={deliveryDate}
                            onChange={event => setDeliveryDate(event.target.value)}
                      />
                  </div>

              </div>
              
              <div className="lif"> 
                  <div className="sublif">
                      <label>Data de retirada</label>
                      <input 
                        type={'date'}
                          id="dataRetirada"
                          value={pickUpDate}
                          onChange={event => setPickUpDate(event.target.value)}
                      />
                  </div>
              </div>
              
              <div className="lif"><button type="submit">Criar</button></div>
              
          </div>
       
    </form>
)
}
