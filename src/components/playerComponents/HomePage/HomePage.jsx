import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import background from '../../../Images/tempBackground.jpg';
import './HomePage.scss';

export default function HomePage() {
  const [state, setState] = useState({
    username: '',
  });

  const history = useHistory();

  return (
    <>
      {/* <div className='homepage'> */}
      <img src={background} alt='' id='bg' />

      <form
        className='centered'
        onSubmit={(e) => {
          e.preventDefault();
          history.push({
            pathname: `/player/username=${state.username}`,
          });
        }}>
        <input
          type='text'
          placeholder='Player Username'
          onChange={(e) => setState({ ...state, username: e.target.value })}
        />
      </form>
      {/* </div> */}
    </>
  );
}
