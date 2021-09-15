import React from 'react'
//importar pacote LInk, que é parte do react-router-dom
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li className="parra"><Link to="/parra">Parra</Link></li>
                    <li className="projeto"><Link to="/projeto">Projeto</Link></li>
                    <li className="pacaembu"><Link to="/pacaembu">Pacaembu</Link></li>
                    <li className="perplan"><Link to="/perplan">Perplan</Link></li>
                    <li className="mrv"><Link to="/mrv">Mrv</Link></li>
                </ul>
            </nav>
        </div>
    )

}