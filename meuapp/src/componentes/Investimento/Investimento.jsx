import React from "react"
import './Investimento.css'

import Titulo from '../Titulo/Titulo.jsx'

import CapriHeader from "../Capri/CapriHeader.jsx"

export default function Investimento(){
    return(
        <div>
            <CapriHeader/>

            <Titulo texto="Investimento"/>
            <div className="investimento">

            </div>
        </div>
    )
}
