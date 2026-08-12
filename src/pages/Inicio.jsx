// Componente Inicio
// Representa la pantalla principal que verá el usuario
// después de iniciar sesión en el Sistema Biblioteca.

function Inicio() {

    return (
        <div className="inicio">

            {/* Encabezado de bienvenida */}
            <section className="bienvenida">

                <h1>
                    Bienvenido al Sistema Biblioteca
                </h1>

                <p>
                    Administra libros, lectores y préstamos
                    desde un solo lugar.
                </p>

            </section>

            {/* Resumen de las principales funciones del sistema */}
            <section className="resumen">

                <div className="tarjeta">

                    <h2>Libros</h2>

                    <p>
                        Consulta y administra los libros
                        disponibles en la biblioteca.
                    </p>

                </div>

                <div className="tarjeta">

                    <h2>Lectores</h2>

                    <p>
                        Registra y consulta la información
                        de los lectores.
                    </p>

                </div>

                <div className="tarjeta">

                    <h2>Préstamos</h2>

                    <p>
                        Gestiona los préstamos realizados
                        por los lectores.
                    </p>

                </div>

                <div className="tarjeta">

                    <h2>Devoluciones</h2>

                    <p>
                        Registra y controla la devolución
                        de los libros prestados.
                    </p>

                </div>

            </section>

        </div>
    );
}

export default Inicio;