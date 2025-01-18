import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, categorias }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch({ term: value, category: selectedCategory });
    };

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setSelectedCategory(value);
        onSearch({ term: searchTerm, category: value });
    };

    return (
        <div className="search-wrapper">
            <div className="search-container">
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder="Buscar videos..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    />
                    <select 
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="category-select"
                    >
                        <option value="">Todas las categorías</option>
                        {categorias && categorias.map(cat => (
                            <option key={cat.id} value={cat.titulo}>
                                {cat.titulo}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
