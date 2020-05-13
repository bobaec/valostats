import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import background from '../../../Images/tempBackground.jpg';
import './HomePage.scss';

export default function HomePage() {
  const [state, setState] = useState({
    username: '',
    showDropdown: false
  });

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
      <div className='homepage'>
      <img src={background} alt='' id='bg' />

        <form
          className='centered'
          onSubmit={(e) => {
            e.preventDefault();
            history.push({
              pathname: `/player/username=${state.username}`,
            });
            addToLocalStorage(state.username);
          }}>
          <input
            type='text'
            placeholder='Player Username'
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
      </div>
    </>
  );
}
