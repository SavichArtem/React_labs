import { useState } from 'react';
import { BootstrapButton } from '../Bootstrap/BootstrapButton';
import { BootstrapModal } from '../Bootstrap/BootstrapModal';
import { BootstrapNavbar } from '../Bootstrap/BootstrapNavbar';
import { BootstrapDropdown } from '../Bootstrap/BootstrapDropdown';
import { BootstrapTooltip } from '../Bootstrap/BootstrapTooltip';
import { BootstrapOffcanvas } from '../Bootstrap/BootstrapOffcanvas';
import { Navigation } from './Navigation/Navigation';

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <>
      <BootstrapNavbar brand="Freelance Platform">
        <Navigation />
        <div className="ms-auto d-grid align-items-center">
          <div className="d-none d-md-flex align-items-center">
            <BootstrapTooltip title="Узнать больше о платформе">
              <BootstrapButton variant="outline-secondary" onClick={() => setIsPopupOpen(true)}className="me-2">
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

          {/* Мобильная кнопка меню (только на маленьких экранах) */}
          <BootstrapButton  variant="outline-secondary" className="d-md-none ms-2"onClick={() => setShowOffcanvas(true)}>☰</BootstrapButton> 
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

      {/* Мобильное Offcanvas меню (только для мобильных) */}
      <BootstrapOffcanvas show={showOffcanvas} onClose={() => setShowOffcanvas(false)} title="Меню" placement="start">
        {/* Навигация для мобильных */}
        <div className="d-grid gap-2 mb-4">
          <BootstrapButton variant="outline-primary" onClick={() => { window.location.href = '/'; setShowOffcanvas(false); }}>
            Главная
          </BootstrapButton>
          <BootstrapButton variant="outline-primary"onClick={() => { window.location.href = '/freelancers'; setShowOffcanvas(false); }}>
            Фрилансеры
          </BootstrapButton>
          <BootstrapButton variant="outline-primary"onClick={() => { window.location.href = '/contact'; setShowOffcanvas(false); }}>
            Контакты
          </BootstrapButton>
        </div>

        {/* Кнопки авторизации для мобильных */}
        <div className="d-grid gap-2 mb-4">
          <BootstrapButton variant="outline-secondary" onClick={() => setIsPopupOpen(true)}>Подробнее о платформе</BootstrapButton>
          <BootstrapButton variant="outline-success">Войти в аккаунт</BootstrapButton>
          <BootstrapButton variant="primary">Стать фрилансером</BootstrapButton>
        </div>

        {/* Дополнительные ссылки */}
        <div className="border-top pt-3">
          <h6>Быстрые ссылки</h6>
          <div className="d-grid gap-1">
            <a href="#" className="btn btn-outline-secondary btn-sm">Мобильное приложение</a>
            <a href="#" className="btn btn-outline-secondary btn-sm">Пользовательское соглашение</a>
            <a href="#" className="btn btn-outline-secondary btn-sm">Политика конфиденциальности</a>
          </div>
        </div>
      </BootstrapOffcanvas>
    </>
  );
}