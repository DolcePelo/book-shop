import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from 'react-router-dom';
import Dropdown from "../Dropdown/Dropdown";

import TotalItems from '../CartContent/TotalItems';
import './Navbar.css';

function Navbar() {
  const { cart } = useContext(dataContext)

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"}>
          <h1 className="navbar-logo">Shop.</h1>
        </Link>
        <div>
          <Dropdown />
        </div>
        <Link className='seeCarrito' to={'/cart'}>
          🛒
          {cart.length > 0 ? <TotalItems /> : null}

        </Link>
      </nav>
    </div>
  )
}

export default Navbar;