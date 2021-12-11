import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import api from "../../services/api";
import './clientInfo.css';



export default function ClientInfo (){
    
    const [client, setClient] = useState([]);

    function deletar(_id){
        const url = '/client/delete/' + _id
        api.get(url)
            .then((response) => {
                setClient(response.data.client)
                setMessage('cliente excluido com sucesso')
            })
            .catch((err) => console.log('the following error ocurred while listing the clients: ' + err.message))
    }
    
    const { id } = useParams();
    const  url  = '/client/' + id;
    const [message, setMessage] = useState();
  
  
    useEffect(() => {
      api.get(url)
        .then((response) => {
            setClient(response.data.client);
        })
        .catch((err) => console.log('the following error ocurred while listing the clients: ' + err.message))
    },[url])
    
    if(client != null){
        return (
            <div className="client">
                {message}
                <div className="subClient">
                    <p>ID: { client._id }</p>
                    <p>Nome: {client.name}</p>
                    <p>Telefone:  {client.telephone}</p>
                    <p>Endereço:  {client.address}</p>
                    <p>Tipo:  {client.clientType}</p>
                    <p>Saldo:  {client.balance}</p>
                </div>
                <div className="subClient">
                    <button onClick={() => {deletar(client._id)}}>Deletar</button>
                    <Link to={{
                        pathname: '/client/update/' + client._id
                    }}><button>Editar </button></Link>
                                          
                </div>
            </div>
        )
      }
    return(
        <div className="client">Cliente não encontrado</div>
    )
}



    

