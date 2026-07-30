import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Search from "../Search/Search";

/**
 * The 2019 version was declared `const Header = (onSearch) => ...`, so the parameter was
 * really the whole props object, and App rendered `<Header/>` with no props at all. The
 * search box therefore received `onSearch={{}}` and threw on every click.
 *
 * The About / Add New / Pricing / Disabled nav items are gone: the first two routed to
 * pages that were never written and rendered a blank body, the other two were href="#".
 */
const Header = ({ onSearch }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        News
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setOpen(!open)}
        aria-controls="navbarNav"
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={`collapse navbar-collapse${open ? " show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
        </ul>
        <Search onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Header;
