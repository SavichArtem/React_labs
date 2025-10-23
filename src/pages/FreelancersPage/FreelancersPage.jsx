import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FreelancerCard from '../../components/FreelancerCard/FreelancerCard';
import FreelancerForm from '../../components/FreelancerForm/FreelancerForm';
import Filters from '../../components/Filters/Filters';
import { 
  setFreelancers, 
  addFreelancer, 
  updateFreelancer, 
  deleteFreelancers, 
  toggleSelect, 
  clearSelected 
} from '../../store/slices/freelancersSlice';
import db from '../../components/db.json';
import './FreelancersPage.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export function FreelancersPage(){
  const dispatch = useDispatch();
  const freelancers = useSelector(state => state.freelancers.list);
  const selected = useSelector(state => state.freelancers.selected);
  const filters = useSelector(state => state.filters);

  const [showForm, setShowForm] = React.useState(false);
  const [editingFreelancer, setEditingFreelancer] = React.useState(null);

  useEffect(() => {
    dispatch(setFreelancers(db));
  }, [dispatch]);

  // Фильтрация
  const filteredFreelancers = freelancers.filter(freelancer => {
    const matchesSearch = freelancer.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesSpecialization = !filters.specialization || freelancer.specialization === filters.specialization;
    return matchesSearch && matchesSpecialization;
  });

  // Сортировка
  const sortedFreelancers = [...filteredFreelancers].sort((a, b) => {
    if (filters.sortBy === 'rating') return b.rating - a.rating;
    if (filters.sortBy === 'hourlyRate') return b.hourlyRate - a.hourlyRate;
    return a.name.localeCompare(b.name);
  });

  const handleSave = (data) => {
    if (editingFreelancer) {
      dispatch(updateFreelancer({ ...data, id: editingFreelancer.id }));
    } else {
      dispatch(addFreelancer({ ...data, id: Date.now() }));
    }
    setShowForm(false);
  };

  const handleDeleteSelected = () => {
    if (selected.length === 0) return;
    
    if (window.confirm(`Удалить ${selected.length} фрилансеров?`)) {
      dispatch(deleteFreelancers(selected));
      dispatch(clearSelected());
    }
  };

  return (
    <>
      <Header/>
      <div className="freelancers-page">
        <header className="page-header">
          <h1>Каталог фрилансеров</h1>
          <div className="controls">
            <Filters />
            
            <div className="action-buttons">
              <button onClick={() => setShowForm(true)} className="add-btn">
                Добавить фрилансера
              </button>
              
              {selected.length > 0 && (
                <>
                  <button onClick={handleDeleteSelected} className="delete-selected-btn">
                    Удалить выбранных ({selected.length})
                  </button>
                  <button onClick={() => dispatch(clearSelected())} className="clear-selection-btn">
                    Очистить выбор
                  </button>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="freelancers-grid">
          {sortedFreelancers.map(freelancer => (
            <FreelancerCard 
              key={freelancer.id}
              freelancer={freelancer}
              onEdit={(f) => {
                setEditingFreelancer(f);
                setShowForm(true);
              }}
              onToggleSelect={(id) => dispatch(toggleSelect(id))}
              isSelected={selected.includes(freelancer.id)}
            />
          ))}
        </div>

        {sortedFreelancers.length === 0 && (
          <div className="no-freelancers">
            <p>Фрилансеры не найдены</p>
          </div>
        )}

        {showForm && (
          <FreelancerForm 
            freelancer={editingFreelancer}
            onSave={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditingFreelancer(null);
            }}
          />
        )}
      </div>
      <Footer/>
    </>
  );
};

export default FreelancersPage;