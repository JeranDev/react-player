import React, { useState, useRef } from 'react'
//Add Style
import './styles/app.min.css'
//Add Components
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'
//Add Util
import data from './util'

function App() {
  //Ref
  const audioRef = useRef(null)
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false)
  const timeUpdateHandler = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({ ...songInfo, currentTime: current, duration })
  }

  return (
    <div className='App'>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  )
}

export default App
