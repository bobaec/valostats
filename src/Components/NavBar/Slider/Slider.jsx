import React from 'react';

export default function Slider(props) {
  return (
    <label className='switch'>
      <input type='checkbox' onChange={props.applyDarkMode()} />
      <span className='slider round'></span>
    </label>
  );
}
