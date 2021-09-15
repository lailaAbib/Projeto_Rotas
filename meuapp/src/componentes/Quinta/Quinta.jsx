import React from "react"
import './Quinta.css'

import Titulo from '../Titulo/Titulo.jsx'
import PacaembuHeader from "../Pacaembu/PacaembuHeader.jsx"

export default function Quinta(){
    return(
        <div>
            <PacaembuHeader/>

            <Titulo texto="Quinta D'Oeste"/>
            <div className="quinta">

            </div>
        </div>
    )
}