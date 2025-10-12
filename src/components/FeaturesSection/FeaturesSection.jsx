import '../FeaturesSection/FeaturesSection.css';

export function FeaturesSection() {
  const features = [
    {
      title: "Анализ данных",
      description: "Автоматический анализ успеваемости и посещаемости студентов"
    },
    {
      title: "Персонализация",
      description: "Индивидуальные рекомендации для каждого студента"
    },
    {
      title: "Своевременные уведомления",
      description: "Оповещения о критических изменениях в показателях"
    }
  ];

  return (
    <section className="features_section">
      <div className="features_container">
        <h2 className="features_title">Наши преимущества</h2>
        <div className="features_grid">
          {features.map((feature, index) => (
            <div className="feature_card" key={index}>
              <div className="feature_icon">
                {index + 1}
              </div>
              <h3 className="feature_title">{feature.title}</h3>
              <p className="feature_description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;