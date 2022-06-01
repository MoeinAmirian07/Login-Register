import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { menuList } from "./menuList";
import "./navbar.css";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuListFinal = menuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <Link to="/" className="navlink">
        <div className="logo">
          Home <font>Test</font>
        </div>
      </Link>

      <div className="menu-icon" onClick={handleClick}></div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        {menuListFinal}
      </ul>
    </nav>
  );
};
