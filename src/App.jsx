// Componente principal de la aplicación.
// Controla qué parte de la aplicación se muestra
// dependiendo de si el usuario ha iniciado sesión.

import { useState } from "react";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Layout from "./components/Layout";
import "./App.css";

function App() {

    // Estado que controla si el usuario está autenticado.
    // Inicialmente el usuario no ha iniciado sesión.
    const [autenticado, setAutenticado] = useState(false);

    return (
        <>
            {autenticado ? (

                // Si el usuario está autenticado,
                // se muestra la estructura principal del sistema.
                <Layout>
                    <Inicio />
                </Layout>

            ) : (

                // Si no está autenticado,
                // se muestra el formulario de inicio de sesión.
                <Login onLogin={() => setAutenticado(true)} />

            )}
        </>
    );
}

export default App;