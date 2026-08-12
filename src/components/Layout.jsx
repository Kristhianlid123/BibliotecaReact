// Componente Layout
// Define la estructura general de las páginas internas
// que estarán disponibles después del inicio de sesión.

import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {

    return (
        <div className="aplicacion">

            {/* Encabezado del sistema */}
            <Header />

            {/* Menú principal de navegación */}
            <Navbar />

            {/* Contenido de la página actual */}
            <main className="contenido">
                {children}
            </main>

            {/* Pie de página */}
            <Footer />

        </div>
    );
}

export default Layout;