import React from 'react';
import { BootstrapCard } from '../Bootstrap/BootstrapCard';
import { BootstrapButton } from '../Bootstrap/BootstrapButton';
import './FreelancerCard.css';

const FreelancerCard = ({ freelancer, onEdit, onToggleSelect, isSelected }) => {
  const getSpecializationText = (specialization) => {
    const specializations = {
      'development': '💻 Разработка',
      'design': '🎨 Дизайн', 
      'marketing': '📈 Маркетинг',
      'writing': '✏️ Копирайтинг'
    };
    return specializations[specialization] || specialization;
  };

  const handleCardClick = (e) => {
    if (e.target.tagName === 'BUTTON') return;
    onToggleSelect(freelancer.id);
  };

  return (
    <BootstrapCard 
      title={freelancer.name}
      subtitle={getSpecializationText(freelancer.specialization)}
      selected={isSelected}
      onClick={handleCardClick}
    >
      <div className="freelancer_info">
        <p><strong>Опыт:</strong> {freelancer.experience}</p>
        <p><strong>Ставка:</strong> ${freelancer.hourlyRate}/час</p>
        <p><strong>Проектов:</strong> {freelancer.completedProjects}</p>
        <p><strong>Рейтинг:</strong> {freelancer.rating}/5</p>
        <p><strong>Навыки:</strong> {freelancer.skills}</p>
      </div>

      <div className="freelancer_actions">
        <BootstrapButton 
          variant="outline-primary" 
          onClick={(e) => {
            e.stopPropagation();
            onEdit(freelancer);
          }}
        >
          Редактировать
        </BootstrapButton>
      </div>
    </BootstrapCard>
  );
};

export default FreelancerCard;