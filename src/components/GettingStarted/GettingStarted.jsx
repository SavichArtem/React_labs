import React from 'react';
import '../GettingStarted/GettingStarted.css';

export function GettingStarted() {
  
  const steps = [
    {
      title: "Регистрация",
      text: "Создайте аккаунт"
    },
    {
      title: "Загрузка данных",
      text: "Импортируйте данные студентов"
    },
    {
      title: "Анализ и отчеты",
      text: "Получайте автоматические отчеты и рекомендации"
    }
  ];


  return (
    <section className="getting_started">
      <div className="getting_started_container">
        <div className="getting_started_header">
          <h2 className="getting_started_title">Как начать работу?</h2>
          <p className="getting_started_subtitle">Всего 3 простых шага до первого анализа</p>
        </div>

        <div className="getting_started_steps">
          {steps.map((step, index) => (
            <div className="step_card" key={index}>
              <div className="step_card_number">{index + 1}</div>
              <h3 className="step_card_title">{step.title}</h3>
              <p className="step_card_text">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="getting_started_action">
          <button className="cta_button">Начать</button>
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;