import React from 'react';
import AnimatedSection from '../../assets/AnimatedSection.jsx';
import CardReseau3 from '../../assets/images/Card réseau3.png';
import CardReseau4 from '../../assets/images/Card réseau4.png';
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
              <p>Profitez de nos services</p>
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
            <p>Suivez vos symptômes et vos mesures</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className='feats2'>
            <div className="container">
              <div className="row fonction align-items-center">
                <div className="col-md-5 paragraph">
                  <h3>Soyez rappelé de toutes vos prises grâce à des alarmes de médicaments fiables</h3>
                  <p>Rappels fiables pour vos comprimés, pilules et autres médicaments, ainsi que pour vos mesures, vos rendez-vous chez le médecin ou vos contrôles de symptômes.
                    L'application MyTherapy garde une trace de vos médicaments et de votre thérapie pour vous, afin que vous puissiez vous concentrer sur d'autres choses importantes.
                  </p>
                </div>
                <div className="col-md-7 visuel text-end">
                  <img src={fonction} alt="fontionalités" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className='feats3'>
            <div className="container">
              <div className="row fonction align-items-center">
                <div className="col-md-7 visuel">
                  <img src={fonction1} alt="fontionalités" className="img-fluid" />
                </div>
                <div className="col-md-5 paragraph">
                  <h3>Suivez vos symptômes et vos mesures</h3>
                  <p>Les fonctionnalités complètes de MyTherapy vous permettent d'être mieux préparé que jamais pour votre prochain rendez-vous chez le médecin.
                  En ayant un aperçu détaillé de votre traitement, de vos apports, de l'évolution de vos symptômes, de vos 
                  mesures et de votre humeur, votre médecin peut avoir une meilleure idée de votre bien-être. Cela peut aider à éclairer les décisions et à optimiser votre traitement plus efficacement.</p>
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