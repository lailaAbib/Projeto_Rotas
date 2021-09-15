import React from "react"
import './Ediculas.css'

import Titulo from '../Titulo/Titulo.jsx'

import ProjetosModeloHeader from "../ProjetosModelo/ProjetosModeloHeader.jsx"

export default function Ediculas(){
    return(
        <div>
            <ProjetosModeloHeader/>

            <Titulo texto="Ediculas"/>
            <div className="ediculas">

            </div>
        </div>
)
}