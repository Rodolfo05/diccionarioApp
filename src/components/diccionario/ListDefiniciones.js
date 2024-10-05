import React from 'react'
import { Card } from 'react-bootstrap';
import CardDefinicion from './CardDefinicion';

const ListDefiniciones = ({definiciones, abreModal, funcionEdit, funcionDelete, cargaData, abreLeerMas}) => {

    return(
        <>
        {
            definiciones.map(({id, palabra, definicion}) => (
                <CardDefinicion key={id} idData={id} palabra={palabra} definicion={definicion} abreModal={abreModal} funcionEdit={funcionEdit} funcionDelete={funcionDelete} cargaData={cargaData} abreLeerMas={abreLeerMas} />
            ))
        }
        </>

        
    )
}

export default ListDefiniciones;