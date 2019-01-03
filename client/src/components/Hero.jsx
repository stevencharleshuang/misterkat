import React from 'react';
import HeroBGImg from '../img/hero-bg-1.jpg';

export default function Hero() {
  return(
    <div className="hero">
      <img src={HeroBGImg} alt="hero"/>
    </div>
  );
}