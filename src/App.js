import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Board from './board/board';
import Game from './Game';
function App() {
  const game = new Game();
  return (
    <div className="App">
      <Layout>
        <h1 style={{ fontSize: '40px' }}>Othello Game</h1>
        <Game />
      </Layout>
    </div>
  );
}

export default App;
