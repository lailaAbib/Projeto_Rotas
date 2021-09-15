import React from "react"
import './Corretores.css'

import Titulo from '../Titulo/Titulo.jsx'

import CapriHeader from "../Capri/CapriHeader.jsx"

export default function Corretores(){
    return(
        <div>
            <CapriHeader/>

            <Titulo texto="Corretores"/>
            <div className="corretores">

            </div>
        </div>
    )
}
