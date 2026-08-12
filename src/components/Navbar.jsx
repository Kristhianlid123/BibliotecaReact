// Componente Navbar
// Contiene las opciones principales de navegación
// del Sistema Biblioteca.

function Navbar({
    paginaActual,
    cambiarPagina,
    cerrarSesion
}) {

    // Cambia la página que se muestra en el sistema.
    const navegar = (pagina) => {
        cambiarPagina(pagina);
    };

    return (
        <nav className="navbar">

            {/* Opciones principales del sistema */}
            <div className="nav-links">

                <button
                    className={paginaActual === "inicio" ? "activo" : ""}
                    onClick={() => navegar("inicio")}
                >
                    Inicio
                </button>

                <button
                    className={paginaActual === "libros" ? "activo" : ""}
                    onClick={() => navegar("libros")}
                >
                    Libros
                </button>

                <button
                    className={paginaActual === "lectores" ? "activo" : ""}
                    onClick={() => navegar("lectores")}
                >
                    Lectores
                </button>

                <button
                    className={paginaActual === "prestamos" ? "activo" : ""}
                    onClick={() => navegar("prestamos")}
                >
                    Préstamos
                </button>

                <button
                    className={paginaActual === "devoluciones" ? "activo" : ""}
                    onClick={() => navegar("devoluciones")}
                >
                    Devoluciones
                </button>

            </div>

            {/* Botón para cerrar la sesión */}
            <button
                className="logout-button"
                onClick={cerrarSesion}
            >
                Cerrar sesión
            </button>

        </nav>
    );
}

export default Navbar;