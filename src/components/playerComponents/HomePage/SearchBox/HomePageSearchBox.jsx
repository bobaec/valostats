import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './HomePageSearchBox.scss';

export default function HomePageSearchBox(props) {
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

  const historyListFiltered =
    state.username === ''
      ? historyList
      : historyList.filter((historyElement) => historyElement.toLowerCase().includes(state.username.toLowerCase()));

  return (
    <div className='player-searchbox-container'>
      <div className='player-searchbox'>
        <form
          className='searchbox-form'
          onSubmit={(e) => {
            e.preventDefault();
            addToLocalStorage(state.username);
            history.push({
              pathname: `/player/username=${state.username}`,
            });
            e.target.firstElementChild.blur();
            e.target.firstElementChild.value = '';
            setState({ ...state, username: '', showDropdown: false });
          }}>
          <input
            type='text'
            className='player-search-input'
            placeholder='Search a player'
            onFocus={(e) => setState({ ...state, showDropdown: true })}
            onBlur={(e) => setState({ ...state, showDropdown: false })}
            onChange={(e) => setState({ ...state, username: e.target.value })}
          />
        </form>
        <i className='fas fa-search'></i>
      </div>
      {historyList && (
        <ul className='player-search-list'>
          {historyList.map((searchElement) => (
            <li
              key={searchElement}
              onMouseDown={(e) => {
                history.push({
                  pathname: `/player/username=${e.target.innerText}`,
                });
                addToLocalStorage(e.target.innerText);
              }}>
              {searchElement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
