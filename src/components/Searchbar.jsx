import React, {useState} from 'react'
import cityList from '../data/city.list.json';
import SearchIcon from './icons/SearchIcon.svg';

const Searchbar = ({onSearch}) => {

    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        if (value.trim() !== '') {
            const filteredSuggestions = cityList.filter((city) =>
                city.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim() !== '') {
            onSearch(search.trim());
        }
    }

    const handleSuggestionClick = (suggestion) => {
        setSearch(suggestion.name);
        setSuggestions([]);
        onSearch(suggestion.name);
    }

  return (
    <form onSubmit={handleSubmit} className='search-bar-container'>
        <div className='search-bar'>
            <input type="text" placeholder='search' value={search} onChange={handleSearchChange} className='search'/>
            <button type='submit' className='search-button'><img src={SearchIcon} alt="search"/></button>
        </div>

        {suggestions.length > 0  && (
                <ul className="suggestions-list">
                    {suggestions.slice(0, 5).map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="suggestion-item"
                        >
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}

    </form>
  )
}

export default Searchbar