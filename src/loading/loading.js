import React from 'react';
import './loading.css';
export default props => (
  <div style={{ opacity: props.opacity }} class="lds-ellipsis">
    <div />
    <div />
    <div />
    <div />
  </div>
);
