import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/images/group-people.jpg';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/menu');
  };

  return (
    <div className='signLog'>
      <div className="login-page container signin-responsive">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Bienvenue</h2>
            <h4 className="animation a2">Connecte-toi à 4MyMind</h4>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group animation a3">
              <label htmlFor="email" className="form-label">Adresse email</label>
              <input
                className="form-field"
                type="email"
                name="email"
                id="email"
                placeholder="Ton adresse email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group animation a4">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                className="form-field"
                type="password"
                name="password"
                id="password"
                placeholder="Ton mot de passe secret"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="form-field animation a5" style={{ background: 'gold', color: '#000', fontWeight: 600 }}>
              Se connecter
            </button>
            <p className="animation a6" style={{ marginTop: 20, textAlign: 'right' }}>
              Pas encore de compte ? <Link to="/SignIn">S'inscrire</Link>
            </p>
          </form>
        </div>
        <div className="right">
          <img
            src={image}
            alt="Illustration"
            style={{ width: '100%', height: '100vh', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;