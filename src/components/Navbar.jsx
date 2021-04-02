import React, { Component } from "react";

const NavBar = (props) => {
  //console.log("navbar rendered");
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge bdage-pill badge-secondary">
              {props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
