import React from "react";
import Bienvenida from "./intro.jsx";
import Navbar from "./NavBar.jsx";
import Crear from "./boton.jsx";


//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div className="container mt-5">
		<Bienvenida/>
		<Crear/>

		</div>
		</>
	);
};

export default Home;
