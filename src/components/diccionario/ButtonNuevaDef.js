import React from 'react';
import {Button} from 'react-bootstrap';

const ButtonNuevaDef = ({onClick}) => {
    return (
        <div className="text-center">
            <Button onClick={onClick} color="primary">Nuevo Concepto</Button>
        </div>
    )
}

export default ButtonNuevaDef;