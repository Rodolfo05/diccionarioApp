import axios from 'axios'
import definicionesJSON from "./definiciones.json"
//const baseURL = process.env.REACT_APP_BASE_URL
const baseURL = "http://www.diccionarioprogramacion.somee.com/api";

const ModoProductivo = false;

export async function getDefiniciones() {
    try {

        if (ModoProductivo) {
            const respuesta = await axios({
                url: `${baseURL}/definiciones`,
                method: 'GET'
            })

            return respuesta;

        } else {
            let defJSON = JSON.stringify(definicionesJSON);
            let defObj = JSON.parse(defJSON);

            return defObj;
        }

    } catch (e) {
        console.log(e)
    }
}

export async function getDataDefinicion(id) {
    try {

        if (ModoProductivo) {
            const respuesta = await axios({
                url: `${baseURL}/definiciones/${id}`,
                method: 'GET'
            })

            return respuesta;

        } else {
            let defFind = definicionesJSON.findIndex((def) => def.id === id);
            return defFind;
        }

    } catch (e) {
        console.log(e)
    }
}

export async function guardaDefinicion(definicionData) {
    try {

        if (ModoProductivo) {
            const formData = new FormData();
            formData.append('palabra', definicionData.palabra);
            formData.append('definicion', definicionData.definicion);

            const respuesta = await axios({
                url: `${baseURL}/definiciones`,
                method: 'POST',
                data: definicionData
            })

            return respuesta;
        } else {
            definicionesJSON.push(definicionData);
        }

    } catch (e) {
        console.log(e)
    }
}

export async function cargaDataForm(definicionData) {
    try {

        const formData = new FormData();
        formData.append('palabra', definicionData.palabra);
        formData.append('definicion', definicionData.definicion);

        const respuesta = await axios({
            url: `${baseURL}/definiciones`,
            method: 'POST',
            data: definicionData
        })

        return respuesta;

    } catch (e) {
        console.log(e)
    }
}

export async function actualizaDefinicion(definicionData) {
    try {

        if (ModoProductivo) {
            const respuesta = await axios({
                url: `${baseURL}/definiciones/${definicionData.id}`,
                method: 'PUT',
                data: definicionData
            })
        } else {

            let idAModificar = definicionData.id;

            definicionesJSON.map(function (dato) {
                if (idAModificar == dato.id) {
                    dato.palabra = definicionData.palabra;
                    dato.definicion = definicionData.definicion;
                }
            })

        }

    } catch (e) {
        console.log("Error al editar: " + e);
    }
}

export async function deleteDefinicion(id) {
    try {

        if (ModoProductivo) {
            const respuesta = await axios({
                url: `${baseURL}/definiciones/${id}`,
                method: 'DELETE'
            })
            return respuesta;

        } else {
            //console.log(JSON.stringify(definicionesJSON))
            let defDelete = definicionesJSON.findIndex((def) => def.id === id);
            console.log(defDelete)
            definicionesJSON.splice(defDelete,1);
        }


    } catch (e) {
        console.log(e)
    }
}

export async function getDefinicionPorLetra(letra) {
    try {
        console.log("m: " + ModoProductivo);
        if (ModoProductivo) {

            const respuesta = await axios({
                url: `${baseURL}/definiciones/searchLetter/${letra}`,
                method: 'GET'
            })
            console.log("res: " + respuesta);
            return respuesta;

        } else {

            let defsEncontras = definicionesJSON.filter(x => x.palabra.toUpperCase().startsWith(letra.toUpperCase()));

            let defJSON = JSON.stringify(defsEncontras);
            let defObj = JSON.parse(defJSON);

            return defObj;
        }


    } catch (e) {
        console.log(e)
    }
}

export async function getDefinicionesPorPalabra(palabra) {
    try {
        console.log("get: "+palabra)
        if (ModoProductivo) {
            const respuesta = await axios({
                url: `${baseURL}/definiciones/searchLetter/${palabra}`,
                method: 'GET'
            })
            console.log("res: " + respuesta);
            return respuesta;
        } else {

            let defsEncontras = definicionesJSON.filter(x => x.palabra.toUpperCase().startsWith(palabra.toUpperCase()));
           
            let defJSON = JSON.stringify(defsEncontras);
            let defObj = JSON.parse(defJSON);

            return defObj;
        }

    } catch (e) {
        console.log(e)
    }
}