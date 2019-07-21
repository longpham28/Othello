import React from 'react';
import Circle from '../circle/circle';
import Classes from './scoreboard.module.css';

function convertColor(char) {
  switch (char) {
    case 'X':
      return 'black';
    case 'O':
      return 'white';
    default:
      return 'none';
  }
}

const Score = props => {
  const color = convertColor(props.char);
  return (
    <div
      style={props.active ? { color: 'red', border: '1px solid red' } : null}
      className={Classes.Score}
    >
      <Circle color={color} />
      {props.score}
    </div>
  );
};
export default props => {
  const players = props.players;
  return (
    <div className={Classes.ScoreBoard}>
      {players.map((item, index) => (
        <Score
          id={index}
          score={item.score}
          char={item.char}
          active={item.active}
        />
      ))}
    </div>
  );
};
