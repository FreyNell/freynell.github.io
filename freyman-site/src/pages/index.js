import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import About from "./about"
export default function Home() {
  return (
    <div>
      <About isIndex={true}/>
      <Navigation/>
      <Footer/>
    </div>);
}
