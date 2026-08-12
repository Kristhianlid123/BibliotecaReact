// Componente Layout
// Define la estructura común de las páginas internas
// del Sistema Biblioteca.

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({
    children,
    paginaActual,
    cambiarPagina,
    cerrarSesion
}) {

    return (
        <div className="aplicacion">

            {/* Encabezado principal */}
            <Header />

            {/* Menú principal de navegación */}
            <Navbar
                paginaActual={paginaActual}
                cambiarPagina={cambiarPagina}
                cerrarSesion={cerrarSesion}
            />

            {/* Contenido de la página seleccionada */}
            <main className="contenido">
                {children}
            </main>

            {/* Pie de página */}
            <Footer />

        </div>
    );
}

export default Layout;