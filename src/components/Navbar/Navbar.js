import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CancelIcon from '@mui/icons-material/Cancel';
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'
import Logo from '../../assets/logo2.png'
import CartWidget from './CartWidget'

const Header = () => {
  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      <div className="menu-icon">
        <MenuIcon className="menu" onClick={showMenu} />
      </div>

      {/*Si la nav esta activa se le agregara la clase slider active | de lo contrario sera sólo la clase slider*/}
      <nav className={active ? 'slider active' : 'slider'}>
        <ul>
          <div className="closed">
            <CancelIcon className="close" onClick={showMenu} />
          </div>

          <li>
            <NavLink to="/">Home</NavLink>
          </li> 
          <li>
            <NavLink to="/category/natacion">Natación</NavLink>
          </li>
          <li>
            <NavLink to="/category/buceo">Buceo</NavLink>
          </li> 
          <li>
            <NavLink to="/category/surf">Surf</NavLink>
          </li>
          <li>
            <NavLink to="/login">Acceder</NavLink>
          </li>
          <li>
            <NavLink id="ver-carrito" className="cart" to="/cart"> <button className={'btn btn-outline'}><CartWidget /></button> </NavLink>
          </li> 
        </ul>
      </nav>
    </div>
  )
}

export default Header
