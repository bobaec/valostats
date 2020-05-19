import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NavbarPlayerSearchBox.scss';

export default function NavbarPlayerSearchBox(props) {
  const [state, setState] = useState({
    username: '',
    showDropdown: false,
  });
  const history = useHistory();

  const addToLocalStorage = function (username) {
    let historyArr = JSON.parse(window.localStorage.getItem('history'))
      ? JSON.parse(window.localStorage.getItem('history'))
      : [];

    let caseInsensitive = username.toLowerCase();

    historyArr = historyArr.map((lowerCaseHistoryArr) => {
      return lowerCaseHistoryArr.toLowerCase();
    });

    if (!historyArr.includes(caseInsensitive)) {
      if (historyArr.length > 9) {
        historyArr.shift();
        historyArr.push(username);
        window.localStorage.setItem('history', JSON.stringify(historyArr));
      } else {
        historyArr.push(username);
        window.localStorage.setItem('history', JSON.stringify(historyArr));
      }
    }
  };

  const deleteTarget = (target) => {
    const arr = JSON.parse(localStorage.getItem('history'));
    const index = arr.indexOf(target);
    if (index !== -1) arr.splice(index, 1);
    window.localStorage.setItem('history', JSON.stringify(arr));
  };

  const historyList = JSON.parse(window.localStorage.getItem('history'))
    ? [...new Set(JSON.parse(window.localStorage.getItem('history')))]
    : [];

  return (
    <div className='navbar player-searchbox-container'>
      <div className={`player-searchbox ${state.showDropdown && historyList.length !== 0 && 'list-open'}`}>
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
            onChange={(e) => setState({ ...state, username: e.target.value })}
            onBlur={(e) => {
              setState({ ...state, showDropdown: false });
            }}
            onFocus={(e) => setState({ ...state, showDropdown: true })}
          />
        </form>
        <i className='fas fa-search'></i>
      </div>
      {historyList && state.showDropdown && (
        <ul className='player-search-list'>
          {historyList.map((searchElement) => (
            <div>
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
              <i
                class='fas fa-times'
                onMouseDown={(e) => {
                  deleteTarget(searchElement);
                }}></i>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
