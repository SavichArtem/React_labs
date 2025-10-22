import { useState } from 'react';
import { BootstrapButton } from '../Bootstrap/BootstrapButton';
import { BootstrapModal } from '../Bootstrap/BootstrapModal';
import { BootstrapNavbar } from '../Bootstrap/BootstrapNavbar';
import { BootstrapDropdown } from '../Bootstrap/BootstrapDropdown';
import { BootstrapTooltip } from '../Bootstrap/BootstrapTooltip';
import { Navigation } from './Navigation/Navigation';

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <BootstrapNavbar brand="Freelance Platform">
      <Navigation />
      <div className="d-flex align-items-center">
        <BootstrapTooltip title="Узнать больше о платформе">
          <BootstrapButton 
            variant="outline-secondary" 
            onClick={() => setIsPopupOpen(true)}
            className="me-2"
          >
            Подробнее
          </BootstrapButton>
        </BootstrapTooltip>
        <BootstrapDropdown 
          title="Аккаунт"
          items={[
            { label: 'Войти', href: '#' },
            { label: 'Регистрация', href: '#' }
          ]}
        />
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