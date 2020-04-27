import React from 'react';
import {Link} from 'react-router-dom';

const navBar = props => {

  let content =
    (
      <div className="navBar">
        <Link to="/"><h1 className="title">Climapp</h1></Link>
        <div className="links">
          <Link to="/">Inicio</Link>
          <Link to="/search">Buscar</Link>
          <Link to="/about">Acerca de</Link>
        </div>
      </div>
    )
  return content;
}

export default navBar;