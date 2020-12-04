import React from 'react';

function SingleSong({ data }) {
  const {trackId, trackName, artworkUrl100 } = data;
  return (
    <div className="single-song-container" key={trackId}> 
      <img src={artworkUrl100} alt={trackName} className="song-thumb" data-aos="fade-up"/>
      <h4 className="trackName" data-aos="fade-up">{ trackName }</h4>
    </div>
  )
}

export default SingleSong
