import React, { Fragment } from 'react';
import ShowReel from './Components/ShowReel'
import TopSongs from './Components/TopSongs'
// CSS
import './App.css';

function App() {
  return (
    <Fragment>
      {/* Header/ Showreel Section */}
      <ShowReel />
      {/* Top 20 Songs */}
      <TopSongs />
    </Fragment>
  );
}

export default App;
