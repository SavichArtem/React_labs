import React from 'react';
import { BootstrapAlert } from '../Bootstrap/BootstrapAlert';
import { BootstrapButton } from '../Bootstrap/BootstrapButton';
import { BootstrapAccordion } from '../Bootstrap/BootstrapAccordion';
import '../ContactSection/ContactSection.css';

export function ContactSection() {
  const faqItems = [
    {
      title: "Как быстро отвечает поддержка?",
      content: "Наша поддержка отвечает в течение 1-2 часов в рабочее время."
    },
    {
      title: "Есть ли мобильное приложение?",
      content: "Да, наше мобильное приложение доступно для iOS и Android."
    },
    {
      title: "Какие способы оплаты поддерживаются?",
      content: "Мы поддерживаем банковские карты, электронные кошельки и банковские переводы."
    }
  ];

  return (
    <section className="contact_section">
      <div className="container">
        <BootstrapAlert variant="info" dismissible>
          Свяжитесь с нами для получения дополнительной информации о нашей платформе для фрилансеров
        </BootstrapAlert>
        
        <div className="contact_content">
          <div className="contact_text">
            <h1 className="contact_title">Свяжитесь с нами</h1>
            <p className="contact_description">
              Есть вопросы о нашей платформе для фрилансеров? 
              Мы всегда готовы помочь вам начать успешную карьеру на фрилансе.
            </p>
            
            <div className="mb-4">
              <BootstrapAccordion items={faqItems} />
            </div>

            <div className="contact_info">
              <div className="contact_item">
                <h3>Email</h3>
                <p>support@freelanceplatform.com</p>
              </div>
              <div className="contact_item">
                <h3>Телефон</h3>
                <p>+375 (29) 123-45-67</p>
              </div>
              <div className="contact_item">
                <h3>Адрес</h3>
                <p>Минск, ул. Цифровая, д. 8</p>
              </div>
              <div className="contact_item">
                <h3>Часы работы</h3>
                <p>Пн-Вс: 8:00 - 22:00</p>
              </div>
            </div>
            <BootstrapButton variant="primary">
              Написать нам
            </BootstrapButton>
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