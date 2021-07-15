import React from "react";
import HeroCarousel from "react-hero-carousel";

export const HomeBanner = () => (
    <HeroCarousel>
    <img
      src="./img/home.svg"
      width="100%"
      height="100%"
    />
    <img
      src="https://placem.at/places?w=1920&h=1080&seed=2&txt=2"
      width="100%"
      height="100%"
    />
    <img
      src="https://placem.at/places?w=1920&h=1080&seed=2&txt=eee"
      width="100%"
      height="100%"
    />
  </HeroCarousel>
);