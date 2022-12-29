import './style.css'

import searchSmallLogo from '../../assets/search-small.svg'

function ListFinder({ data }) {

    return (
        <div className="search-data">
            <h3>Recently searched</h3>
            <ul>
                {data.map(item => {
                    return (
                        <li key={item.id}>
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
