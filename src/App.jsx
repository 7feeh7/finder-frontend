import './App.css'

import suggestionsMock from '../suggestions.json'

import LogoFinder from './components/Logo'
import SearchBar from './components/SearchBar'
import ListFinder from './components/List'

function App() {

  return (
    <>
      <div className="container">
        <LogoFinder />
        <SearchBar data={suggestionsMock} placeholder="Search..." />
      </div>

      <ListFinder data={suggestionsMock} />
    </>

  )
}

export default App
