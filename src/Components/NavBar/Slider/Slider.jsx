import React from 'react';
import 'Components/NavBar/Slider/Slider.scss';

export default function Slider(props) {
  return (
    <label className='switch'>
      <input type='checkbox' onChange={props.applyDarkMode()} />
      <span className='slider round'></span>
    </label>
  );
}
