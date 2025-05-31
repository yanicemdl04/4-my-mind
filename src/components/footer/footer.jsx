import React from "react"
import footer from "./Data"
import image1 from '../../assets/images/quatre.png';
import "./footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <Link to='/' className='nav-link'><img src={image1} alt='logo' className="logo-img" /></Link>
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

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
      </footer>
      <div className='legal'>
        <span>© 2025 By YaniceFamous.</span>
      </div>
    </>
  )
}

export default Footer
