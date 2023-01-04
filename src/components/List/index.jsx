import './style.css'

import searchSmallLogo from '../../assets/search-small.svg'

function ListFinder({ recentlySearched }) {

    return (
        <div className="search-data">
            <h3>Recently searched</h3>
            <ul>
                {recentlySearched.map(item => {
                    return (
                        <li key={item._id}>
                            <img src={searchSmallLogo} alt="search-small-logo" />
                            {item.suggestion}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListFinder
