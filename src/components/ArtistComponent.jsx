import React from "react";

export default function ArtistComponent({ artista }) {
  if (artista == null) {
    return (
      <div className="container-fluid mt 5">
        Escribe el nombre de un artista para buscar
      </div>
    );
  }

  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-4">{artista.strArtist}</h1>
        <div className="container-md">
          <img className="img-fluid" src={artista.strArtistThumb} alt="" />
        </div>
        <p className="lead">
          Nace en : {artista.intBornYear} -
          {artista.intDiedYear
            ? " Muere en: " + artista.intDiedYear
            : " Presente"}
        </p>
        <p className="lead">Pais: {artista.strCountry}</p>
        <p className="lead">
          Genero: {artista.strGenre} - Estilo: {artista.strStyle}
        </p>
        <a
          href={"https://" + artista.strWebsite}
          className="btn btn-outline-success"
          target="_blank"
        >
          Visitar sitio web
        </a>
        <p className="lead">Biografia: {artista.strBiographyEN}</p>
      </div>
    </div>
  );
}
