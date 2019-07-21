import Board from './board/board';
import React, { Component } from 'react';
import Ticker from './Ticker';
import ScoreBoard from './scoreboard/scoreboard';
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surface: [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', 'X', 'O', '', '', ''],
        ['', '', '', 'O', 'X', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '']
      ],
      players: [
        {
          char: 'X',
          active: true,
          score: 2
        },
        {
          char: 'O',
          active: false,
          score: 2
        }
      ]
    };
  }
  tick(x, y) {
    const nextPlayer = this.state.players.find(
      player => player.active === true
    );
    let surface = [...this.state.surface];
    const ticker = new Ticker(surface);
    if (!ticker.tick(x, y, nextPlayer.char)) return;
    this.updateSurface(ticker.surface);
    this.updateScore(this.countScore());
    this.changePlayer();
  }
  updateSurface(surface) {
    this.setState({
      ...this.state,
      surface: surface
    });
  }
  changePlayer() {
    let players = [...this.state.players];
    players = players.map(player => {
      player.active = !player.active;
      return player;
    });
    this.setState({
      ...this.state,
      players: players
    });
    const surface = [...this.state.surface];
    const ticker = new Ticker(surface);
    const nextPlayer = this.state.players.find(
      player => player.active === true
    );
    if (!ticker.tickAble(nextPlayer.char) && this.isFinished())
      return this.changePlayer();
  }
  updateScore(scores) {
    let players = [...this.state.players];
    players[0].score = scores[0];
    players[1].score = scores[1];
    this.setState({
      ...this.state,
      player: players
    });
  }
  countScore() {
    let X = 0;
    let O = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.state.surface[i][j] === 'X') X++;
        if (this.state.surface[i][j] === 'O') O++;
      }
    }
    return [X, O];
  }
  isFinished() {
    const surface = [...this.state.surface];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (surface[i][j] === '') return false;
      }
    }
    return true;
  }
  render() {
    return (
      <div className="Game">
        <ScoreBoard players={this.state.players} />
        <Board
          squareTicked={(x, y) => this.tick(x, y)}
          rows={this.state.surface}
        />
      </div>
    );
  }
}

export default Game;
