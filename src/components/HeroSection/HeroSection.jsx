import { BootstrapButton } from '../Bootstrap/BootstrapButton';
import { BootstrapCarousel } from '../Bootstrap/BootstrapCarousel';
import '../HeroSection/HeroSection.css';

export function HeroSection() {
  const carouselItems = [
    {
      image: "study.webp",
      alt: "Фриланс работа 1",
      caption: {
        title: "Начните карьеру фрилансера",
        text: "Тысячи проектов ждут вас"
      }
    },
    {
      image: "freelance_2.jpg",
      alt: "Фриланс работа 2", 
      caption: {
        title: "Работайте из любой точки мира",
        text: "Свобода выбора и гибкий график"
      }
    },
    {
      image: "freelance-careers.jpg",
      alt: "Фриланс работа 3",
      caption: {
        title: "Гарантия оплаты",
        text: "Безопасные расчеты и защита сделок"
      }
    }
  ];

  return (
    <div className="hero_section">
      <div className="container">
        <div className="hero_content">
          <div className="hero_text">
            <h1 className="hero_title">Найди свою идеальную работу на фрилансе</h1>
            <p className="hero_description">
              Присоединяйтесь к сообществу профессионалов и находите проекты, 
              которые соответствуют вашим навыкам и амбициям.
            </p>
            <BootstrapButton variant="primary" size="lg">
              Найти проекты
            </BootstrapButton>
          </div>
          <div className="hero_image">
            <BootstrapCarousel items={carouselItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;