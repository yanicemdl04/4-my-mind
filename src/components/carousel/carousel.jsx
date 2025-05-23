import React from 'react';
import CarouselData from './CarouselData.jsx';
import AnimatedSection from '../../assets/AnimatedSection.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Augmenté pour un défilement plus fluide
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "65px",
    autoplay: true, // Activation du défilement automatique
    autoplaySpeed: 3000, // Intervalle de 3 secondes entre chaque slide
    pauseOnHover: true, // Pause au survol
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div className="py-10 bg-gray-50">
      <div className="title">
        <AnimatedSection>
        <div className="justify-center items-center text-center">
          <h2>Plus de 1 000 avis 5 étoiles.</h2>
          <p>Découvrez pourquoi les utilisateurs adorent 4 My Mind.</p>
        </div>
        </AnimatedSection>
      </div>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <Slider {...settings}>
            {CarouselData.map((d, index) => (
              <div key={index} className="px-2 outline-none focus:outline-none">
                <div className="bg-white h-[450px] text-black rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="h-56 bg-indigo-500 flex items-center justify-center">
                    <img 
                       
                    src={d.img}  alt={d.nom}
                      className="rounded-full border-4 border-white w-32 h-32 object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col items-center text-center gap-4">
                    <h3 className="text-xl font-bold">{d.nom}</h3>
                    <p className="text-gray-600 line-clamp-3">{d.review}</p>
                    <button className="button hover:bg-blue-600 transition-colors duration-300">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Carousel;