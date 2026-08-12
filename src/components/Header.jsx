// Componente Header
// Contiene el encabezado principal que se mostrará en las diferentes
// secciones del Sistema Biblioteca.

function Header() {

    return (
        <header className="encabezado">

            {/* Información principal del sistema */}
            <div>
                <h1 className="tituloSistema">
                    Sistema Biblioteca
                </h1>

                <p className="subtitulo">
                    Gestión de libros y préstamos
                </p>
            </div>

        </header>
    );

}

export default Header;