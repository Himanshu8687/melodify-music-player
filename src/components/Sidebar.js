import React from "react";
import { useState } from "react";
import { FaHome, FaSearch, FaMusic } from "react-icons/fa";
import logoform from "../assets/logo.png";



function Sidebar({ focusSearch, setCategory }) {
  const [active,setActive] =
useState("home");

  return(
    <div className="sidebar">
      <img src={logoform} alt="Melodify Logo" className="logo" />
      <p className={active === "home" ? "active" : ""} onClick={() =>{setActive("home"); setCategory("all")}}><FaHome/> Home</p>

      <p className={active==="search" ? "active" : ""} onClick={() => {setActive("search");focusSearch();}}
      ><FaSearch/> Search</p>

      <h3><FaMusic/> Your Library</h3>

      <p className={active==="playlists" ? "active" : ""} onClick={() => {setActive("playlists"); setCategory("playlists");}}>Playlists</p>

      <p className={active==="artists" ? "active" : ""} onClick={() => {setActive("artists");
         setCategory("artists");}}>Artists</p>

      <p className={active==="albums" ? "active" : ""} onClick={() => {setActive("albums"); setCategory("albums");}}>Albums</p>

    </div>
  );
}

export default Sidebar;