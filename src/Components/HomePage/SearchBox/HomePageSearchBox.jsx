import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addToLocalStorage, deleteTarget } from 'Helpers/localStorageManipulation';
import { validateUsername } from 'Helpers/validateUsername';
import { ReactComponent as LogoSearch } from 'Images/Logo/logo-black.svg';
export default function HomePageSearchBox() {
  const history = useHistory();

  const [state, setState] = useState({
    username: '',
    inputPlaceholder: 'Search a player',
    invalidUsername: false,
    historyList: JSON.parse(window.localStorage.getItem('history'))
      ? [...new Set(JSON.parse(window.localStorage.getItem('history')))]
      : [],
  });

  return (
    <div>
      <div className='player-searchbox-container'>
        <div className={`player-searchbox ${state.historyList.length === 0 && 'searchbox-rounded'}`}>
          <form
            className='searchbox-form'
            onSubmit={(e) => {
              e.preventDefault();
              if (validateUsername(state.username)) {
                addToLocalStorage(state.username);
                history.push({
                  pathname: `/players/${state.username}`,
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
          <i className='fas fa-search'/> 
        </div>

        {state.historyList && (
          <ul className='player-search-list'>
            {state.historyList.map((searchElement) => (
              <div key={searchElement}>
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    history.push({
                      pathname: `/players/${e.target.innerText}`,
                    });
                    addToLocalStorage(e.target.innerText);
                  }}>
                  {searchElement}
                </li>
                <i
                  className='fas fa-times'
                  onClick={() => {
                    deleteTarget(searchElement);
                    setState({
                      ...state,
                      historyList: [...new Set(JSON.parse(window.localStorage.getItem('history')))],
                    });
                  }}></i>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
