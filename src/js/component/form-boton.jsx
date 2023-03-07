import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Crear = (guardarContacto) => {

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
                    <label  className="formulario"> Nombre  </label>
                    <input name="nombre" type="text" className="form-control" placeholder="Introduzca su nombre completo" required/>
                </div><div className="p-2 mb-3">
                    <label  className="formulario"> Email</label>
                    <input name="email" type="email" className="form-control"  placeholder="estoesunejemplo@gmail.com"/>
                </div><div className="p-2 mb-3">
                    <label  className="formulario">Numero de teléfono</label>
                    <input name="telefono" type="tel" className="form-control" placeholder="Introduzca su numero de contacto" required/>
                </div><div className="p-2 mb-3">
                    <label  className="formulario">Dirección</label>
                    <input name="direccion" type="text" className="form-control"  placeholder="Añadir dirección"/>
                </div>

                <Modal.Footer>

                    <Button variant="dark" onClick={guardarContacto}>
                        Guardar Contacto
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};



export default Crear;