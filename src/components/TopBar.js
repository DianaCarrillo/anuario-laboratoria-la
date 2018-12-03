import React from 'react';
import logo from '../img/black-logo.png'

const styles = {
  navbar: {
    backgroundColor: '#56F89A',
  },
  links: {
    color: '#000000'
  }
}




export default () => (
  <nav className="navbar navbar-expand-lg navbar-light" style={styles.navbar}>
    <a className="navbar-brand"> <img src={logo} alt="Laboratoria logo" height="30" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="j" style={styles.links}>Cerrar sesión</a>
        </li>
      </ul>
    </div>
  </nav>
);
