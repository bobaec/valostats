import React, {useState} from "react";
import "./Navbar.scss";
import { Link, useHistory } from 'react-router-dom'

export default function Navbar(props) {

  const [state, setState] = useState({
    playerName : ""
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
                history.push(`/${state.playerName}`)}} 
              >
                <input 
                  type="text" 
                  placeholder="Player Name" 
                  onChange={(e)=>setState({...state, playerName:e.target.value})}
                />
              </form>
            </li>}

        </ul>

      </div>
    </>
  )
}