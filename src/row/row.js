import React from 'react';
import Classes from './row.module.css';
import Square from '../square/square';

export default props => (
  <div className={Classes.Row}>
    {props.squares.map((square, index) => {
      function squareTicked() {
        return props.squareTicked(index);
      }
      return <Square onClick={squareTicked} char={square} id={index} />;
    })}
  </div>
);
