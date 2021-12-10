import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './clients.css';

export default function Client (){
  const [clients, setClients] = useState([]);


  useEffect(() => {
    api.get('/client/list')
      .then((response) => setClients(response.data.clients))
      .catch((err) => console.log('the following error ocurred while listing the clients: ' + err.message))
  }, [])

  return (
      <div>
        {clients.map(client => (
          <div key={client._id} className="client">
            <div>
              <Link to={{
                pathname:"/client/" + client._id
                }}>Nome: { client.name }</Link>
            </div>
          </div>
        ))}
      </div>
  )
}
