import React from 'react';
import AnimatedSection from '../../assets/AnimatedSection.jsx';
import CardReseau3 from '../../assets/images/Card-reseau3.png';
import CardReseau4 from '../../assets/images/Card-reseau4.png';
import cards3 from '../../assets/images/dormirr.png';
import fonction from '../../assets/images/mental-health.jpg';
import fonction1 from '../../assets/images/colour-friends.jpg';
import './features.css';


function Features() {
  return (
    <div className="features-container">
      <div className="container">
        <div className="row">
          <AnimatedSection>
            <div className="title text-center">
              <h2>Nous sommes là pour vous aider <br /> à vous sentir mieux.</h2>
              <h3>Profitez de nos services</h3>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="features">
              <div className="col-md-4 feat">
                <img src={CardReseau3} alt="people talking" />
                <h2>Stresser moins.</h2>
                <p>Soulagez instantanément votre stress et votre anxiété.</p>
              </div>
              <div className="col-md-4 feat">
                <img src={CardReseau4} alt="people talking" />
                <h2>Vivez en pleine conscience.</h2>
                <p>Traverser les hauts et les bas de la vie avec résilience.</p>
              </div>
              <div className="col-md-4 feat">
                <img src={cards3} alt="people talking" />
                <h2>Dormir plus.</h2>
                <p>S'endormir jusqu'au matin naturellement et paisiblement.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <section>
        <AnimatedSection>
          <div className="title text-center">
            <h2>Soyez bien préparé pour votre prochain<br /> rendez-vous chez le médecin.</h2>
            <h3>Suivez vos symptômes et vos mesures</h3>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="feats2">
            <div className="container">
              <div className="row fonction align-items-center">
                <div className="col-md-5 paragraph">
                  <h2>Reprends le contrôle de ton bien-être mental</h2>
                  <p>
                    Chez <strong>4 My Mind</strong>, nous croyons que chaque jour est une nouvelle chance de se 
                    reconnecter à soi-même. Grâce à des outils simples mais puissants, tu peux suivre tes émotions, 
                    exprimer ce que tu ressens, et prendre soin de ton esprit comme tu prends soin de ton corps. 
                    Tu n'es pas seul·e dans ce voyage : nous sommes là pour t’accompagner à chaque étape.
                  </p>
                </div>
                <div className="col-md-7 visuel text-end">
                  <img src={fonction} alt="Fonctionnalités de suivi" className="img-fluid rounded shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="feats3">
            <div className="container">
              <div className="row fonction align-items-center">
                <div className="col-md-7 visuel">
                  <img src={fonction1} alt="Suivi médical" className="img-fluid rounded shadow-lg" />
                </div>
                <div className="col-md-5 paragraph">
                  <h2>Ta santé mentale compte autant que ta santé physique</h2>
                  <p>
                  Notre application t’aide à prendre conscience de ton état émotionnel, à identifier les sources de stress
                   ou d’anxiété, et à cultiver des habitudes qui favorisent l’équilibre. À travers un journal expressif, 
                   des exercices de relaxation et un suivi personnalisé, <strong>4 My Mind</strong> devient ton allié 
                   quotidien pour vivre une vie plus calme, plus lucide, et plus alignée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

export default Features;