import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useHistory } from 'react-router-dom'

export default function Navbar(props) {

  const [state, setState] = useState({
    username: ""
  })

  const history = useHistory();

  
  return (
    <>
      <div className='navbar-container'>
        <ul>
          <li>
            <Link to="/homepage">Home</Link>
          </li>
          <li>
            <Link to="/player">Player</Link>
          </li>
          {props.allowSearch &&
            <li>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  history.push(`/player/username=${state.username}`)
                }}
              >
                <input
                  type="text"
                  placeholder="Player Name"
                  onChange={(e) => setState({ ...state, username: e.target.value })}
                />
              </form>
            </li>}

        </ul>

      </div>
    </>
  )
}