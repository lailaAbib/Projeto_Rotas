import React from "react"
import './Capri.css'

import Titulo from '../Titulo/Titulo.jsx'

import CapriHeader from "../Capri/CapriHeader.jsx"

export default function Capri(){
    return(
    <div>
            
        <CapriHeader/>

        <Titulo texto="Villa Di Capri"/>

        <div className="capri">

        </div>
    </div>
        
    )
}