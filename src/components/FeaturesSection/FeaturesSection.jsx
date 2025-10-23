import { BootstrapCard } from '../Bootstrap/BootstrapCard';
import { BootstrapSpinner } from '../Bootstrap/BootstrapSpinner';
import { BootstrapButton } from '../Bootstrap/BootstrapButton';
import '../FeaturesSection/FeaturesSection.css';

export function FeaturesSection() {
  const features = [
    {
      title: "Находите заказы",
      description: "Тысячи проектов разных категорий и бюджетов"
    },
    {
      title: "Работайте безопасно",
      description: "Все платежи защищены, деньги только за результат"
    },
    {
      title: "Получайте отзывы", 
      description: "Стройте репутацию и привлекайте больше клиентов"
    }
  ];

  return (
    <section className="features_section">
      <div className="features_container">
        <h2 className="features_title">Наши преимущества</h2>
        <div className="features_grid">
          {features.map((feature, index) => (
            <BootstrapCard key={index} title={feature.title}>
              <div className="text-center mb-3">
                <BootstrapSpinner 
                  variant={index === 0 ? 'primary' : index === 1 ? 'success' : 'info'}
                  size="sm"
                />
              </div>
              <p className="feature_description">{feature.description}</p>
              <BootstrapButton variant="outline-primary" className="mt-3">
                Узнать больше
              </BootstrapButton>
            </BootstrapCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;