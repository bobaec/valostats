import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './HomePageSearchBox.scss';

export default function HomePageSearchBox(props) {
  const [state, setState] = useState({
    username: '',
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

  function deleteTarget(target) {
    const arr = JSON.parse(localStorage.getItem('history'));
    const index = arr.indexOf(target);
    if (index !== -1) arr.splice(index, 1);
    window.localStorage.setItem('history', JSON.stringify(arr));
  }

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
              addToLocalStorage(state.username);
              history.push({
                pathname: `/player/username=${state.username}`,
              });
              e.target.firstElementChild.blur();
              e.target.firstElementChild.value = '';
              setState({ ...state, username: '' });
            }}>
            <input
              type='text'
              className='player-search-input'
              placeholder='Search a player'
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
                <i class='fas fa-times' onClick={() => deleteTarget(searchElement)}></i>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
