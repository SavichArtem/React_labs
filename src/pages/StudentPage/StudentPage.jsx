import React, { useState, useEffect } from 'react';
import StudentCard from '../../components/StudentCard/StudentCard';
import StudentForm from '../../components/StudentForm/StudentForm';
import db from '../../components/db.json';
import '../StudentPage/StudentPage.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export function StudentsPage(){
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudents, setSelectedStudents] = useState(new Set());

  // Загрузка данных из JSON
  useEffect(() => {
    setStudents(db);
  }, []);

  // Добавление студента
  const handleAddStudent = () => {
    setEditingStudent(null);
    setShowForm(true);
  };

  // Редактирование студента
  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  // Групповое удаление выбранных студентов
  const handleDeleteSelected = () => {
    if (selectedStudents.size === 0) return;
    
    if (window.confirm(`Вы уверены, что хотите удалить ${selectedStudents.size} студентов?`)) {
      setStudents(students.filter(student => !selectedStudents.has(student.id)));
      setSelectedStudents(new Set());
    }
  };

  // Переключение выбора студента
  const handleToggleStudent = (id) => {
    setSelectedStudents(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  // Очистка выбора
  const handleClearSelection = () => {
    setSelectedStudents(new Set());
  };

  // Сохранение студента
  const handleSaveStudent = (studentData) => {
    if (editingStudent) {
      setStudents(students.map(student =>
        student.id === editingStudent.id
          ? { ...studentData, id: editingStudent.id }
          : student
      ));
    } else {
      const newStudent = {
        ...studentData,
        id: Math.max(...students.map(s => s.id), 0) + 1
      };
      setStudents([...students, newStudent]);
    }
    setShowForm(false);
    setEditingStudent(null);
  };

  // Отмена формы
  const handleCancelForm = () => {
    setShowForm(false);
    setEditingStudent(null);
  };

  // Фильтрация студентов
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header/>
      <div className="students-page">
        <header className="page-header">
          <h1>Список студентов</h1>
          <div className="controls">
            <input type="text" placeholder="Поиск по имени или группе..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input"/>
            
            <div className="action-buttons">
              <button onClick={handleAddStudent} className="add-btn"> Добавить студента </button>
              
              {selectedStudents.size > 0 && (
                <>
                  <button onClick={handleDeleteSelected} className="delete-selected-btn">Удалить выбранные ({selectedStudents.size})</button>
                  <button onClick={handleClearSelection} className="clear-selection-btn"> Очистить выбор </button>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="students-grid">
          {filteredStudents.map(student => (
            <StudentCard key={student.id} student={student} onEdit={handleEditStudent} onToggleSelect={handleToggleStudent} isSelected={selectedStudents.has(student.id)}/>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="no-students">
            <p>Студенты не найдены</p>
          </div>
        )}

        {showForm && (
          <StudentForm student={editingStudent} onSave={handleSaveStudent} onCancel={handleCancelForm}/>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default StudentsPage;