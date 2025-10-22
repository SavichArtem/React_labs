import React, { useState, useEffect } from 'react';
import FreelancerCard from '../../components/FreelancerCard/FreelancerCard';
import FreelancerForm from '../../components/FreelancerForm/FreelancerForm';
import db from '../../components/db.json';
import './FreelancersPage.css'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export function FreelancersPage(){
  const [freelancers, setFreelancers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingFreelancer, setEditingFreelancer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFreelancers, setSelectedFreelancers] = useState(new Set());

  useEffect(() => {
    setFreelancers(db);
  }, []);

  const handleAddFreelancer = () => {
    setEditingFreelancer(null);
    setShowForm(true);
  };

  const handleEditFreelancer = (freelancer) => {
    setEditingFreelancer(freelancer);
    setShowForm(true);
  };

  const handleDeleteSelected = () => {
    if (selectedFreelancers.size === 0) return;
    
    if (window.confirm(`Вы уверены, что хотите удалить ${selectedFreelancers.size} фрилансеров?`)) {
      setFreelancers(freelancers.filter(freelancer => !selectedFreelancers.has(freelancer.id)));
      setSelectedFreelancers(new Set());
    }
  };

  const handleToggleFreelancer = (id) => {
    setSelectedFreelancers(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const handleClearSelection = () => {
    setSelectedFreelancers(new Set());
  };

  const handleSaveFreelancer = (freelancerData) => {
    if (editingFreelancer) {
      setFreelancers(freelancers.map(freelancer =>
        freelancer.id === editingFreelancer.id
          ? { ...freelancerData, id: editingFreelancer.id }
          : freelancer
      ));
    } else {
      const newFreelancer = {
        ...freelancerData,
        id: Math.max(...freelancers.map(f => f.id), 0) + 1
      };
      setFreelancers([...freelancers, newFreelancer]);
    }
    setShowForm(false);
    setEditingFreelancer(null);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingFreelancer(null);
  };

  const filteredFreelancers = freelancers.filter(freelancer => {
  if (!searchTerm) return true;
  
  const searchLower = searchTerm.toLowerCase();
  
  // Получение значений
  const name = String(freelancer.name || '').toLowerCase();
  const specialization = String(freelancer.specialization || '').toLowerCase();
  const skills = String(freelancer.skills || '').toLowerCase();
  
  // Перевод специализации на русский для поиска
  const specializationTranslations = {
    'development': 'разработка',
    'design': 'дизайн', 
    'marketing': 'маркетинг',
    'writing': 'копирайтинг'
  };
  
  const specializationRussian = specializationTranslations[freelancer.specialization] || specialization;
  
  return (
    name.includes(searchLower) ||
    specialization.includes(searchLower) ||
    specializationRussian.includes(searchLower) ||
    skills.includes(searchLower)
  );
});

  return (
    <>
      <Header/>
      <div className="freelancers-page">
        <header className="page-header">
          <h1>Каталог фрилансеров</h1>
          <div className="controls">
            <input type="text" placeholder="Поиск по имени, специализации или навыкам..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input"/>
            
            <div className="action-buttons">
              <button onClick={handleAddFreelancer} className="add-btn">Добавить фрилансера</button>
              
              {selectedFreelancers.size > 0 && (
                <>
                  <button onClick={handleDeleteSelected} className="delete-selected-btn">Удалить выбранных ({selectedFreelancers.size})</button>
                  <button onClick={handleClearSelection} className="clear-selection-btn">Очистить выбор</button>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="freelancers-grid">
          {filteredFreelancers.map(freelancer => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} onEdit={handleEditFreelancer} onToggleSelect={handleToggleFreelancer} isSelected={selectedFreelancers.has(freelancer.id)}/>
          ))}
        </div>

        {filteredFreelancers.length === 0 && (
          <div className="no-freelancers">
            <p>Фрилансеры не найдены</p>
          </div>
        )}

        {showForm && (
          <FreelancerForm freelancer={editingFreelancer} onSave={handleSaveFreelancer} onCancel={handleCancelForm}/>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default FreelancersPage;