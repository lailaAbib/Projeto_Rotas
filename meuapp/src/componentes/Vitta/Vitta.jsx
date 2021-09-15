import React from "react"
import './Vitta.css'

import Titulo from '../Titulo/Titulo.jsx'

import PacaembuHeader from "../Pacaembu/PacaembuHeader.jsx"

export default function Vitta(){
    return(
        <div>
            <PacaembuHeader/>

            <Titulo texto="Vitta Residencial"/>
            <div className="vitta">

            </div>
        </div>
    )
}