import React from 'react';

var countNum = 0;

function Buttons(props) {

    return (
        <button
            className={`w3-button w3-black w3-hover-green w3-round-large ${props.className}`}
        id={props.id} onClick={props.handleClick}>
        {props.text}
      </button>
  );
}

export { Buttons, countNum };