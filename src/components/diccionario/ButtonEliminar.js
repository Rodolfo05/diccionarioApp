import React from 'react';
import { FaTrash } from "react-icons/fa";

const ButtonEliminar = ({idData, onClick}) => {

    const eliminarDef = () => {
        onClick(idData);
    }


    return(
        <>
            <button onClick={eliminarDef} className='btn btn-danger'style={{"margin": "2px", "marginLeft": "10px"}}>
            <span
                style={{ display: "inline-flex", alignItems: "center" }}
                className="legend-label"
            >
                <FaTrash/>
            </span>
        </button>
        </>
    );
}

export default ButtonEliminar;