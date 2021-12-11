import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import api from "../../services/api";
import '../ClientInfo/clientInfo.css';



export default function RentInfo (){
    
    const [rent, setRent] = useState([]);

    function deletar(_id){
        const url = '/rent/delete/' + _id
        api.get(url)
            .then((response) => {
                setRent(response.data.rent)
                setMessage('Locação excluida com sucesso')
            })
            .catch((err) => console.log('the following error ocurred while listing the rents: ' + err.message))
    }
    
    const { id } = useParams();
    const  url  = '/rent/' + id;
    const [message, setMessage] = useState();
  
  
    useEffect(() => {
      api.get(url)
        .then((response) => {
            setRent(response.data.rent);
        })
        .catch((err) => console.log('the following error ocurred while listing the rent: ' + err.message))
    },[url])

    if(rent != null){
        return (
            <div className="client">
                {message}
                <div className="subClient">
                    <p>Cliente: {rent.clientId}</p>
                    <p>Produto:  {rent.productId}</p>
                    <p>Data de Entrega:  {rent.deliveryDate}</p>
                    <p>Data de retirada:  {rent.pickUpDate}</p>
                    <p>Preço:  {rent.price}</p>
                    
                </div>
                <div className="subClient">
                    <button onClick={() => {deletar(rent._id)}}>Deletar</button>
                    <Link to={{
                        pathname: '/locacao/update/' + rent._id
                    }}><button>Editar </button></Link>
                                          
                </div>
            </div>
        )
      }
    return(
        <div className="client">Locação não encontrada</div>
    )
}

