import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import api from "../../services/api";
import '../ClientInfo/clientInfo.css';



export default function ProductInfo (){
    
    const [product, setProduct] = useState([]);

    function deletar(_id){
        const url = '/product/delete/' + _id
        api.get(url)
            .then((response) => {
                setProduct(response.data.product)
                setMessage('produto excluido com sucesso')
            })
            .catch((err) => console.log('the following error ocurred while listing the products: ' + err.message))
    }
    
    const { id } = useParams();
    const  url  = '/product/' + id;
    const [message, setMessage] = useState();
  
  
    useEffect(() => {
      api.get(url)
        .then((response) => {
            setProduct(response.data.product        );
        })
        .catch((err) => console.log('the following error ocurred while listing the products: ' + err.message))
    },[url])
    
    console.log(product)

    if(product != null){
        return (
            <div className="client">
                {message}
                <div className="subClient">
                    <p>ID: { product._id }</p>
                    <p>Codigo: {product.code}</p>
                    <p>descrição:  {product.description}</p>
                    <p>Tipo:  {product.type}</p>
                    <p>Preço:  {product.price}</p>
                </div>
                <div className="subClient">
                    <button onClick={() => {deletar(product._id)}}>Deletar</button>
                    <Link to={{
                        pathname: '/product/update/' + product._id
                    }}><button>Editar </button></Link>
                                          
                </div>
            </div>
        )
      }
    return(
        <div className="client">Produto não encontrado</div>
    )
}

