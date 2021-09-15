import React from "react"
import './Financiamento.css'

import Titulo from '../Titulo/Titulo.jsx'

import CapriHeader from "../Capri/CapriHeader.jsx"

export default function Financiamento(){
    return(
        <div>
            <CapriHeader/>

            <Titulo texto="Financiamento"/>
            <div className="financiamento">

            </div>
        </div>
        
)
}