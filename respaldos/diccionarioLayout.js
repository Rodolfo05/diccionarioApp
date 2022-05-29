import react, { useState, useEffect } from 'react';
import { BuscadorABC } from './BuscadorABC';
import ButtonBuscar from './ButtonBuscar';
import ListDefiniciones from './ListDefiniciones';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Form from '../Form';
import { guardaDefinicion, getDefiniciones } from './services';
import Loading from './Loading'
import AddButton from './AddButton'

const DiccionarioLayout = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [definiciones, setDefiniciones] = useState([]);

    async function loadDefiniciones() {
        const respuesta = await getDefiniciones();

        if (respuesta.status === 200) {
            setDefiniciones(respuesta.data)
        }

        setIsLoading(false);

    }

    useEffect(() => {
        console.log("ejecuta loaddefs")
        loadDefiniciones();
    }, []);

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setIsModalOpen(false);
    };
    const handleShow = () => {
        setShow(true);
        setIsModalOpen(true);
    };

    const handleSubmit = async (data) => {
        await guardaDefinicion(data);
        loadDefiniciones();
        handleClose();
    }

    return (
        <>
            <Button className="nextButton" onClick={handleShow}>
                Nueva Definición
            </Button>

            <AddButton onClick={handleShow} />

            {
                //si isLaoding es true, ejecutara <Loading/></Loading>
                isLoading && <Loading />
            }

            {
                !isLoading && !definiciones.length && (
                    <h2>No hay defs</h2>
                )
            }

            {
                !isLoading && definiciones.length && (
                    <ListDefiniciones definiciones={definiciones} />
                )
            }

            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Concepto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form handleSubmit={handleSubmit} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <BuscadorABC />

        </>
    );

}

export default DiccionarioLayout;