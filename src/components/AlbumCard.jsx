import React from "react";
import styles from "./AlbumCard.module.css";

export default function AlbumCard({ album }) {
  return (
    <li className={`${styles.albumCard} container-fluid`}>
      <div className={`card ${styles.cardLg}`}>
        <div className="row g-0">
          <div className="col-lg-12">
            <img
              src={album.strAlbumThumb}
              className={`img-fluid rounded-start ${styles.albumImage}`}
              alt={album.strAlbum}
            />
          </div>
          <div className="col-lg-12">
            <div className="card-body">
              <h5 className="card-title">{album.strAlbum}</h5>
              <p className="card-text">{album.strDescriptionEN}</p>
              <p className="card-text">
                <small className="text-muted">
                  Estilo: {album.strStyle} - Genero: {album.strGenre}
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  A&ntilde;o: {album.intYearReleased}
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Sello: {album.strLabel} - {album.strReleaseFormat}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
