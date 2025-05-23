import React, { useEffect, useState } from 'react';
import Background from '../../components/background/background';
import Navbar from '../../components/navbar/navbar.jsx';
import Hero from '../../components/hero/hero.jsx';
import Features from '../../components/features/features.jsx';
import Carousel from '../../components/carousel/carousel.jsx';
import Footer from '../../components/footer/footer.jsx';


const HomePage = () => {
  let heroData = [
    { text1: "Derrière ton sourire", text2: "Se cache toute la peine du monde" },
    { text1: "N'aie pas peur de t'exprimer", text2: "Parle et allège ton cœur" },
    { text1: "Ruminer sans cesse le passé", text2: "Ne t'aidera pas à avancer" },
    { text1: "Chéris les moments passés avec tes proches", text2: "C'est en eux que tu trouveras la force d'avancer" }
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => count === 3 ? 0 : count + 1);
    }, 3000);

    return () => clearInterval(interval); // Nettoyer l'intervalle
  }, []);

  return (
    <div>
      <Navbar />
      <Background heroCount={heroCount} />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      <Features />
      <Carousel />
      <Footer />



    </div>
  );
};

export default HomePage;