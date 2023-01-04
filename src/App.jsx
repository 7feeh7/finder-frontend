import { useState } from 'react'

import LogoFinder from './components/Logo'
import SearchBar from './components/SearchBar'
import ListFinder from './components/List'

import './App.css'

function App() {
  const[recentlySearched, setRecentlySearched] = useState([])

  return (
    <>
      <div className="container">
        <LogoFinder />
        <SearchBar placeholder="Search..." recentlySearched={recentlySearched} setRecentlySearched={setRecentlySearched} />
        <ListFinder recentlySearched={recentlySearched} />
      </div>

    </>

  )
}

export default App
