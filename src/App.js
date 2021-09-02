import React from 'react'
import MoviesList from './components/MoviesList'
import './App.css'

function App(props) {
    return (
        <div>
            <div className="navbar1"></div>
            <h2>WOOKIE </h2>
            <h2>MOVIES  <input type="search" id="search" placeholder="type to search"/><img src="/image/search-icon3.jpg"  alt="search"/></h2>
            <hr/>
            <MoviesList />
        </div>
    )
}
export default App