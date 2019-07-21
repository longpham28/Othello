import React from 'react';
import Classes from './square.module.css';
import Circle from '../circle/circle';
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
export default props => {
  const circleColor = convertColor(props.char);
  return (
    <div onClick={props.onClick} className={Classes.Square}>
      <Circle color={circleColor} />
    </div>
  );
};
