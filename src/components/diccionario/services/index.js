import axios from 'axios'
const baseURL = process.env.REACT_APP_BASE_URL


export async function getDefiniciones(){
        try{
            const respuesta = await axios({
                url: `${baseURL}/definiciones`,
                method: 'GET'
            })

            return respuesta;

        }catch(e){
            console.log(e)
        }
}

export async function getDataDefinicion(id){
    try{
        const respuesta = await axios({
            url: `${baseURL}/definiciones/${id}`,
            method: 'GET'
        })
        console.log("wat"+respuesta);
        return respuesta;
    }catch(e){
            console.log(e)
    }
}

export async function guardaDefinicion(definicionData){
    try{

        const formData = new FormData();
        formData.append('palabra', definicionData.palabra);
        formData.append('definicion', definicionData.definicion);

        const respuesta = await axios({
            url: `${baseURL}/definiciones`,
            method: 'POST',
            data: definicionData
        })

        return respuesta;

    }catch(e){
        console.log(e)
    }
}

export async function cargaDataForm(definicionData){
    try{

        const formData = new FormData();
        formData.append('palabra', definicionData.palabra);
        formData.append('definicion', definicionData.definicion);

        const respuesta = await axios({
            url: `${baseURL}/definiciones`,
            method: 'POST',
            data: definicionData
        })

        return respuesta;

    }catch(e){
        console.log(e)
    }
}

export async function actualizaDefinicion(definicionData){
    try{

        const respuesta = await axios({
            url: `${baseURL}/definiciones/${definicionData.id}`,
            method: 'PUT',
            data: definicionData
        })

    }catch(e){
        console.log("Error al editar: "+e);
    }
}

export async function deleteDefinicion(id){
    try{
        const respuesta = await axios({
            url: `${baseURL}/definiciones/${id}`,
            method: 'DELETE'
        })
        return respuesta;
    }catch(e){
            console.log(e)
    }
}

export async function getDefinicionPorLetra(letra){
    try{
        const respuesta = await axios({
            url: `${baseURL}/definiciones/searchLetter/${letra}`,
            method: 'GET'
        })

        return respuesta;
    }catch(e){
            console.log(e)
    }
}