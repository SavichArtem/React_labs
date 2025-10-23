import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setSpecialization, setSortBy, clearFilters } from '../../store/slices/filtersSlice';
import './Filters.css';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  return (
    <div className="filters">
      <h3>Фильтры и сортировка</h3>
      
      <div className="filter-group">
        <label>Поиск</label>
        <input
          type="text"
          placeholder="Поиск по имени, специализации..."
          value={filters.search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="filter-input"
        />
      </div>

      <div className="filter-row">
        <div className="filter-group">
          <label>Специализация</label>
          <select 
            value={filters.specialization} 
            onChange={(e) => dispatch(setSpecialization(e.target.value))}
            className="filter-select"
          >
            <option value="">Все специализации</option>
            <option value="development">Разработка</option>
            <option value="design">Дизайн</option>
            <option value="marketing">Маркетинг</option>
            <option value="writing">Копирайтинг</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Сортировка</label>
          <select 
            value={filters.sortBy} 
            onChange={(e) => dispatch(setSortBy(e.target.value))}
            className="filter-select"
          >
            <option value="name">По имени</option>
            <option value="rating">По рейтингу</option>
            <option value="hourlyRate">По ставке</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Действия</label>
          <button 
            onClick={() => dispatch(clearFilters())} 
            className="clear-filters-btn"
          >
            Сбросить фильтры
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;