import React, { useState } from 'react';

import {productos} from './listado';

function Productos() {
	const [listaOrdenada, setListaOrdenada] = useState(productos);

	const ordenarPorNombre = () => {
		// Implementa la lógica aquí
	};

	const ordenarPorPrecio = () => {
		// Implementa la lógica aquí
	};

	return (
		<div style={styles.container}>
			<div style={styles.buttonContainer}>
				<button style={styles.button} onClick={ordenarPorNombre}>
					Ordenar por Nombre
				</button>
				<button style={styles.button} onClick={ordenarPorPrecio}>
					Ordenar por Precio
				</button>
			</div>
			<ul style={styles.list}>
				{listaOrdenada.map((producto, index) => (
					<li key={index} style={styles.card}>
						<span style={styles.productName}>{producto.nombre}</span>
						<span style={styles.productPrice}>${producto.precio.toFixed(2)}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px',
		fontFamily: 'Arial, sans-serif',
		backgroundColor: '#f6f6f6',
		height: '100vh',
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: '20px',
	},
	button: {
		margin: '0 10px',
		padding: '10px 20px',
		backgroundColor: '#007BFF',
		color: '#fff',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
		transition: 'background-color 0.3s',
		'&:hover': {
			backgroundColor: '#0056b3',
		}
	},
	list: {
		width: '80%',
		listStyle: 'none',
		padding: '0',
	},
	card: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: '15px',
		margin: '10px 0',
		borderRadius: '5px',
		boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
	},
	productName: {
		fontWeight: 'bold',
		fontSize: '18px',
	},
	productPrice: {
		color: '#007BFF',
		fontSize: '16px',
	}
};

export default Productos;
