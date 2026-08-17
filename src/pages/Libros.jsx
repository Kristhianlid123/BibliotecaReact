// Página de gestión de libros.
// Permite registrar, consultar y administrar
// los libros de la biblioteca.

import { useState } from "react";

function Libros() {

    // Lista temporal de libros utilizada para simular
    // los datos que posteriormente podrían venir de una base de datos.
    const [libros, setLibros] = useState([
        {
            id: 1,
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            estado: "Disponible"
        },
        {
            id: 2,
            titulo: "El principito",
            autor: "Antoine de Saint-Exupéry",
            estado: "Prestado"
        }
    ]);


    // Estados utilizados para almacenar los datos
    // introducidos en el formulario.
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [estado, setEstado] = useState("Disponible");


    // Procesa el envío del formulario y agrega
    // un nuevo libro a la lista.
    const registrarLibro = (evento) => {

        evento.preventDefault();


        // Validación básica para evitar registrar
        // libros sin título o autor.
        if (titulo.trim() === "" || autor.trim() === "") {

            alert("Debe ingresar el título y el autor del libro.");

            return;
        }


        // Crea un nuevo objeto con la información
        // introducida por el usuario.
        const nuevoLibro = {

            id: libros.length + 1,

            titulo: titulo,

            autor: autor,

            estado: estado
        };


        // Agrega el nuevo libro a la lista actual.
        setLibros([...libros, nuevoLibro]);


        // Limpia los campos después de registrar
        // correctamente el libro.
        setTitulo("");
        setAutor("");
        setEstado("Disponible");
    };


    return (
        <main className="pagina">

            {/* Encabezado de la sección de libros */}
            <section className="titulo-pagina">

                <h1>
                    Gestión de libros
                </h1>

                <p>
                    Administra el catálogo de libros
                    registrados en la biblioteca.
                </p>

            </section>


            {/* Contenedor principal de las funciones del módulo */}
            <section className="contenido-libros">


                {/* Formulario para registrar nuevos libros */}
                <article className="formulario-seccion">

                    <h2>
                        Registrar nuevo libro
                    </h2>


                    <form onSubmit={registrarLibro}>

                        {/* Grupo que contiene título y autor */}
                        <div className="formulario-fila">


                            {/* Campo para el título */}
                            <div className="form-group">

                                <label htmlFor="titulo">
                                    Título
                                </label>

                                <input
                                    id="titulo"
                                    type="text"
                                    value={titulo}
                                    onChange={(evento) =>
                                        setTitulo(evento.target.value)
                                    }
                                    placeholder="Ingrese el título del libro"
                                />

                            </div>


                            {/* Campo para el autor */}
                            <div className="form-group">

                                <label htmlFor="autor">
                                    Autor
                                </label>

                                <input
                                    id="autor"
                                    type="text"
                                    value={autor}
                                    onChange={(evento) =>
                                        setAutor(evento.target.value)
                                    }
                                    placeholder="Ingrese el autor"
                                />

                            </div>

                        </div>


                        {/* Fila inferior del formulario */}
                        <div className="formulario-fila formulario-final">


                            {/* Selección del estado */}
                            <div className="form-group">

                                <label htmlFor="estado">
                                    Estado
                                </label>

                                <select
                                    id="estado"
                                    value={estado}
                                    onChange={(evento) =>
                                        setEstado(evento.target.value)
                                    }
                                >

                                    <option value="Disponible">
                                        Disponible
                                    </option>

                                    <option value="Prestado">
                                        Prestado
                                    </option>

                                    <option value="Dañado">
                                        Dañado
                                    </option>

                                </select>

                            </div>


                            {/* Botón para registrar el libro */}
                            <button
                                type="submit"
                                className="boton-principal"
                            >
                                Registrar libro
                            </button>

                        </div>

                    </form>

                </article>


                {/* Sección donde se muestran los libros */}
                <article className="tabla-seccion">

                    <div className="tabla-encabezado">

                        <div>

                            <h2>
                                Libros registrados
                            </h2>

                            <p>
                                Consulta y administra los libros
                                disponibles en el sistema.
                            </p>

                        </div>


                        {/* Campo de búsqueda.
                            Su funcionalidad la agregaremos después. */}
                        <div className="busqueda">

                            <input
                                type="text"
                                placeholder="Buscar libro..."
                            />

                        </div>

                    </div>


                    {/* Tabla que muestra los libros registrados */}
                    <div className="tabla-contenedor">

                        <table>

                            <thead>

                                <tr>

                                    <th>
                                        ID
                                    </th>

                                    <th>
                                        Título
                                    </th>

                                    <th>
                                        Autor
                                    </th>

                                    <th>
                                        Estado
                                    </th>

                                    <th>
                                        Acciones
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {libros.map((libro) => (

                                    <tr key={libro.id}>

                                        <td>
                                            {libro.id}
                                        </td>

                                        <td>
                                            {libro.titulo}
                                        </td>

                                        <td>
                                            {libro.autor}
                                        </td>

                                        <td>

                                            <span
                                                className={
                                                    `estado ${
                                                        libro.estado === "Disponible"
                                                            ? "disponible"
                                                            : "prestado"
                                                    }`
                                                }
                                            >
                                                {libro.estado}
                                            </span>

                                        </td>

                                        <td>

                                            <button
                                                className="boton-secundario"
                                            >
                                                Editar
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </article>

            </section>

        </main>
    );
}

export default Libros;