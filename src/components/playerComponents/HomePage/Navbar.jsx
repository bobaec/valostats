import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useHistory } from 'react-router-dom'

export default function Navbar(props) {

  const [state, setState] = useState({
    username: "",
    showDropdown: false
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

  const historyList = JSON.parse(window.localStorage.getItem("history")) ?
  [...new Set(JSON.parse(window.localStorage.getItem("history")))] : []


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
                  e.target.firstElementChild.blur()
                  e.target.firstElementChild.value = ""

                }}
              >
                <input
                  type="text"
                  placeholder="Player Name"
                  onChange={(e) => setState({ ...state, username: e.target.value })}
                  onFocus={(e) => setState({ ...state, showDropdown: true })}
                  onBlur={(e) => setState({ ...state, showDropdown: false })}
                />
                {state.showDropdown
                  &&
                  JSON.parse(window.localStorage.getItem("history"))
                  &&
                  <div className='searchbox-dropdown-history'>
                    <ul id='searchbox-dropdown-history-list'>
                      <li>History</li>
                      {historyList.map(historyElement => <li>{historyElement}</li>)}
                    </ul>
                  </div>}
              </form>
            </li>}

        </ul>

      </div>
    </>
  )
}