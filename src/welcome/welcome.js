import React from 'react';
import Classes from './welcome.module.css';
export default props => (
  <div className={Classes.Welcome}>
    <div onClick={props.button1Clicked} className={Classes.Button}>
      Single Player
    </div>
    <div onClick={props.button2Clicked} className={Classes.Button}>
      Multiplayer
    </div>
  </div>
);
