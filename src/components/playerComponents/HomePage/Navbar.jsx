import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useHistory } from 'react-router-dom'

export default function Navbar(props) {

  const [state, setState] = useState({
    username: ""
  })

  const history = useHistory();

  const addToLocalStorage = function (username) {

    const historyArr = JSON.parse(window.localStorage.getItem("history")) ?
      JSON.parse(window.localStorage.getItem("history")) : []

    if (historyArr.length > 9) {
      historyArr.shift()
      historyArr.push(username)
      window.localStorage.setItem("history", JSON.stringify(historyArr))
    } else {
      historyArr.push(username)
      window.localStorage.setItem("history", JSON.stringify(historyArr))
    }
  }


  return (
    <>
      <div className='navbar-container'>
        <ul>
          <li>
            <Link to="/homepage">Home</Link>
          </li>
          {props.allowSearch &&
            <li>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  history.push(`/player/username=${state.username}`)
                  addToLocalStorage(state.username)
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