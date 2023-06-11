import React from "react";
import { NavLink } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

// Navbar component
const Navbar = () => {
  const menuItems = {
    Books: "BOOKS",
    Categories: "CATEGORIES",
  };
  return (
    // <div className="container bg-success w-100">
    <ul className="container d-flex align-items-center mt-2 bg-white rounded border">
      <h3 className="text-primary fw-bold" style={{ width: "25%" }}>
        Bookstore CMS
      </h3>
      <div className="d-flex gap-3 ms-5" style={{ width: "75%" }}>
        {Object.keys(menuItems).map((item) => (
          <li
            key={item}
            className="list-group-item mx-3"
            style={{ width: "15%" }}
          >
            <NavLink to={`${item}`} className="text-decoration-none text-dark">
              {menuItems[item]}
            </NavLink>
          </li>
        ))}
      </div>
      <PermIdentityIcon
        className="text-primary border border-2 rounded-circle"
        style={{ float: "right", cursor: "pointer" }}
      />
    </ul>
    // </div>
  );
};

export default Navbar;
