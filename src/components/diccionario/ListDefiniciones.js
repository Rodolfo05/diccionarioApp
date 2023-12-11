import React from 'react'
import { Card } from 'react-bootstrap';
import CardDefinicion from './CardDefinicion';

const ListDefiniciones = ({definiciones, abreModal, funcionEdit, funcionDelete, cargaData, abreLeerMas}) => {

    //con saneamiento
    // useEffect(() => {
    //     const timeID = setInterval(() => {
    //         console.log("useefect");
    //         setIsLoading(!isLoading);

    //     }, 2000)

    //     return () => clearInterval(timeID);
    // })

     //sin saneamiento   
    // useEffect(() => {
    //     console.log("aaa");
    // }, [])


    // if(isLoading){
    //     return <Loading/>
    // }

    // if(definiciones.length){
    //     console.log(definiciones);
    //     console.log("c:"+definiciones.length);
    //     <h2>No hay defs</h2>
    // }


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