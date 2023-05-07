import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';


class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
  }

  render() {
    const LoginRegLink = (
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <h1>Login</h1>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link active">
            <h1>Register</h1>
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            <h1>Profile</h1>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/uploads" className="nav-link">
            <h1>Assignment Upload</h1>
          </Link>
        </li>

        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            <h1>Logout</h1>
          </a>
        </li>
      </ul>
    )

    return (
      <div style={{
        display: "flex",
        padding: "1em 1em",
        overflowX: "auto",
        justifyContent: "center"
      }}>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarSupportedContent"
          >
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <h1>Home</h1>
                </Link>
              </li>
            </ul>
            {localStorage.usertoken ? userLink : LoginRegLink}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
