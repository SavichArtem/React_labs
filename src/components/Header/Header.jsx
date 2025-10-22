import { useState } from 'react';
import { BootstrapButton } from '../Bootstrap/BootstrapButton';
import { BootstrapModal } from '../Bootstrap/BootstrapModal';
import { BootstrapNavbar } from '../Bootstrap/BootstrapNavbar';
import { BootstrapNav } from '../Bootstrap/BootstrapNav';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();

  return (
    <BootstrapNavbar brand="Freelance Platform">
      <BootstrapNav>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
            Главная
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/freelancers' ? 'active' : ''}`} to="/freelancers">
            Фрилансеры
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
            Контакты
          </Link>
        </li>
      </BootstrapNav>
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

      <BootstrapModal 
        show={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
        title="О платформе"
        footer={<BootstrapButton onClick={() => setIsPopupOpen(false)}>Закрыть</BootstrapButton>}
      >
        Мы помогаем фрилансерам находить интересные проекты, а заказчикам - надежных исполнителей
      </BootstrapModal>
    </BootstrapNavbar>
  );
}