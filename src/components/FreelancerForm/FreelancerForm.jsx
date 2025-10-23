import React, { useState, useEffect } from 'react';
import '../FreelancerForm/FreelancerForm.css';

const FreelancerForm = ({ freelancer, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: 'development',
    experience: 'medium',
    hourlyRate: 15,
    completedProjects: 0,
    rating: 5.0,
    skills: ''
  });

  useEffect(() => {
    if (freelancer) {
      setFormData(freelancer);
    }
  }, [freelancer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'hourlyRate' || name === 'completedProjects' || name === 'rating'
        ? parseFloat(value) || 0 
        : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="form-overlay">
      <form className="freelancer-form" onSubmit={handleSubmit}>
        <h3>{freelancer ? 'Редактировать фрилансера' : 'Добавить фрилансера'}</h3>
        
        <div className="form-field">
          <label>ФИО</label>
          <input type="text" name="name" placeholder="Введите ФИО" value={formData.name} onChange={handleChange} required/>
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>Специализация</label>
            <select name="specialization" value={formData.specialization} onChange={handleChange}>
              <option value="development">Разработка</option>
              <option value="design">Дизайн</option>
              <option value="marketing">Маркетинг</option>
              <option value="writing">Копирайтинг</option>
            </select>
          </div>
          
          <div className="form-field">
            <label>Опыт</label>
            <select name="experience" value={formData.experience} onChange={handleChange}>
              <option value="high">Высокий</option>
              <option value="medium">Средний</option>
              <option value="low">Начинающий</option>
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>Ставка ($/час)</label>
            <input type="number" name="hourlyRate" placeholder="15" value={formData.hourlyRate} onChange={handleChange} min="5" max="200"/>
          </div>
          
          <div className="form-field">
            <label>Проектов выполнено</label>
            <input type="number" name="completedProjects" placeholder="0" value={formData.completedProjects} onChange={handleChange} min="0"/>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>Рейтинг</label>
            <input type="number" name="rating" placeholder="5.0" value={formData.rating} onChange={handleChange} step="0.1" min="0" max="5"/>
          </div>
        </div>

        {/* Поле навыков */}
        <div className="form-field">
          <label>Навыки</label>
          <input 
            type="text" 
            name="skills" 
            placeholder="JavaScript, React, Node.js" 
            value={formData.skills} 
            onChange={handleChange}
          />
          <div className="field-hint">
            Перечислите навыки через запятую
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn"> {freelancer ? 'Сохранить' : 'Добавить'} </button>
          <button type="button" className="cancel-btn" onClick={onCancel}> Отмена </button>
        </div>
      </form>
    </div>
  );
};

export default FreelancerForm;