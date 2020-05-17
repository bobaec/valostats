import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './PlayerSearchBox.scss';

export default function NavbarPlayerSearchBox(props) {
  const [state, setState] = useState({
    username: '',
  });

  const history = useHistory();

  const addToLocalStorage = function (username) {
    const historyArr = JSON.parse(window.localStorage.getItem('history'))
      ? JSON.parse(window.localStorage.getItem('history'))
      : [];

      if (!historyArr.includes(username.toLowerCase())) {
        if (historyArr.length > 9) {
          historyArr.shift();
          historyArr.push(username.toLowerCase());
          window.localStorage.setItem('history', JSON.stringify(historyArr));
        } else {
          historyArr.push(username.toLowerCase());
          window.localStorage.setItem('history', JSON.stringify(historyArr));
        }
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
    <div className='agent-searchbox'>
      <div className='history-overview-searchbox '>
        <div className='searchbox-input'>
          <form
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
              className='input'
              placeholder='Search an Agent'
              onFocus={(e) => setState({ ...state, showDropdown: true })}
              onBlur={(e) => setState({ ...state, showDropdown: false })}
              onChange={(e) => setState({ ...state, username: e.target.value })}></input>
          </form>

          <i className='fas fa-search'></i>
        </div>
        <div className='searchbox-dropdown-menu'>
          {historyList && historyListFiltered.length !== 0 && state.showDropdown && (
            <ul id='searchbox-dropdown-agent-list'>
              {historyListFiltered.map((searchElement) => (
                <li
                  key={searchElement}
                  onMouseDown={(e) => {
                    history.push({
                      pathname: `/player/username=${e.target.innerText}`,
                    });
                    addToLocalStorage(e.target.innerText);
                    setState({ ...state, showDropdown: false });
                  }}>
                  {searchElement}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
