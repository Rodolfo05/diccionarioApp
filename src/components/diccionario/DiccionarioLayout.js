import react, { useState, useEffect } from 'react';
import { BuscadorABC } from './BuscadorABC';
import ButtonBuscar from './ButtonBuscar';
import ListDefiniciones from './ListDefiniciones';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Form from '../Form';
import { guardaDefinicion, getDefiniciones, actualizaDefinicion, deleteDefinicion, getDefinicionPorLetra} from './services';
import Loading from './Loading'
import ButtonNuevaDef from './ButtonNuevaDef';
import { FaTrash } from "react-icons/fa";
import Logo from './Logo';

const ModoProductivo = false;

const DiccionarioLayout = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [definiciones, setDefiniciones] = useState([]);
    const [def, setDef] = useState([]);
    
    

    async function loadDefiniciones() {
        
        const respuesta = await getDefiniciones();

        if(ModoProductivo){
            if (respuesta.status === 200) {
                setDefiniciones(respuesta.data);
            }
        }else{
            setDefiniciones(respuesta);
        }

        setIsLoading(false);
    }

    async function loadDefinicionesPorLetra(letra){
        const respuesta = await getDefinicionPorLetra(letra);

        if(ModoProductivo){
            if(respuesta.status === 200){
                setDefiniciones(respuesta.data);
            }
        }else{
            setDefiniciones(respuesta);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        loadDefiniciones();
    }, []);


    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showLeerMas, setShowLeerMas] = useState(false)

    const handleClose = () => {
        setShow(false);
        setIsModalOpen(false);
    };

    const handleShow = () => {
        setShow(true);
        setIsModalOpen(true);
    };

    const handleShowEdit = () => {
        setShowEdit(true);
        setIsModalOpen(true);
    };

    const handleShowLeerMas = () => {
        showLeerMas(true);
        setIsModalOpen(true);
    }

    const handleCloseEdit = () => {
        setShowEdit(false);
        setIsModalOpen(false);
    };


    const handleSubmit = async (data) => {
        await guardaDefinicion(data);
        loadDefiniciones();
        handleClose();
    }

    const handleSubmitEdit = async (data) => {
        await actualizaDefinicion(data);
        loadDefiniciones();
        handleClose();
    }

    const handleDelete = async (id) => {
        await deleteDefinicion(id);
        loadDefiniciones();
    }

    const cargaDataModal = (data) => {
        setDef(data);
    }


    return (
        <>

        <div className='container-fluid py-2 divLogo'>
            <Logo/>
        </div>

        <div className='container'>
            <br/>
            <BuscadorABC onClick={(e) => loadDefinicionesPorLetra(e)} />
            <br/>

            <ButtonNuevaDef onClick={handleShow}/>

            <br/>
            {
                //si isLaoding es true, ejecutara <Loading/></Loading>
                isLoading && <Loading />
            }

            {
                !isLoading && !definiciones.length && (
                    <h2>No hay definiciones registradas.</h2>
                )
            }

            {
                !isLoading && definiciones.length > 0 && (
                    <ListDefiniciones funcionEdit={handleShowEdit} funcionDelete={handleDelete} definiciones={definiciones} abreModal={handleShowEdit} cargaData={cargaDataModal} abreLeerMas={handleShowLeerMas}/>
                )
            }


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Concepto</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bodyModal'>
                    <Form formAction="FormNuevaDef" handleSubmit={handleSubmit} />
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" form="FormNuevaDef" className='btn btn-success'>Guardar</button>
                    <button 
                        className='btn btn-danger'
                        onClick={() => setShow(false)}
                    > 
                        Cancelar
                    </button>
                </Modal.Footer>
            </Modal>


            <Modal show={showEdit} >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Definicion</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bodyModal'>
                    <Form formAction="FormEditDef" handleSubmit={handleSubmitEdit} estado="1" dataDef={def}/>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" onClick={handleCloseEdit} className='btn btn-warning' form="FormEditDef">Editar</button> 
                    <button 
                        className='btn btn-danger'
                        onClick={() => setShowEdit(false)}
                    > 
                        Cancelar
                    </button>
                </Modal.Footer>
            </Modal>

        </div>
        </>
    );

}

export default DiccionarioLayout;