import React from "react"
import './Real.css'

import Titulo from '../Titulo/Titulo.jsx'

import PacaembuHeader from "../Pacaembu/PacaembuHeader.jsx"

export default function Real(){
    return(
        <div>
            <PacaembuHeader/>

            <Titulo texto="Viva Real"/>
            <div className="real">

            </div>
        </div>
    )
}
