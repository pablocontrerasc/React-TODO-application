import React, { useState } from "react";
import Contenido from "./contenido.jsx";

const List = () => {
	const [lista, setLista] = useState([]);
	const [listas, setListas] = useState([]);

	let total = listas.length;
	let cantidad = total > 0 ? `${total} item left` : "";
	const handleChange = (e) => setLista({ [e.target.name]: e.target.value });
	//const handleClick = (e) => console.log("click click");

	// const handleClick = (e) => {
	// 	setListas([...listas, lista]);
	// };

	const borrarElemento = (indice) => {
		const newTodos = [...listas];
		newTodos.splice(indice, 1);
		setListas(newTodos);
	};

	function handleTest(e) {
		if (e.charCode == 13) {
			setListas([...listas, lista]);
		}
		// if (e.keyCode == 13) {
		// 	alert("Enter... (KeyDown, use keyCode)");
		// }
	}
	return (
		<>
			{" "}
			<div className="exterior">
				<div className="text-center titulo">todos</div>
				<div className="contenido">
					<div className="label">
						<input
							type="text"
							name="lista"
							onChange={handleChange}
							onKeyPress={handleTest}
						/>
						<hr />
					</div>
					<div className="">
						{listas.map((value, index) => (
							<Contenido
								key={index}
								lista={value.lista}
								index={index}
								borrarElemento={borrarElemento}
							/>
						))}
					</div>

					<div className="cantidad">{cantidad}</div>
				</div>
			</div>
		</>
	);
};

export default List;
