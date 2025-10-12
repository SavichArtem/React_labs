import { useState } from 'react';
import { Navigation } from "../Header/Navigation/Navigation"
import '../Header/Header.css';

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <header className="header">
      <div className="header_content">
        <Navigation />
        <div className="auth_buttons">
          <button className="details_btn" onClick={togglePopup}>
            Подробнее
          </button>
          <button className="login_btn">Войти</button>
          <button className="register_btn">Зарегистрироваться</button>
        </div>
      </div>

      {/* Попап */}
      {isPopupOpen && (
        <div className="popup_overlay" onClick={closePopup}>
          <div className="popup_content" onClick={(e) => e.stopPropagation()}>
            <button className="popup_close" onClick={closePopup}>×</button>
            <h3>Информация о системе</h3>
            <p>Система прогнозирует риск отчисления студентов и предлагает рекомендации по устранению задолженностей</p>
          </div>
        </div>
      )}
    </header>
  )
}