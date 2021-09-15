import React from "react"
import './Apartamentos.css'

import Titulo from '../Titulo/Titulo.jsx'

import ProjetosModeloHeader from "../ProjetosModelo/ProjetosModeloHeader.jsx"

export default function Apartamentos(){
    return(
        <div>
            <ProjetosModeloHeader/>

            <Titulo texto="Apartamentos"/>
            <div className="apartamentos">

            </div>
        </div>
)
}