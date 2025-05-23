import './navbar.css';
import React, { useState } from 'react'; // Importez useState
import image1 from '../../assets/images/quatre.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-md-4">
            <div className='nav-logo d-flex align-items-center'>
            <Link to='/' className='nav-link'><img src={image1} alt='logo' className="logo-img" /></Link>
              <h1 className="mb-0">MY MIND</h1>
            </div>
          </div>

          {/* Bouton hamburger (visible uniquement sur les petits écrans) */}
          <button className="navbar-toggle d-md-none" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          {/* Menu */}
          <div className={`col-md-8 ${isOpen ? 'open' : ''}`}>
            <ul className='nav-menu d-flex justify-content-space-between list-unstyled mb-0'>
              <li className='nav-item'><Link to='/' className='nav-link'>Accueil</Link></li>
              <li className='nav-item'><Link to='/about' className='nav-link'>About_us</Link></li>
              <li className='nav-item'><Link to='/contact' className='nav-link'>Nous_contacter</Link></li>
              <li className='nav-item connexion'><Link to='/login' className='nav-link'>Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;