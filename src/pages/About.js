import React from "react";
import cocktail from "../cocktail.png";

const About = () => {
  return (
    <section className='about-section'>
      <h1 className='section-title'>about</h1>
      <div className='about'>
        <img src={cocktail} alt='cocktail' />

        <div className='about-description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            blandit accumsan finibus. Donec ullamcorper magna at est vulputate,
            sit amet feugiat augue imperdiet. Etiam mauris est, pellentesque at
            ullamcorper sed, ornare vel neque. Donec finibus mauris nec elit
            sollicitudin blandit. Praesent interdum pharetra justo ac posuere.
            Sed enim quam, condimentum in dui sed, ultricies tincidunt sem.
            Etiam congue erat vulputate nibh feugiat, sed feugiat ligula
            lacinia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
