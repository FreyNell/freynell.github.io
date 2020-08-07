import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function Post() {
    return (
        <div>
            <Navigation/>
            <main id="content" class="group" role="main">
                <article>
                    <header>
                        <h3>Procedimientos Almacenados</h3>
                        <p>Para aquellas mentes recién salidas de la incubadora (Universidad)...</p>
                    </header>
                    <details open>
                        <summary>Un Procedimiento Almacenado no es mas que un script de SQL que puede o no recibir parámetros al mejor estilo de una función en tu lenguaje favorito. </summary>
                        <p>El procedimiento almacenado nace de la necesidad de hacer operaciones complejas con varias tablas y datos en un motór de base de datos SQL, donde dependiendo de una entrada pueda retornar una salida espera de datos para trabajar en las aplicaciones. </p>
                        <p>También nos otorga seguridad para evitar el SQL Injection, una de las amenazas a los sitios web entre los top 10 de amenazas a los sitios web descritor en el <a href="https://owasp.org/www-project-top-ten/">OWASP TOP 10</a>.</p>
                        <p>Una ventaja adicional que nos da el Procedimiento Almacenado, es que nos quita la necesidad de escribir con strings en nuestro código las consultas, inserciones, actualizaciones y borrados que surjan.</p>
                    </details>
                </article>
            </main>
            <Footer />
        </div>
    )
}