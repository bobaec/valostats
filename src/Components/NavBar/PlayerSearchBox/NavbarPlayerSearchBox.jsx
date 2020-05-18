import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './NavbarPlayerSearchBox.scss';

export default function HomePageSearchBox(props) {
  const [state, setState] = useState({
    username: '',
    showDropdown: false,
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

  return (
    <div className='navbar player-searchbox-container'>
      <div className={`player-searchbox ${state.showDropdown && 'list-open'}`}>
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
      {historyList && state.showDropdown && (
        <ul className={`player-search-list`}>
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
