import React from "react"
import './Lazer.css'

import Titulo from '../Titulo/Titulo.jsx'

import ProjetosModeloHeader from "../ProjetosModelo/ProjetosModeloHeader.jsx"

export default function Lazer(){
    return(
        <div>
            <ProjetosModeloHeader/>

            <Titulo texto="Lazer"/>
            <div className="lazer">

            </div>
        </div>
)
}