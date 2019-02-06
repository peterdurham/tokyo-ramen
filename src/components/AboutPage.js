import React from "react";

import "../sass/main.scss";

import RamenBowlArt from "../img/ramenbowlart.jpg";

const AboutPage = () => {
  return (
    <div>
      <div className="about__section1">Our Story</div>
      <div className="about__section2">
        <div className="about__section2--text">We love Ramen</div>
        <img
          className="about__section2--image"
          src={RamenBowlArt}
          alt="ramen bowl"
        />
      </div>
      <div className="about__section5">
        Tokyo Ramen is a laid-back ramen restaurant in downtown Tokyo, Japan. We
        have a full-service bar. Visit one of the best ramen places in Tokyo
        today to fill up on tasty ramen.
      </div>
      <div className="about__section3">
        Whether you visit as a group, family or a single person – our aim is to
        provide a relaxed and comfortable experience that you can enjoy.
      </div>
    </div>
  );
};

export default AboutPage;
