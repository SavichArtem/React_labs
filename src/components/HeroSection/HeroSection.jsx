import React from 'react';
import '../HeroSection/HeroSection.css';

export function HeroSection() {
  return (
    <div>
      <section className="hero_section">
        <div className="container">
          <div className="hero_content">
            <div className="hero_text">
              <h1 className="hero_title"> Прогнозирование отчисления студентов</h1>
              <p className="hero_description">
                Наша система помогает преподавателям выявлять студентов с риском отчисления
                на основе их успеваемости, посещаемости и других факторов.
              </p>
              <button className="hero_button">Начать анализ</button>
            </div>
            <div className="hero_image">
              <img src='study.webp' alt="heroImage" className="hero_img"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;