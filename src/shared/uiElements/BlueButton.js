import React from 'react';

const BlueButton = props => {
  return (
    <button
      style= {props.style || {
        color: '#fff',
        backgroundColor: '#0da7db',
        border: 'none',
        borderRadius: '4px',
        padding: '7px 15px',
        textAlign: 'center'
      }}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default BlueButton;
