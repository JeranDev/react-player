import React, { useState } from 'react'
//Add Style
import './styles/app.min.css'
//Add Components
import Player from './components/Player'
import Song from './components/Song'
//Add Util
import data from './util'

function App() {
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  )
}

export default App
