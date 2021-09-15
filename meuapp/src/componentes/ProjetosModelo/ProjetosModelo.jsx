import React from "react"
import './ProjetosModelo.css'

import Titulo from '../Titulo/Titulo.jsx'

import ProjetosModeloHeader from "../ProjetosModelo/ProjetosModeloHeader.jsx"

export default function ProjetosModelo(){
    return(
        <div>
            <ProjetosModeloHeader/>

            <Titulo texto="Projetos Modelo"/>
            <div className="projetosModelo">

            </div>
        </div>
    )
}
