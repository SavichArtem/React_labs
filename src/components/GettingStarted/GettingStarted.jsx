import React from 'react';
import { BootstrapProgress } from '../Bootstrap/BootstrapProgress';
import { BootstrapCard } from '../Bootstrap/BootstrapCard';
import { BootstrapButton } from '../Bootstrap/BootstrapButton';
import '../GettingStarted/GettingStarted.css';

export function GettingStarted() {
  
  const steps = [
    {
      title: "Регистрация",
      text: "Создайте профиль фрилансера",
      progress: 33
    },
    {
      title: "Настройка портфолио",
      text: "Добавьте работы и навыки",
      progress: 66
    },
    {
      title: "Начало работы",
      text: "Найдите первый проект и начните зарабатывать",
      progress: 100
    }
  ];

  return (
    <section className="getting_started">
      <div className="getting_started_container">
        <div className="getting_started_header">
          <h2 className="getting_started_title">Как начать зарабатывать?</h2>
          <p className="getting_started_subtitle">Всего 3 простых шага до первого заказа</p>
        </div>

        <div className="getting_started_steps">
          {steps.map((step, index) => (
            <BootstrapCard key={index} title={step.title}>
              <div className="step_card_number">{index + 1}</div>
              <p className="step_card_text">{step.text}</p>
              <BootstrapProgress 
                value={step.progress} 
                variant={index === 0 ? 'primary' : index === 1 ? 'success' : 'warning'}
                striped={step.progress === 100}
                animated={step.progress === 100}
              />
            </BootstrapCard>
          ))}
        </div>

        <div className="getting_started_action">
          <BootstrapButton variant="primary" size="lg">
            Начать зарабатывать
          </BootstrapButton>
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;