import React, { useState, useEffect } from 'react';
import '../StudentForm/StudentForm.css';

const StudentForm = ({ student, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    group: '',
    studyType: 'budget',
    debts: 0,
    gpa: 0,
    passes: 0,
    activity: 'medium'
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'debts' || name === 'gpa' || name === 'passes' 
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
      <form className="student-form" onSubmit={handleSubmit}>
        <h3>{student ? 'Редактировать студента' : 'Добавить студента'}</h3>
        
        <div className="form-field">
          <label>ФИО</label>
          <input type="text" name="name" placeholder="Введите ФИО" value={formData.name} onChange={handleChange} required/>
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>Курс</label>
            <input type="number" name="course" placeholder="Курс" value={formData.course} onChange={handleChange} required min={1} max={4}/>
          </div>
          
          <div className="form-field">
            <label>Группа</label>
            <input type="text" name="group" placeholder="Группа" value={formData.group} onChange={handleChange} required/>
          </div>
        </div>
        
        <div className="form-field">
          <label>Тип обучения</label>
          <select name="studyType" value={formData.studyType} onChange={handleChange}>
            <option value="budget">Бюджет</option>
            <option value="contract">Контракт</option>
          </select>
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>Долги</label>
            <input type="number" name="debts" placeholder="0" value={formData.debts} onChange={handleChange} min="0"/>
          </div>
          
          <div className="form-field">
            <label>Средний балл</label>
            <input type="number" name="gpa" placeholder="0.0" value={formData.gpa} onChange={handleChange} step="0.1" min="0" max="5"/>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>Пропуски</label>
            <input type="number" name="passes" placeholder="0" value={formData.passes} onChange={handleChange} min="0"/>
          </div>
          
          <div className="form-field">
            <label>Активность</label>
            <select name="activity" value={formData.activity} onChange={handleChange}>
              <option value="high">Высокая</option>
              <option value="medium">Средняя</option>
              <option value="low">Низкая</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn"> {student ? 'Сохранить' : 'Добавить'} </button>
          <button type="button" className="cancel-btn" onClick={onCancel}> Отмена </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;