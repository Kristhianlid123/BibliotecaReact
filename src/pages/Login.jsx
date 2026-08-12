// Componente Login
// Permite al usuario ingresar sus credenciales para acceder
// al Sistema Biblioteca.

import { useState } from "react";

function Login({ onLogin }) {

    // Estados utilizados para almacenar los datos introducidos
    // por el usuario en el formulario.
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensaje, setMensaje] = useState("");

    // Procesa el envío del formulario de inicio de sesión.
    const manejarLogin = (evento) => {

        evento.preventDefault();

        // Validación temporal de las credenciales.
        // Posteriormente esta información podrá consultarse
        // desde la base de datos.
        if (usuario === "admin" && contrasena === "123456") {

            setMensaje("Inicio de sesión correcto.");
            onLogin();

        } else if (
            usuario === "auxiliar1" &&
            contrasena === "auxiliar2026"
        ) {

            setMensaje("Inicio de sesión correcto.");
            onLogin();

        } else {

            setMensaje("Usuario o contraseña incorrectos.");

        }
    };

    return (
        <div className="login-container">

            {/* Tarjeta principal del formulario de inicio de sesión */}
            <div className="login-card">

                <h1>Sistema Biblioteca</h1>

                <p className="login-subtitle">
                    Iniciar sesión
                </p>

                {/* Formulario de autenticación */}
                <form onSubmit={manejarLogin}>

                    {/* Campo para ingresar el usuario */}
                    <div className="form-group">
                        <label htmlFor="usuario">
                            Usuario
                        </label>

                        <input
                            id="usuario"
                            type="text"
                            value={usuario}
                            onChange={(evento) =>
                                setUsuario(evento.target.value)
                            }
                            placeholder="Ingrese su usuario"
                        />
                    </div>

                    {/* Campo para ingresar la contraseña */}
                    <div className="form-group">
                        <label htmlFor="contrasena">
                            Contraseña
                        </label>

                        <input
                            id="contrasena"
                            type="password"
                            value={contrasena}
                            onChange={(evento) =>
                                setContrasena(evento.target.value)
                            }
                            placeholder="Ingrese su contraseña"
                        />
                    </div>

                    {/* Botón que envía el formulario */}
                    <button type="submit" className="login-button">
                        Ingresar
                    </button>

                </form>

                {/* Mensaje generado después de intentar iniciar sesión */}
                {mensaje && (
                    <p className="login-message">
                        {mensaje}
                    </p>
                )}

            </div>

        </div>
    );
}

export default Login;