import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Anime</h1>
      <nav className="list-menu">
        <a href="#">Home</a>
        <a href="#">List Anime</a>
      </nav>
      <input
        type="text"
        placeholder="Search anime or movie"
        className="search-input"
      />
    </header>
  );
};

export default Header;
