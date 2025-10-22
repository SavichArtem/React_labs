import React from 'react';
import '../HeroSection/HeroSection.css';

export function HeroSection() {
  return (
    <div>
      <section className="hero_section">
        <div className="container">
          <div className="hero_content">
            <div className="hero_text">
              <h1 className="hero_title">Найди свою идеальную работу на фрилансе</h1>
              <p className="hero_description">
                Присоединяйтесь к сообществу профессионалов и находите проекты, 
                которые соответствуют вашим навыкам и амбициям.
              </p>
              <button className="hero_button">Найти проекты</button>
            </div>
            <div className="hero_image">
              <img src='study.webp' alt="Фриланс работа" className="hero_img"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;