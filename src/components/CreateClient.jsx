import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Client (){
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.post('/client/create',{
        
    })
      .then((response) => setClients(response.data.clients))
      .catch((err) => console.log('the following error ocurred while listing the clients: ' + err.message))
  }, [])

  return (
      <div>
        {clients.map(client => (
          <li key={client._id}>
            <p>{client.name}</p>
          </li>
        ))}
      </div>
  )
}
