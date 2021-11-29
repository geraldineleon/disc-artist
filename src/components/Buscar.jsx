import React, { useState, useEffect } from "react";
import styles from "./Buscar.module.css";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "../hooks/useQuery";
import { useNavigate } from "react-router-dom";

export default function Buscar() {
  const history = useNavigate();
  const query = useQuery();
  const search = query.get("artist");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history("/disc-artist/?artist=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Buscar discografia"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={35} />
        </button>
      </div>
    </form>
  );
}
