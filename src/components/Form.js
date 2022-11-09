import React, { useEffect, useState, useRef } from 'react';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import {InputGroup, FormControl} from 'react-bootstrap';
import { getDataDefinicion } from './diccionario/services';
const { Label, Control, Text } = BootstrapForm


const Form = ({handleSubmit, estado, dataDef, formAction}) => {

    const [valorForm, setValorForm] = useState(dataDef ? dataDef : {
        palabra: '',
        definicion: ''
    })
    
    console.log("hi:"+valorForm.definicion);

    const inputFileRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValorForm({ ...valorForm, [name]: value });
    }


    //metodos o variables privadas con _ al principio 
    // const _handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleSubmit({...valorForm, image: inputFileRef.current.files[0]});
    // } CON IMAGENES

    const _handleSubmit = (e) => {
        e.preventDefault();
        handleSubmit({...valorForm});
    }

    return (
        <form id={formAction} onSubmit={_handleSubmit}>
            <Label htmlFor="">Palabra</Label>
            
            <Control
                name="palabra"
                value={valorForm.palabra}
                onChange={handleChange}
            />

            
        <Label htmlFor="">Definicion</Label>
        <InputGroup>
            <FormControl className='inputDefinicion'
                name="definicion"
                value={valorForm.definicion}
                onChange={handleChange}
                as="textarea"
                aria-label="With textarea" 
            />
        </InputGroup>

            {/* <Label htmlFor="">Imagen</Label>
            <br />
            <input type="file" ref={inputFileRef} /> */}
            
        </form>
    )
}

export default Form;