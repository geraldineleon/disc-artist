import React, { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import ArtistComponent from "./ArtistComponent";
import styles from "./AlbumsGrid.module.css";
import AlbumCard from "./AlbumCard";

export default function AlbumsGrid() {
  const query = useQuery();
  const ar = query.get("artist");

  const apiArtist = "https://theaudiodb.com/api/v1/json/2/search.php?s=";
  const apiAlbums = "https://theaudiodb.com/api/v1/json/2/album.php?i=";

  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [idArtist, setIdArtist] = useState(0);

  useEffect(() => {
    fetch(apiArtist + ar)
      .then((result) => result.json())
      .then((data) => {
        setArtist(data.artists);
      });
    setIdArtist(0);
  }, [ar]);

  const artista = artist ? artist[0] : null;

  useEffect(() => {
    fetch(apiAlbums + idArtist)
      .then((result) => result.json())
      .then((data) => {
        setAlbums(data.album);
      });
  }, [idArtist || ar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artista != null) {
      setIdArtist(0);
      setIdArtist(artist[0].idArtist);
    }
  };

  return (
    <div className="container">
      <div>
        <ArtistComponent artista={artista} />
      </div>
      <hr />
      <div>
        <h3>Discografia completa: {artista ? artista.strArtist : ""}</h3>{" "}
        <form onSubmit={handleSubmit}>
          <button
            disabled={albums ? false : true}
            type="submit"
            className="btn btn-outline-primary"
          >
            Buscar
          </button>
        </form>
        <ul className={styles.albumsGrid}>
          {ar
            ? albums.map((album) => {
                return <AlbumCard key={album.idAlbum} album={album} />;
              })
            : null}
        </ul>
      </div>
    </div>
  );
}
