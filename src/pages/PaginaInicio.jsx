import React from "react";
import NavBar from "../components/NavBar";
import PrimerComponent from "../components/PrimerComponent";
import Buscar from "../components/Buscar";
import AlbumsGrid from "../components/AlbumsGrid";
import Footer from "../components/Footer";

export default function PaginaInicio() {
  return (
    <div>
      <PrimerComponent />
      <hr />
      <NavBar />
      <hr />
      <Buscar />
      <hr />
      <AlbumsGrid />
      <hr />
      <Footer />
    </div>
  );
}
