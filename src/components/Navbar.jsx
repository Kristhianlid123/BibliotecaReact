// Componente Navbar
// Contiene las opciones principales de navegación
// del Sistema Biblioteca.

function Navbar() {

    return (
        <nav className="navbar">

            {/* Opciones de navegación del sistema */}
            <div className="nav-links">

                <button>Inicio</button>

                <button>Libros</button>

                <button>Lectores</button>

                <button>Préstamos</button>

                <button>Devoluciones</button>

            </div>

            {/* Opción para cerrar la sesión */}
            <button className="logout-button">
                Cerrar sesión
            </button>

        </nav>
    );
}

export default Navbar;