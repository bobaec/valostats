import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useHistory } from 'react-router-dom';

export default function Navbar(props) {
  const [state, setState] = useState({
    username: '',
  });

  const history = useHistory();

  const addToLocalStorage = function (username) {
    const historyArr = JSON.parse(window.localStorage.getItem('history'))
      ? JSON.parse(window.localStorage.getItem('history'))
      : [];

    if (historyArr.length > 9) {
      historyArr.shift();
      historyArr.push(username);
      window.localStorage.setItem('history', JSON.stringify(historyArr));
    } else {
      historyArr.push(username);
      window.localStorage.setItem('history', JSON.stringify(historyArr));
    }
  };

  const historyList = JSON.parse(window.localStorage.getItem('history'))
    ? [...new Set(JSON.parse(window.localStorage.getItem('history')))]
    : [];

  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-inner-container'>
          <Link to='/'>Home</Link>
          {props.allowSearch && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                history.push(`/player/username=${state.username}`);
                addToLocalStorage(state.username);
                e.target.firstElementChild.blur();
                e.target.firstElementChild.value = '';
              }}>
              <input
                type='text'
                placeholder='Player Name'
                onChange={(e) =>
                  setState({ ...state, username: e.target.value })
                }
                list='searchbox-dropdown-history-list'
              />

              <datalist id='searchbox-dropdown-history-list'>
                {historyList.map((historyElement) => (
                  <option value={historyElement} />
                ))}
              </datalist>
            </form>
          )}
        </div>
      </nav>
    </>
  );
}
