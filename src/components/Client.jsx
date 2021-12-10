import React from "react";
import { useEffect, useState } from "react";
import api from "../services/api";


function Client () {
    const [client, setClient] = useState();

    useEffect(() => {
    api
      .get("/client/list")
      .then((response) => {
        //   setClient(response.data);
            console.log(response.data)
        })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

//   console.log(client[1]);

    return (
        
        
        <div>
            {client}
            Client general page
        </div>
    )
}

export default Client;
