import { useState } from 'react';
import { BootstrapButton } from '../Bootstrap/BootstrapButton';
import { BootstrapModal } from '../Bootstrap/BootstrapModal';
import { BootstrapNavbar } from '../Bootstrap/BootstrapNavbar';
import { Navigation } from './Navigation/Navigation';

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <BootstrapNavbar brand="Freelance Platform">
      <Navigation />
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