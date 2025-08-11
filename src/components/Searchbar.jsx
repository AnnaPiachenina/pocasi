import React, {useState} from 'react'
import cityList from '../data/city.list.json';
import SearchIcon from './icons/SearchIcon.svg';

const Searchbar = ({onSearch}) => {

    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    // funkce ktera se spusti pri zmene inputu a vraci seznam mest podle zadanho jmena
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        // pokud je input prazdny, tak se seznam mest vymaze
        if (value.trim() !== '') {
            const filteredSuggestions = cityList.filter((city) =>
                city.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };
    // po odeslani formulare se vyhleda mesto podle zadanho jmena
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim() !== '') {
            onSearch(search.trim());
        }
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
        <button type="submit" className="search-button">
            <img src={SearchIcon} alt="search"/>
        </button>

        {suggestions.length > 0 && (
        <ul className="suggestions-list" role="listbox">
            // limit na max 10 navrhovanych mest
            {suggestions.slice(0, 10).map((s, i) => (
            <li
                key={i}
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