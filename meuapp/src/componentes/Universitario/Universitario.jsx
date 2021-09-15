import React from "react"
import './Universitario.css'

import Titulo from '../Titulo/Titulo.jsx'

import PacaembuHeader from "../Pacaembu/PacaembuHeader.jsx"

export default function Universitario(){
    return(
        <div>
             <PacaembuHeader/>

            <Titulo texto="Parque Universitário"/>

            <div className="universitario">

            </div>
        </div>
        
    )
}