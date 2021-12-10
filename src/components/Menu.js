import React from 'react';
import './Menu.css';


const Menu = () => {
    return (
        
        <nav class='dp-menu'>
            <ul>
                <li><a href=''>Inicio</a></li>
                <li><a href=''>Clientes</a>
                    <ul>
                        <li><a href='#'>Adicionar</a></li>
                        <li><a href='#'>Listar todos</a></li>
                    </ul>
                </li>
                <li><a href='#'>Produtos</a>
                    <ul>
                        <li><a href='#'>Adicionar</a></li>
                        <li><a href='#'>Listar todos</a></li>
                    </ul>
                </li>
                <li><a href='#'>Locação</a>
                    <ul>
                        <li><a href='#'>Adicionar</a></li>
                        <li><a href='#'>Listar todos</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
