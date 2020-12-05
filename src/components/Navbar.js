import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ history }) => {


    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <a
                        role="button"
                        className={'navbar-burger burger ${"is-active"}'}
                        aria-label="menu"
                        aria-expanded="false"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={'navbar-menu ${"is-active"}'}>
                    <div className="navbar-start">

                        <NavLink className="navbar-item" activeClassName="is-active" to="/quote">
                            Quote
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/"  exact>
                            Person
                        </NavLink>



                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;