import React from "react";
import footer from "./Data";
import image1 from '../../assets/images/quatre.png';
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container footer-contact-container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Une question ?</h1>
              <p>On est là pour t’accompagner dans ton parcours bien-être.</p>
            </div>
            <Link to='/contact' className='btn-contact'>Contacte-nous</Link>
          </div>
        </div>
      </section>

      <footer>
        <div className='container footer-main'>
          <div className='box logo-box'>
            <Link to='/' className='nav-link'>
              <img src={image1} alt='logo' className="logo-img" />
            </Link>
            <h2>Besoin d’un coup de pouce ?</h2>
            <p>Reste informé avec nos conseils, offres et outils chaque mois.</p>

            <div className='input-group'>
              <input type='email' placeholder='Adresse email' />
              <button type='submit'>S’abonner</button>
            </div>
          </div>

          <div className='footer-links'>
            {footer.map((val, i) => (
              <div className='box' key={i}>
                <ul>
                  <li>
                    <Link to={val.path}>{val.text}</Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>

      <div className='legal'>
        <span>© 2025 For My Mind - Design by YaniceFamous.</span>
      </div>
    </>
  );
};

export default Footer;
