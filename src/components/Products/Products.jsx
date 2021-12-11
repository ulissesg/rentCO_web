import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import '../Clients/clients.css';

export default function Product (){
  const [products, setProducts] = useState([]);


  useEffect(() => {
    api.get('/product/list')
      .then((response) => setProducts(response.data.products))
      .catch((err) => console.log('the following error ocurred while listing the products: ' + err.message))
  }, [])

  return (
      <div>
        {products.map(product => (
          <div key={product._id} className="client">
            <div>
              <Link to={{
                pathname:"/product/" + product._id
                }}>Descrição: { product.description }</Link>
            </div>
          </div>
        ))}
      </div>
  )
}
