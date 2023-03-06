import React from 'react';
import Bienvenida from "./intro.jsx";
import Navbar from "./NavBar.jsx";
import Crear from "./boton.jsx";
import Contacto from './Contacto.jsx';

const añadirContacto = () => {}

const editarContacto = () =>{}

const eliminarContacto = () => {}

const confirmacion = () => {}


//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div className="container mt-5">
		<Bienvenida/>
		<div className="text-center">
		 <Crear/>
		</div>
		<div className="container mt-5">
		< Contacto />
		</div>
		

		</div>
		</>
	);
};

export default Home;
