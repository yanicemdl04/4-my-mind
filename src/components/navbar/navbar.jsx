import './navbar.css';
import React, { useState } from 'react'; // Importez useState
import image1 from '../../assets/images/quatre.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu déroulant lors du clic sur un lien
  };

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
          <nav className={`nav-menu${isOpen ? ' open' : ''}`}>
            <ul
              className="nav-list d-flex flex-column flex-md-row justify-content-space-between list-unstyled mb-0"
              style={{ gap: '2rem' }} // Ajoute un espace horizontal entre les items
            >
              <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={handleLinkClick}>Accueil</Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link' onClick={handleLinkClick}>About_us</Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link' onClick={handleLinkClick}>Nous_contacter</Link>
              </li>
              <li className='nav-item connexion'>
                <Link to='/login' className='nav-link' onClick={handleLinkClick}>Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;