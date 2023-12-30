"use client";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Toggler() {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  const toggleStyle = {
    width: '40px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
  };

  const toggleIconStyle = {
    color: 'goldenrod',
  };

  const toggleBallStyle = {
    width: '18px',
    height: '18px',
    backgroundColor: 'black',
    position: 'absolute',
    left: '1px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: '1s ease all',
    transform: active ? 'translateX(20px)' : 'translateX(0)', // Adjust the value for the desired slide distance
  };
  console.log(active)

  return (
    <>
      <div style={toggleStyle} onClick={handleToggle}>
        <FontAwesomeIcon icon={faMoon} style={toggleIconStyle} />
        <FontAwesomeIcon icon={faSun} style={toggleIconStyle} />
        <div style={toggleBallStyle}></div>
      </div>
    </>
  );
}

export default Toggler;
