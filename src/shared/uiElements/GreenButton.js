import React from 'react';

const GreenButton = props => {
  return (
    <button
      type='submit'
      style={
        props.style || {
          backgroundColor: '#00E689',
          border: 'none',
          color: '#1F6649',
          padding: '16px 32px',
          textDecoration: 'none',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '5px',
          fontWeight: "bold"
        }
      }
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default GreenButton;
