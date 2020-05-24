import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NavbarPlayerSearchBox.scss';
import {
  addToLocalStorage,
  deleteTarget,
} from 'Helpers/localStorageManipulation';
import { validateUsername } from 'Helpers/validateUsername';

export default function NavbarPlayerSearchBox(props) {
  const [state, setState] = useState({
    username: '',
    showDropdown: false,
    inputPlaceholder: 'Search a player',
    invalidUsername: false,
  });
  const history = useHistory();

  const historyList = JSON.parse(window.localStorage.getItem('history'))
    ? [...new Set(JSON.parse(window.localStorage.getItem('history')))]
    : [];

  return (
    <div className='navbar player-searchbox-container'>
      <div
        className={`player-searchbox ${
          state.showDropdown && historyList.length !== 0 && 'list-open'
        }`}>
        <form
          className='searchbox-form'
          onSubmit={(e) => {
            e.preventDefault();
            if (validateUsername(state.username)) {
              addToLocalStorage(state.username);
              history.push({
                pathname: `/player/username=${state.username}`,
              });
              e.target.firstElementChild.blur();
              e.target.firstElementChild.value = '';
              setState({ ...state, username: '' });
            } else {
              setState({
                ...state,
                inputPlaceholder: 'Please enter a valid username',
                invalidUsername: true,
              });
              e.target.firstElementChild.value = '';
            }
          }}>
          <input
            type='text'
            className={`player-search-input ${
              state.invalidUsername && `invalid-username`
            }`}
            placeholder={state.inputPlaceholder}
            onChange={(e) =>
              setState({
                ...state,
                username: e.target.value,
                invalidUsername: false,
                inputPlaceholder: 'Search a player',
              })
            }
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
                    pathname: `/player/username=${e.target.innerText}/profile`,
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
