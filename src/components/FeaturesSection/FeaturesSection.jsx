import '../FeaturesSection/FeaturesSection.css';

export function FeaturesSection() {
  const features = [
    {
      title: "Поиск проектов",
      description: "Доступ к тысячам актуальных проектов от проверенных заказчиков"
    },
    {
      title: "Безопасные платежи",
      description: "Гарантированная оплата через защищенную систему расчетов"
    },
    {
      title: "Рейтинговая система",
      description: "Повышайте свой рейтинг и получайте более выгодные предложения"
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