import { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search'

import './style.css'

import { DivSearchIcon } from './style'

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([])
    const [hasFocus, setHasFocus] = useState(false)

    const handleFilter = (event) => {
        const searchSuggestion = event.target.value;

        if (!searchSuggestion) {
            setFilteredData([])
        } else {
            const newFilter = data.filter((value) => {
                return value.suggestion.includes(searchSuggestion)
            });
            setFilteredData(newFilter)
        }
    }

    const changeIcon = (event, change) => {
        event.preventDefault()
        setHasFocus(change)
    }

    const handleClick = (event) => event.preventDefault();

    return (
        <div className="search">
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={handleFilter}
                    onFocus={event => changeIcon(event, true)}
                    onBlur={event => changeIcon(event, false)}
                />

                <DivSearchIcon hasFocus={hasFocus}>
                    <SearchIcon />
                </DivSearchIcon>
            </div>

            {filteredData.length != 0 && (
                <div className="search-filtered-data">
                    {filteredData.map((value) => {
                        return (
                            <a
                                key={value.id}
                                href="#"
                                onClick={handleClick}
                                className="search-filtered-data-item"
                            >
                                <p>{value.suggestion}</p>
                            </a>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar
