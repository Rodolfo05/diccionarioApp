import React, { useState, useEffect } from 'react';
import { getDefiniciones, actualizaDefinicion } from './services';
import { Modal } from 'react-bootstrap';
import Form from '../Form';
import { FaEdit } from "react-icons/fa";

const ButtonEditar = ({abreModal, idData, palabraData, defData, onClick, cargaData}) => {

    const [showModal, setShowModal] = useState(false);
    const [definicionSeleccionada, setDefinicionSeleccionada] = useState({
        id: idData,
        palabra: palabraData,
        definicion: defData
    });

    
    const abreModalEdit = () => {
        onClick();
        cargaData(definicionSeleccionada);
    }


    return(
        <>
            <button onClick={abreModalEdit} className='btn btn-warning' style={{ margin: "2px" }}>
                <span
                    style={{ display: "inline-flex", alignItems: "center" }}
                    className="legend-label"
                >
                    <FaEdit/>
                </span>
            </button>
        </>
    )
}

export default ButtonEditar;