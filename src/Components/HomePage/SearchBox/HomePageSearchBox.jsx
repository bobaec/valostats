import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './HomePageSearchBox.scss';
import { addToLocalStorage, deleteTarget } from 'Helpers/localStorageManipulation';
import { validateUsername } from 'Helpers/validateUsername';

export default function HomePageSearchBox() {
  const [state, setState] = useState({
    username: '',
    inputPlaceholder: 'Search a player',
    invalidUsername: false,
  });
  const history = useHistory();

  const historyList = JSON.parse(window.localStorage.getItem('history'))
    ? [...new Set(JSON.parse(window.localStorage.getItem('history')))]
    : [];

  return (
    <div>
      <div className='player-searchbox-container'>
        <div className={`player-searchbox ${historyList.length === 0 && 'searchbox-rounded'}`}>
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
                  inputPlaceholder:
                    'Please enter a valid username. i.e. Only alphanumeric characters',
                  invalidUsername: true,
                });
                e.target.firstElementChild.value = '';
              }
            }}>
            <input
              type='text'
              className={`player-search-input ${state.invalidUsername && `invalid-username`}`}
              placeholder={state.inputPlaceholder}
              onChange={(e) =>
                setState({
                  ...state,
                  username: e.target.value,
                  invalidUsername: false,
                  inputPlaceholder: 'Search a player',
                })
              }
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
                <i class='fas fa-times' onClick={() => deleteTarget(searchElement)}></i>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
