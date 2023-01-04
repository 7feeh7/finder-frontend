import { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search'

import { DivSearchIcon } from './style'

import api from '../../service/api'

import './style.css'

function SearchBar({ placeholder, recentlySearched, setRecentlySearched }) {
    const [filteredData, setFilteredData] = useState([])
    const[searchedItem, setSearchedItem] = useState(null)
    
    const [hasFocus, setHasFocus] = useState(false)

    const handleFilter = (event) => {
        const searchSuggestion = event.target.value

        if (!searchSuggestion) {
            setFilteredData([])
            setSearchedItem(null)
        } else {
            api.get(`search?q=${searchSuggestion}`)
                .then(response => {
                    const data = response.data

                    const newFilter = data.filter((value) => {
                        return value.suggestion.includes(searchSuggestion)
                    });
                    setFilteredData(newFilter)
                    setSearchedItem(searchSuggestion)
                })
        }
    }

    const changeIcon = () => setHasFocus(!hasFocus)

    const saveSuggestion = async () => {
        const response = await api.post('search', { suggestion: searchedItem })
        updateRecentlySearched(response.data)
    }

    const handleClick = (event, value) => {
        event.preventDefault()
        updateRecentlySearched(value)
    }

    const updateRecentlySearched = (value) => {
        let newRecentlySearched = recentlySearched
        if(newRecentlySearched.length > 4) newRecentlySearched.shift()
        newRecentlySearched.push({...value})
        setRecentlySearched([...newRecentlySearched])
    }

    return (
        <div className="search">
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={handleFilter}
                    onKeyDown={event => { if(event.key == 'Enter') saveSuggestion() }}
                    onFocus={changeIcon}
                    onBlur={changeIcon}
                />

                <DivSearchIcon hasFocus={hasFocus}>
                    <SearchIcon onClick={() => { saveSuggestion() }} />
                </DivSearchIcon>
            </div>

            {filteredData.length != 0 && (
                <div className="search-filtered-data">
                    {filteredData.map((value) => {
                        return (
                            <a
                                key={value._id}
                                href="#"
                                onClick={(event) => handleClick(event, value)}
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
