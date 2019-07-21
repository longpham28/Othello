import Player from './Player';
import Board from './board/board';
import React, { Component } from 'react';
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', 'X', 'O', '', '', ''],
        ['', '', '', 'O', 'X', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '']
      ],
      nextPlayer: 'X'
    };
  }
  tick(x, y) {
    let board = [...this.state.board];
    if (board[x][y] != '') return;
    board[x][y] = this.state.nextPlayer;
    this.updateBoard(board);
    let nextPlayer = this.state.nextPlayer === 'X' ? 'O' : 'X';
    this.changePlayer(nextPlayer);
  }
  updateBoard(board) {
    this.setState({
      ...this.state,
      board: board
    });
  }
  changePlayer(char) {
    this.setState({ ...this.state, nextPlayer: char });
  }
  render() {
    return (
      <Board squareTicked={(x, y) => this.tick(x, y)} rows={this.state.board} />
    );
  }
}

export default Game;
