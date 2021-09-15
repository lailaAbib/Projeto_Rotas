import React from "react"
import './Casas.css'

import Titulo from '../Titulo/Titulo.jsx'

import ProjetosModeloHeader from "../ProjetosModelo/ProjetosModeloHeader.jsx"

export default function Casas(){
    return(
        <div>
            <ProjetosModeloHeader/>

            <Titulo texto="Casas"/>
            <div className="casas">

            </div>
        </div>
)
}