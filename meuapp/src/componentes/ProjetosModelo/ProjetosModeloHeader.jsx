import React from "react"
import { Link } from 'react-router-dom'
import '../Header/Header.css'

export default function ProjetosModeloHeader(){
    return(
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/casas">Casas</Link></li>
                    <li><Link to="/apartamentos">Apartamentos</Link></li>
                    <li><Link to="/lazer">Lazer</Link></li>
                    <li><Link to="/ediculas">Ediculas</Link></li>
                    <li><Link to="/sobrados">Sobrados</Link></li>
                </ul>
            </nav>
        </div>
    )
}