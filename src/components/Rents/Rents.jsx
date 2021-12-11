import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import '../Clients/clients.css';

export default function Rent (){
  const [rents, setRents] = useState([]);
  const [clientName, setClientName] = useState();

    // function getClientProductsName(){

    //   rents.map(rent => (
    //     api.get('/client/' + rent.clientId)
    //         .then((response) => {
    //             if(response.data.client !== null){
    //                 rent.clientId = (response.data.client.name);
    //             }           
    //         })))

    //   //   api.get('/products/' + rent.productId)
    //   //       .then((response) => {
    //   //           if(response.data.product !== null){
    //   //               rent.productId = (response.data.product.description);
    //   //           }           
    //   //       })   
    //   // ))
        
    // }     

  useEffect(() => {
    api.get('/rent/list')
      .then((response) => {
        setRents(response.data.rents)
        // getClientProductsName();
      })
      .catch((err) => console.log('the following error ocurred while listing the products: ' + err.message))
  }, [])

  return (
      <div>
        {rents.map(rent => (
          <div key={rent._id} className="client">
            <div>
                <Link to={{ pathname:"/locacoes/" + rent._id }}>
                    Cliente: { rent.clientId }
                    <br/>
                    Produto: { rent.productId }                
                </Link>               
            </div>
          </div>
        ))}
      </div>
  )
}
