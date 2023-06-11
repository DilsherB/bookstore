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
    <ul className="container d-flex align-items-center mt-2 bg-white rounded border mediaQueryMenu">
      <h3 className="text-primary fw-bold mediaQueryLogo" style={{ width: "25%" }}>
        Bookstore CMS
      </h3>
      <div
        className="d-inline-flex justify-content-between subMediaQueryMenu"
        style={{ width: "100%" }}
      >
        <div className="d-flex gap-5 ms-5">
          {Object.keys(menuItems).map((item) => (
            <li
              key={item}
              className="list-group-item mx-3 mediaQueryMargin"
              style={{ width: "15%" }}
            >
              <NavLink
                to={`${item}`}
                className="text-decoration-none text-dark"
              >
                {menuItems[item]}
              </NavLink>
            </li>
          ))}
        </div>
        <div>
          <PermIdentityIcon
            className="text-primary border border-2 rounded-circle"
            style={{ float: "right", cursor: "pointer" }}
          />
        </div>
      </div>
    </ul>
  );
};

export default Navbar;
