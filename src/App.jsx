// Componente principal de la aplicación.
// Controla la autenticación del usuario y la vista
// que se muestra dentro del sistema.

import { useState } from "react";

import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Libros from "./pages/Libros";
import Lectores from "./pages/Lectores";
import Prestamos from "./pages/Prestamos";
import Devoluciones from "./pages/Devoluciones";

import Layout from "./components/Layout";

import "./App.css";

function App() {

    // Estado que controla si el usuario ha iniciado sesión.
    const [autenticado, setAutenticado] = useState(false);

    // Estado que indica cuál sección del sistema está seleccionada.
    const [pagina, setPagina] = useState("inicio");

    // Si el usuario no está autenticado, se muestra el Login.
    if (!autenticado) {

        return (
            <Login
                onLogin={() => setAutenticado(true)}
            />
        );
    }

    // Selecciona el componente que corresponde a la página actual.
    const mostrarPagina = () => {

        switch (pagina) {

            case "libros":
                return <Libros />;

            case "lectores":
                return <Lectores />;

            case "prestamos":
                return <Prestamos />;

            case "devoluciones":
                return <Devoluciones />;

            default:
                return <Inicio />;
        }
    };

    return (
        <Layout
            paginaActual={pagina}
            cambiarPagina={setPagina}
            cerrarSesion={() => setAutenticado(false)}
        >
            {mostrarPagina()}
        </Layout>
    );
}

export default App;