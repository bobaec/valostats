import React, { useState, useContext } from 'react';
import './Slider.scss';
import { ThemeContext } from 'Context/ThemeContext';

export default function Slider(props) {
  const [state, setState] = useState({
    isChecked: false,
    // themes: themes,
  });

  const theme = useContext(ThemeContext);

  return (
    <label class='switch'>
      <input type='checkbox' onChange={() => setState({ ...state, isChecked: !state.isChecked })} />
      <span class='slider round'></span>
    </label>
  );
}
