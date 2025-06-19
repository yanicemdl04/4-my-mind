import './navbar.css';
import React, { useState } from 'react';
import image1 from '../../assets/images/quatre.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fermer le menu au clic sur un lien (expérience mobile)
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="nav-logo">
          <Link to='/' className='nav-link'>
            <img src={image1} alt='logo' className="logo-img" />
          </Link>
          <h1 className="mb-0">MY MIND</h1>
        </div>

        {/* Bouton hamburger */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
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
    </header>
  );
};

export default Navbar;