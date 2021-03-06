import React, { useState } from "react";
import api from "../../services/api";
import './createClient.css'

export default function Client (){
  const [message, setMessage] = useState();
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [balance, setBalance] = useState("");

    function createClient (event){
        event.preventDefault();
        console.log(name);
        if(name !== "" && telephone !== "" && address !== "" && type !== ""){
            api.post('/client/create',{
                "name": name,
                "telephone": telephone,
                "address": address,
                "clientType": type,
                "balance": balance 
            })
            .then((response) => setMessage(response.data.message))
            .catch((err) => {
                setMessage("Algo não saiu como esperado");
            })
        }else{
            setMessage('Algum dos campos obrigatorios nao foi preenchidos corretamente')
        }
    }
     

  return (
    <form onSubmit={createClient}>
          <div className="message">
              {message}
          </div>
          <div className="form">
              <div className="lif">
                  <div className="sublif">
                      <label>Nome</label>
                      <input 
                          id="nome" 
                          value={name}
                          onChange={event => setName(event.target.value)}
                      />
                  </div>
                  
              </div>
              
              <div className="lif">
                  <div className="sublif">
                      <label>Telefone</label>
                      <input 
                          id="telefone" 
                          value={telephone}
                          onChange={event => setTelephone(event.target.value)}
                      />
                  </div>

              </div>
              
              <div className="lif">
                  <div className="sublif">
                      <label>Endereço</label>
                      <input 
                          id="endereco" 
                          value={address}
                          onChange={event => setAddress(event.target.value)}
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
                      <label>Saldo</label>
                      <input 
                          id="saldo" 
                          value={balance}
                          onChange={event => setBalance(event.target.value)}
                      />
                  </div>
              </div>
              
              <div className="lif"><button type="submit">Criar</button></div>
              
          </div>
       
    </form>
)
}
