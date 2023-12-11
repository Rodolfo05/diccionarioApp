import React from 'react';
import {Card, Button} from 'react-bootstrap';
import DiccionarioLayout from './DiccionarioLayout'
import ButtonEditar from './ButtonEditar';
import ButtonEliminar from './ButtonEliminar';
import bootstrap from 'bootstrap';


const CardDefinicion = (props) => {


    return(
        <Card>
        <Card.Body>
            <Card.Title>{props.palabra}</Card.Title>
            <Card.Text>
                {props.definicion}
            </Card.Text>

            <div>
                <div className="row">
                <div className="col-md-2">
                        <button className='btn' onClick={props.abreLeerMas} style={{"background":"#CCD2E8"}}>Leer mas...</button>
                    </div>
                    <div className='d-flex flex-row-reverse col-md-10 d-flex'>
                        <ButtonEditar onClick={props.funcionEdit} abreModal={props.abreModal} idData={props.idData} palabraData={props.palabra} defData={props.definicion} cargaData={props.cargaData}/>
                        <ButtonEliminar onClick={props.funcionDelete} idData={props.idData} />
                    </div>
                </div>
            </div>   
            
        </Card.Body>
        </Card>
    );
}

export default CardDefinicion;

