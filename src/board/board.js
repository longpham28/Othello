import React from 'react';
import Row from '../row/row';
import Classes from './board.module.css';

export default props => (
  <div className={Classes.Board}>
    {props.rows.map((row, index) => {
      function squareTicked(y) {
        return props.squareTicked(index, y);
      }
      return <Row squareTicked={squareTicked} squares={row} id={index} />;
    })}
  </div>
);
