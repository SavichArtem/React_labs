import React from 'react';
import './FreelancerCard.css';

const FreelancerCard = ({ freelancer, onEdit, onToggleSelect, isSelected }) => {
  const getExperienceText = (experience) => {
    switch (experience) {
      case 'high': return 'Высокий';
      case 'medium': return 'Средний';
      case 'low': return 'Начинающий';
      default: return experience;
    }
  };

  const getSpecializationText = (specialization) => {
    const specializations = {
      'development': 'Разработка',
      'design': 'Дизайн',
      'marketing': 'Маркетинг',
      'writing': 'Копирайтинг'
    };
    return specializations[specialization] || specialization;
  };

  const handleCardClick = (e) => {
    if (e.target.tagName === 'BUTTON') return;
    onToggleSelect(freelancer.id);
  };

  return (
    <div className={`freelancer_card ${isSelected ? 'selected' : ''}`} onClick={handleCardClick}>
      <div className="freelancer_header">
        <h3>{freelancer.name}</h3>
      </div>
      
      <div className="freelancer_info">
        <p><strong>Специализация:</strong> {getSpecializationText(freelancer.specialization)}</p>
        <p><strong>Опыт:</strong> {getExperienceText(freelancer.experience)}</p>
        <p><strong>Ставка:</strong> ${freelancer.hourlyRate}/час</p>
        <p><strong>Выполнено проектов:</strong> {freelancer.completedProjects}</p>
        <p><strong>Рейтинг:</strong> {freelancer.rating}/5</p>
        <p><strong>Навыки:</strong> {freelancer.skills}</p>
      </div>

      <div className="freelancer_actions">
        <button className="edit_btn" onClick={() => onEdit(freelancer)}> Редактировать </button>
      </div>
    </div>
  );
};

export default FreelancerCard;