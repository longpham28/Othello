import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Board from './board/board';
import Game from './Game';
import Welcome from './welcome/welcome';
function App() {
  const [playing, setPlaying] = useState(false);
  const [playMode, setPlayMode] = useState('single');
  return (
    <div className="App">
      <Layout>
        <h1 style={{ fontSize: '40px' }}>Othello Game</h1>
        {playing ? (
          <Game replay={() => setPlaying(false)} mode={playMode} />
        ) : (
          <Welcome
            button1Clicked={() => {
              setPlaying(true);
              setPlayMode('single');
            }}
            button2Clicked={() => {
              setPlaying(true);
              setPlayMode('multi');
            }}
          />
        )}
      </Layout>
    </div>
  );
}

export default App;
