import { useState } from 'react';
import { BootstrapButton } from '../Bootstrap/BootstrapButton';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div className="header_content">
        <nav className="nav">
          <ul className="nav_list">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/freelancers">Фрилансеры</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
        <div className="auth_buttons">
          <BootstrapButton 
            variant="outline-secondary" 
            onClick={() => setIsPopupOpen(true)}
            className="me-2"
          >
            Подробнее
          </BootstrapButton>
          <BootstrapButton variant="outline-primary" className="me-2">
            Войти
          </BootstrapButton>
          <BootstrapButton variant="primary">
            Стать фрилансером
          </BootstrapButton>
        </div>
      </div>
    </header>
  );
}