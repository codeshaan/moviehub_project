import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  toggleNav = () => {
    const navbar = this.refs.navbar;
    if (navbar.className === "topnav") {
      navbar.className += " responsive";
    } else {
      navbar.className = "topnav";
    }
  };

  render() {
    return (
      <nav>
        <div class="topnav" id="myTopnav" ref="navbar">
          <Link to="/">
            <a href="#!" className="logo">
              MovieHUB
            </a>
          </Link>
          <a href="#!">Home</a>
          <a href="#!">API</a>
          <a href="#!">GitHUb</a>
          <a href="#!" class="icon" onClick={this.toggleNav}>
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </nav>
    );
  }
}
