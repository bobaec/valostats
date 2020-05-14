import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import background from '../../../Images/tempBackground.jpg';
import './HomePage.scss';

export default function HomePage() {
  const [state, setState] = useState({
    username: '',
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
            type="text"
            placeholder="Player Name"
            onChange={(e) => setState({ ...state, username: e.target.value })}
            list="searchbox-dropdown-history-list"
          />

          <datalist id='searchbox-dropdown-history-list'>
            {historyList.map(historyElement => <option value={historyElement} />)}
          </datalist>
        </form>
      </div>
    </>
  );
}
