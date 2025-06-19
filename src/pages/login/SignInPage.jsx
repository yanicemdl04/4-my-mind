import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import image1 from '../../assets/images/group-people.jpg';
import image2 from '../../assets/images/four-afican.jpg';
import image3 from '../../assets/images/happy-young.jpg';
import image4 from '../../assets/images/depressed-woman.PNG';

const images = [image1, image2, image3, image4];

const questions = [
  { label: "Adresse email", name: "email", type: "email", placeholder: "ex: monadresse@email.com", required: true },
  { label: "Nom", name: "nom", type: "text", placeholder: "Ton nom ici", required: true },
  { label: "Prénom", name: "prenom", type: "text", placeholder: "Et ton prénom...", required: true },
  { label: "Mot de passe", name: "password", type: "password", placeholder: "Un secret bien gardé 🔒", required: true },
  { label: "Qu'est-ce qui vous rend heureux(se) ?", name: "happy", type: "text", placeholder: "Partage une source de bonheur", required: false },
  { label: "Quelle est votre plus grande source de stress ?", name: "stress", type: "text", placeholder: "Exprime-toi sans crainte...", required: false },
  { label: "Avez-vous un objectif personnel important cette année ?", name: "goal", type: "text", placeholder: "Rêve grand, écris-le ici !", required: false },
  { label: "Comment gérez-vous vos émotions difficiles ?", name: "emotion", type: "text", placeholder: "Un petit conseil à toi-même ?", required: false },
];

const SignInPage = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({});
  const [imageFade, setImageFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setImageFade(false);
    const timeout = setTimeout(() => setImageFade(true), 50);
    return () => clearTimeout(timeout);
  }, [step]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 2);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setStep(step - 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/menu', { state: { ...form } });
  };

  const currentQuestions = questions.slice(step, step + 2);
  const isLastStep = step + 2 >= questions.length;

  const imageIndex = Math.floor(step / 2) % images.length;
  const rightImage = images[imageIndex];

  return (
    <div className="login-signin-page container signin-responsive">
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Bienvenue</h2>
          <h4 className="animation a2">Inscris-toi pour accéder à 4MyMind</h4>
        </div>
        <form className="form" onSubmit={isLastStep ? handleSubmit : handleNext}>
          {currentQuestions.map((q, idx) => (
            <div key={q.name} className="form-group animation" style={{ animationDelay: `${1.7 + idx * 0.1}s` }}>
              <label htmlFor={q.name} className="form-label">{q.label}</label>
              <input
                className="form-field"
                style={{ fontSize: '1.15rem', height: '56px' }}
                type={q.type}
                name={q.name}
                id={q.name}
                aria-label={q.label}
                placeholder={q.placeholder}
                value={form[q.name] || ''}
                onChange={handleChange}
                required={q.required}
                autoComplete="off"
              />
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, gap: 12 }}>
            {step > 0 && (
              <button
                type="button"
                className="form-field"
                style={{ background: 'gold', color: '#000', width: '48%', fontSize: '1.1rem', height: '48px' }}
                onClick={handlePrev}
              >
                Précédent
              </button>
            )}
            <button
              type="submit"
              className="form-field"
              style={{ background: 'gold', color: '#000', width: step > 0 ? '48%' : '100%', fontSize: '1.1rem', height: '48px' }}
            >
              {isLastStep ? "Terminer" : "Suivant"}
            </button>
          </div>
          <p style={{ marginTop: 24, textAlign: 'right', fontSize: '1rem' }}>
            Déjà un compte ? <Link to="/login">Se connecter</Link>
          </p>
        </form>
      </div>
      <div className="right" role="presentation">
        <div
          className={`signin-image-bg ${imageFade ? 'fade-in' : 'fade-out'}`}
          style={{
            backgroundImage: `url(${rightImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0,
            transition: 'opacity 0.7s cubic-bezier(.4,2,.6,1)'
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
