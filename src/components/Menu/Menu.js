import React from 'react';
import './Menu.css';


const Menu = () => {
    return (
        
        <nav class='dp-menu'>
            <ul>
                <li><a href='/'>Inicio</a></li>
                <li><a href='/clientes'>Clientes</a>
                    <ul>
                        <li><a href='/criar-cliente'>Adicionar</a></li>
                    </ul>
                </li>
                <li><a href='/produtos'>Produtos</a>
                    <ul>
                        <li><a href='/criar-produto'>Adicionar</a></li>
                    </ul>
                </li>
                <li><a href='/locacoes'>Locação</a>
                    <ul>
                        <li><a href='/criar-locacao'>Adicionar</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
