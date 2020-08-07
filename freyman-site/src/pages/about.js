import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function About(props) {
    function isIndex(index) {
        if (!index) {
            return <Footer />
        }
    }
    return (
        <div>
            <header>
                <h1>Ingeniero de Sistemas e Informática</h1>
                <h2>Freyman Lahionnell Balaguera Rubio</h2>
            </header>
            <Navigation/>
            {isIndex(props.isIndex)}
        </div>
    )
}