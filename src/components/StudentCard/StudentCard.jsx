import React from 'react';
import '../StudentCard/StudentCard.css';

const StudentCard = ({ student, onEdit, onToggleSelect, isSelected }) => {
  const getActivityText = (activity) => {
    switch (activity) {
      case 'high': return 'Высокая';
      case 'medium': return 'Средняя';
      case 'low': return 'Низкая';
      default: return activity;
    }
  };

  const getStudyTypeText = (studyType) => {
    return studyType === 'budget' ? 'Бюджет' : 'Контракт';
  };

  const handleCardClick = (e) => {
    if (e.target.tagName === 'BUTTON') return;
    onToggleSelect(student.id);
  };

  return (
    <div className={`student_card ${isSelected ? 'selected' : ''}`}onClick={handleCardClick}>
      <div className="student_header">
        <h3>{student.name}</h3>
      </div>
      
      <div className="student_info">
        <p><strong>Курс:</strong> {student.course}</p>
        <p><strong>Группа:</strong> {student.group}</p>
        <p><strong>Форма обучения:</strong> {getStudyTypeText(student.studyType)}</p>
        <p><strong>Долги:</strong> {student.debts}</p>
        <p><strong>Средний балл:</strong> {student.gpa}</p>
        <p><strong>Пропуски:</strong> {student.passes} часов</p>
        <p><strong>Активность:</strong> {getActivityText(student.activity)}</p>
      </div>

      <div className="student_actions">
        <button className="edit_btn" onClick={() => onEdit(student)}> Редактировать </button>
      </div>
    </div>
  );
};

export default StudentCard;