import React from "react"
import './Pacaembu.css'

import Titulo from '../Titulo/Titulo.jsx'

import PacaembuHeader from "./PacaembuHeader.jsx"

export default function Pacaembu(){
    return(
        <div>
            <PacaembuHeader /> 
            <Titulo texto="Pacaembu Construtora"/>
            
            <div className="pacaembu">
            
            
            </div>
        </div>
    )
}
