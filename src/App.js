import React from 'react'
import './styles/app.min.css'
import Player from './components/Player'
import Song from './components/Song'

function App() {
  return (
    <div className='App'>
      <Song />
      <Player />
    </div>
  )
}

export default App