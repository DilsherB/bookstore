import React from "react";
import { NavLink } from "react-router-dom";

// Navbar component
const Navbar = () => {
  const menuItems = {
    Books: "BOOKS",
    Categories: "CATEGORIES",
  };
  return (
    <div className="d-inline-flex px-3 w-100 bg-light">
      <ul className="d-flex gap-5 align-items-center">
        <h5 className="text-primary fs-2 fw-bold">Bookstore CMS</h5>
        {Object.keys(menuItems).map((item) => (
          <li key={item} className="list-group-item">
            <NavLink to={`${item}`} className="text-decoration-none text-dark">
              {menuItems[item]}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
