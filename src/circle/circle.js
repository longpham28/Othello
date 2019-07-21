import React from 'react';
import Classes from './circle.module.css';

export default props => {
  return (
    <div style={{ backgroundColor: props.color }} className={Classes.Circle} />
  );
};
