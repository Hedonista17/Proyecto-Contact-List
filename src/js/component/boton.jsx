import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Crear = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Crear Contacto
            </Button>

            <Modal id="modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Añadir un nuevo contacto</Modal.Title>
                </Modal.Header>
                <div className="p-2 mb-3">
                    <label  className="formulario"> Nombre completo </label>
                    <input type="text" className="form-control" placeholder="Introduzca su nombre"/>
                </div><div className="p-2 mb-3">
                    <label  className="formulario">Direccion Email</label>
                    <input type="email" className="form-control"  placeholder="estoesunejemplo@gmail.com"/>
                </div><div className="p-2 mb-3">
                    <label  className="formulario">Numero de teléfono</label>
                    <input type="tel" className="form-control" placeholder="Introduzca su numero de contacto"/>
                </div><div className="p-2 mb-3">
                    <label  className="formulario">Dirección</label>
                    <input type="email" className="form-control"  placeholder="Añadir dirección"/>
                </div>

                <Modal.Footer>

                    <Button variant="dark" onClick={handleClose}>
                        Guardar Contacto
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};



export default Crear;