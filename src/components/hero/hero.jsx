import React from 'react'
import './hero.css'
import arrow from '../../assets/images/fleche-droite.png'

const hero = ({heroCount, setHeroCount, heroData}) => {
  return (
    <div className='hero-design'>
      <div className="hero-text">
        <span><span><p>{heroData.text1  || "Texte par défaut 1"}</p></span></span>
        <p>{heroData.text2  || "Texte par défaut 2"}</p>
      </div>

      <div className="hero-explore">
        <p>Explorez plus</p>
        <img src={arrow} alt='fleche'/>
      </div>

      <div className="hero-dots-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot" }></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot" }></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot" }></li>
          <li onClick={()=>setHeroCount(3)} className={heroCount===3?"hero-dot orange":"hero-dot" }></li>
        </ul>
      </div>
      
    </div>
  )
}

export default hero