// Página principal del sistema.
// Muestra un resumen general de la información
// administrada por la biblioteca.

function Inicio() {

    // Datos temporales utilizados para mostrar
    // el resumen mientras se conecta la base de datos.
    const resumen = [
        {
            titulo: "Libros",
            cantidad: 125,
            descripcion: "Libros registrados en la biblioteca."
        },
        {
            titulo: "Lectores",
            cantidad: 87,
            descripcion: "Lectores registrados en el sistema."
        },
        {
            titulo: "Préstamos activos",
            cantidad: 14,
            descripcion: "Préstamos que todavía se encuentran activos."
        },
        {
            titulo: "Devoluciones pendientes",
            cantidad: 5,
            descripcion: "Libros que están pendientes de devolución."
        }
    ];

    return (
        <main className="inicio">

            {/* Sección de bienvenida del sistema */}
            <section className="bienvenida">

                <h1>
                    Bienvenido al Sistema Biblioteca
                </h1>

                <p>
                    Administra libros, lectores y préstamos
                    desde un solo lugar.
                </p>

            </section>


            {/* Panel con el resumen general de la biblioteca */}
            <section className="resumen">

                {resumen.map((elemento) => (

                    <article
                        className="tarjeta"
                        key={elemento.titulo}
                    >

                        {/* Nombre del indicador */}
                        <h2>
                            {elemento.titulo}
                        </h2>

                        {/* Cantidad correspondiente al indicador */}
                        <strong className="cantidad">
                            {elemento.cantidad}
                        </strong>

                        {/* Descripción del indicador */}
                        <p>
                            {elemento.descripcion}
                        </p>

                    </article>

                ))}

            </section>

        </main>
    );
}

export default Inicio;