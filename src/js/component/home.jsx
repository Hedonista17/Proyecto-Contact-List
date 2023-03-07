import React, { useState } from 'react';
import Bienvenida from "./intro.jsx";
import Navbar from "./NavBar.jsx";
import Crear from "./form-boton.jsx";
import Contacto from './Contacto.jsx';

const initialState = {
	nombre:"Nombre",
	direccion:"Callejón Diagon",
	telefono:"123-456-789",
	email:"Correo electrónico",
	
	
}
const editarContacto = () =>{}
const eliminarContacto = () => {}
const confirmacion = () => {}
const añadirContacto = (element) => {
		
}

const Home = () => {
	
     const guardarContacto=(element) => {
		const valor = element.target.value 
		const dato = element.target.nombre
		setUser({...contacto, [dato]: valor})
	}

	const [contacto, setContacto] = useState(initialState);
	return (
		<>
		<Navbar/>
		<div className="container mt-5">
		<Bienvenida/>
		<div className="text-center">
		 <Crear  guardarContacto={guardarContacto}/>
		</div>
		<div className="container mt-5">
		< Contacto nombre ={contacto.nombre}  direccion={contacto.direccion} telefono={contacto.telefono} email={contacto.email} />
		</div>
		

		</div>
		</>
	);
};

export default Home;
