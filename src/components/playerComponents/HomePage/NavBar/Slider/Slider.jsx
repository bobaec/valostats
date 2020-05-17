import React from 'react';
import './Slider.scss';

export default function Slider(props) {
  return (
    <label class='switch'>
      <input type='checkbox' onChange={props.applyDarkMode()} />
      <span class='slider round'></span>
    </label>
  );
}
