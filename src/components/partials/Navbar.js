import React, { Component } from "react";


import { Link, NavLink, withRouter } from 'react-router-dom'

 class Navbar extends Component {
  render() {
    // console.log(this.props, ' Navbar');
    return (
      <nav>
        <div className="nav-wrapper" style={{ background: 'orange'}}>
          <NavLink to="/" className="brand-logo">
            ABDUL
          </NavLink>
          <ul id="nav-mobile" className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar)