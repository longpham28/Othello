import Board from './board/board';
import React, { Component } from 'react';
import Ticker from './Ticker';
import TickChecker from './TickChecker';
import ScoreBoard from './scoreboard/scoreboard';
import Player, { ComputerPlayer } from './Player';
import Loading from './loading/loading';
class Game extends Component {
  constructor(props) {
    super(props);
    const mode = props.mode;
    let players;
    if (mode === 'multi') players = [new Player('X'), new Player('O')];
    else players = [new Player('X'), new ComputerPlayer('O')];
    players[0].setActive();
    this.state = {
      mode: mode,
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
      players,
      loading: false,
      loadingTime: 1000,
      finished: false
    };
  }
  tick(x, y) {
    if (this.state.loading) return;
    let nextPlayer = this.getNextPlayer();
    let surface = [...this.state.surface];
    const ticker = new Ticker(surface);
    if (!ticker.tick(x, y, nextPlayer.char)) return;
    this.updateSurface(ticker.surface);
    this.updateScore(this.countScore());
    this.changePlayer();
  }
  getNextPlayer() {
    return this.state.players.find(player => player.active === true);
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
    const tickChecker = new TickChecker(surface);
    let nextPlayer = this.getNextPlayer();
    if (!tickChecker.tickAble(nextPlayer.char) && !this.isFinished()) {
      return this.changePlayer();
    }
    if (nextPlayer.type === 'Computer') {
      if (this.isFinished()) {
        this.setState({ ...this.state, finished: true });
        return;
      }
      const [a, b] = nextPlayer.getInput(surface);
      this.setState({ ...this.state, loading: true });
      setTimeout(() => {
        this.setState({ ...this.state, loading: false });
        this.tick(a, b);
      }, 1000);
    }
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
        <Loading opacity={this.state.loading ? 1 : 0} />
        <Board
          squareTicked={(x, y) => this.tick(x, y)}
          rows={this.state.surface}
        />
        <button onClick={this.props.replay} className="Replay">
          Replay
        </button>
      </div>
    );
  }
}

export default Game;
