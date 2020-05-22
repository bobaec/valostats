import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './HomePageSearchBox.scss';
import { addToLocalStorage } from 'Helpers/addToLocalStorage';
import { deleteTarget } from 'Helpers/deleteTarget';
import { validateUsername } from 'Helpers/validateUsername';

export default function HomePageSearchBox() {
  const [state, setState] = useState({
    username: '',
    inputPlaceholder: 'Search a player',
    inputClass: 'player-search-input',
  });
  const history = useHistory();

  const historyList = JSON.parse(window.localStorage.getItem('history'))
    ? [...new Set(JSON.parse(window.localStorage.getItem('history')))]
    : [];

  return (
    <div>
      <div className='player-searchbox-container'>
        <div
          className={`player-searchbox ${
            historyList.length === 0 && 'searchbox-rounded'
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
                  inputClass: 'invalid-player-search-input',
                });
                e.target.firstElementChild.value = '';
              }
            }}>
            <input
              type='text'
              className={state.inputClass}
              placeholder={state.inputPlaceholder}
              onChange={(e) => setState({ ...state, username: e.target.value })}
            />
          </form>
          <i className='fas fa-search'></i>
        </div>

        {historyList && (
          <ul className='player-search-list'>
            {historyList.map((searchElement) => (
              <div>
                <li
                  key={searchElement}
                  onClick={(e) => {
                    e.stopPropagation();
                    history.push({
                      pathname: `/player/username=${e.target.innerText}`,
                    });
                    addToLocalStorage(e.target.innerText);
                  }}>
                  {searchElement}
                </li>
                <i
                  class='fas fa-times'
                  onClick={() => deleteTarget(searchElement)}></i>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
