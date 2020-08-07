import React from "react"
import Navigation from "../components/navigation"
import treetalent from "../treetalent.svg"
import Footer from "../components/footer"

export default function Tree() {
    return (
        <div>
            <Navigation/>
            <section>
                <figure>
                    <figcaption>Arbol de Talentos</figcaption>
                    <img src={treetalent} alt="Arbol de Talentos" width="700" height="700" />
                </figure>
            </section>
            <Footer />
        </div>
    )
}