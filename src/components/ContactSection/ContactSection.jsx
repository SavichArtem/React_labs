import '../ContactSection/ContactSection.css';

export function ContactSection() {
  return (
    <section className="contact_section">
      <div className="container">
        <div className="contact_content">
          <div className="contact_text">
            <h1 className="contact_title">Свяжитесь с нами</h1>
            <p className="contact_description">
              Есть вопросы о нашей платформе для фрилансеров? 
              Мы всегда готовы помочь вам начать успешную карьеру на фрилансе.
            </p>
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
          </div>
          <div className="contact_image">
            <img src='freelanceContact.jpg' alt="Контакты фриланс" className="contact_img"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;