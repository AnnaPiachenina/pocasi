import React, {useState} from 'react'
import cityList from '../data/city.list.json';
import SearchIcon from './icons/SearchIcon.svg';

const nextSuggestions = (cities, value) => {
    const v = value.trim().toLowerCase();
    return v ? cities.filter(c => c.name .toLowerCase().includes(v)).slice(0,10):[];
};

const Searchbar = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // funkce ktera se spusti pri zmene inputu a vraci seznam mest podle zadanho jmena
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        setSuggestions(nextSuggestions(cityList, value));
    };
    
    // po odeslani formulare se vyhleda mesto podle zadanho jmena
    const handleSubmit = (e) => {
        e.preventDefault();
        const q = search.trim();
        if (q) onSearch(q);
    }
    
    // spusti se pri kliknuti na navrhovane mesto a vyhleda ho
    const handleSuggestionClick = (suggestion) => {
        setSearch(suggestion.name);
        setSuggestions([]);
        onSearch(suggestion.name);
    }

  return (
    <form onSubmit={handleSubmit} className="search-bar-container" autoComplete="off">
    <div className="search-bar">
        <input type="text" placeholder="search" value={search} onChange={handleSearchChange} className="search"/>
        <button title='search' type="submit" className="search-button">
            <img src={SearchIcon} alt="search"/>
        </button>

        {suggestions.length > 0 && (
        <ul className="suggestions-list" role="listbox">
            {suggestions.map((s) => (
            <li
                key={s.id}
                className="suggestion-item"
                onMouseDown={() => handleSuggestionClick(s)} 
                role="option"
            >
                {s.name}
            </li>
            ))}
        </ul>
        )}
    </div>
    </form>

  )
}

export default Searchbar