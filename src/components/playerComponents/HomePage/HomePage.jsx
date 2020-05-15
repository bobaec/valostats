import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import background from '../../../Images/tempBackground.jpg';
import './HomePage.scss';
import '../HistoryOverviewSearchbox.scss';


export default function HomePage() {
  const [state, setState] = useState({
    username: '',
    showDropdown: false
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

  const historyListFiltered = state.username === "" ?
    historyList
    :
    historyList.filter(historyElement => historyElement.toLowerCase().includes(state.username.toLowerCase()))

  return (
    <>
      <img src={background} alt='' id='bg' />

      {/* <form
          className='centered'
          onSubmit={(e) => {
            e.preventDefault();
            history.push({
              pathname: `/player/username=${state.username}`,
            });
            addToLocalStorage(state.username);
          }}>
          <input
            type="text"
            placeholder="Player Name"
            onChange={(e) => setState({ ...state, username: e.target.value })}
            list="searchbox-dropdown-history-list"
          />

          <datalist id='searchbox-dropdown-history-list'>
            {historyList.map(historyElement => <option value={historyElement} />)}
          </datalist>
        </form> */}
      <div className='history-overview-searchbox centered'>
        <div className='searchbox-input'>
          <form
            className='centered'
            onSubmit={(e) => {
              e.preventDefault();
              history.push({
                pathname: `/player/username=${state.username}`,
              });
              addToLocalStorage(state.username);
            }}>
            <input
              type='text'
              className='input'
              placeholder='Search an Agent'
              onFocus={(e) => setState({ ...state, showDropdown: true })}
              onBlur={(e) => setTimeout(setState({ ...state, showDropdown: false }), 100)}
              onChange={(e) => setState({ ...state, username: e.target.value })}></input>
          </form>
          <i className='fas fa-search'></i>
        </div>
        <div className='searchbox-dropdown-menu'>
          {state.showDropdown && (
            <ul id='searchbox-dropdown-agent-list'>
              <li>Recent Search History</li>
              {historyListFiltered.map((searchElement) => (
                <li
                  key={searchElement}
                  onMouseDown={(e) => {
                    history.push({
                      pathname: `/player/username=${e.target.innerText}`,
                    });
                    setState({ ...state, showDropdown: false })
                  }}>
                  {searchElement}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
