import React from 'react';
import '../ContactSection/ContactSection.css';

export function ContactSection() {
  return (
    <section className="contact_section">
      <div className="container">
        <div className="contact_content">
          <div className="contact_text">
            <h1 className="contact_title">Свяжитесь с нами</h1>
            <p className="contact_description">
              Есть вопросы о нашей системе прогнозирования отчисления студентов? 
              Мы всегда готовы помочь и ответить на все ваши вопросы.
            </p>
            <div className="contact_info">
              <div className="contact_item">
                <h3>Email</h3>
                <p>supportStudents@gmail.com</p>
              </div>
              <div className="contact_item">
                <h3>Телефон</h3>
                <p>+375 (33) 333-33-33</p>
              </div>
              <div className="contact_item">
                <h3>Адрес</h3>
                <p>Минск, ул. Образовательная, д. 15</p>
              </div>
              <div className="contact_item">
                <h3>Часы работы</h3>
                <p>Пн-Пт: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="contact_image">
            <img src='contact.webp' alt="Контакты" className="contact_img"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;