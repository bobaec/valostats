import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'


import './HomePage.scss';

export default function HomePage() {

  const [state, setState] = useState({
    playerName: ""
  })

  const history = useHistory();


  return (
    <>
      <div className="homepage">
       
        <img src='tempBackground.jpg' alt='' id='bg' />
       
        <form
          className="centered"
          onSubmit={(e) => {
            e.preventDefault()
            history.push(`/${state.playerName}`)
          }}
        >
          <input
            type="text"
            placeholder="Player Name"
            onChange={(e) => setState({ ...state, playerName: e.target.value })}
          />
        </form>
      
      </div>
    </>
  );
}
