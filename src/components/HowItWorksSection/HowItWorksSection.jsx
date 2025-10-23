import '../HowItWorksSection/HowItWorksSection.css';

export function HowItWorksSection() {
  const steps = [
    "Зарегистрируйтесь и создайте профиль",
    "Настройте портфолио с вашими работами",
    "Найдите подходящие проекты в каталоге заказов",
    "Подайте заявку и начните работать с заказчиком"
  ];

  return (
    <section className="how_it_works">
      <div className="how_it_works_container">
        <div className="how_it_works_content">
          <div className="how_it_works_text">
            <h2 className="how_it_works_title">Как это работает?</h2>
            <ul className="steps_list">
              {steps.map((step, index) => (
                <li key={index} className="steps_list_item">
                  <div className="step">
                    <div className="step_number">{index + 1}</div>
                    <span className="step_text">{step}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="how_it_works_example">
            <div className="report_example">
              <h4 className="report_example_title">Пример профиля фрилансера</h4>
              <div className="report_example_image_container">
                <img src='example.png' alt="Пример работы фрилансера" className="report_example_image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;