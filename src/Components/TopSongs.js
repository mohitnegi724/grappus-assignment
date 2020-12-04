import React, { useEffect, useState } from 'react'
import songs from '../Data/topSongsData.json'
import '../Styles/TopSongs.css'


export default function TopSongs() {
  // Local State defined to store Songs array in subarrays
  const [topSongsArray, setTopSongs] = useState([])

  // Using printSubArrSongs Function to Print the inside items of Subarrays
  function printSubArrSongs (subarray, index) {
    return(
      <div className={subarray.length === 3? 'threeItems columns': 'twoItems columns'} key={index} >
        {
          subarray.map(({trackId, trackName, artworkUrl100 }) =>{
            return (
              <div className="single-song-container" key={trackId}> 
                <img src={artworkUrl100} alt={trackName} className="song-thumb" data-aos="fade-up"/>
                <h4 className="trackName" data-aos="fade-up">{ trackName }</h4>
              </div>
            )}
          )
        }
      </div>
    )
  }

  useEffect(()=>{
    // Dividing 20 items array into chunks
    let batchSize = 2;
    let output = [];
    for (let i = 0; i < songs.length; ) {
      output.push(songs.slice(i, i + batchSize));
      i += batchSize;
      batchSize = batchSize === 2 ? 3 : 2;
    }
    // Setting The Top Songs State
    setTopSongs(output)
  }, [])

  return (
    <div className="top-songs-container">
      {/* Title Of The Top Song Component */}
      <h2 id="top-songs-title"> Top 20 Songs Of 2020 </h2>
      <div className="songs-container">
        {/* Printing All Songs from The array */}
        { topSongsArray.map((subArr, index)=> printSubArrSongs(subArr, index)) }
      </div>
    </div>
  )
}
