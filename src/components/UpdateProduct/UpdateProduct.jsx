import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import '../CreateClient/createClient.css'

export default function Product (){
    const [product, setProduct] = useState([]);
    const [message, setMessage] = useState();
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");

    const { id } = useParams();
    const  url  = '/product/' + id;


    useEffect(() => {
        api.get(url)
        .then((response) => {
            setProduct(response.data.product);
            setCode(response.data.product.code);
            setDescription(response.data.product.description);
            setType(response.data.product.type);
            setPrice(response.data.product.price);
        })
        .catch((err) => console.log('the following error ocurred while listing the product: ' + err.message))
    },[url])

    function createProduct (event){
        event.preventDefault();
        if(code !== "" && description !== "" && type !== "" && price !== ""){
            api.post('/product/update/' + product._id,{
                "code": code,
                "description": description,
                "type": type,
                "price": price
            })
            .then((response) => setMessage(response.data.message))
            .catch((err) => {
                setMessage("Algo não saiu como esperado");
            })
        }else{
            setMessage('Algum dos campos obrigatorios nao foi preenchidos corretamente')
        }
    }
     
    console.log(code);  
    return (
        <form onSubmit={createProduct}>
            <div className="message">
                {message}
            </div>
            <div className="form">
                <div className="lif">
                    <div className="sublif">
                        <label>Codigo</label>
                        <input 
                            id="codigo" 
                            value={code}
                            onChange={event => setCode(event.target.value)}
                        />
                    </div>
                    
                </div>
                
                <div className="lif">
                    <div className="sublif">
                        <label>Descrição</label>
                        <input 
                            id="descricao" 
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                        />
                    </div>

                </div>
                
                <div className="lif">
                    <div className="sublif">
                        <label>Tipo</label>
                        <input 
                            id="tipo" 
                            value={type}
                            onChange={event => setType(event.target.value)}
                        />
                    </div>

                </div>
                
                <div className="lif"> 
                    <div className="sublif">
                        <label>Preço</label>
                        <input 
                            id="preco"
                            value={price}
                            onChange={event => setPrice(event.target.value)}
                        />
                    </div>
                </div>
                
                <div className="lif"><button type="submit">Criar</button></div>
                
            </div>
        
        </form>
    )
}
