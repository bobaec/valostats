import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useHistory } from 'react-router-dom';

export default function Navbar(props) {
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
      : historyList.filter((historyElement) =>
          historyElement.toLowerCase().includes(state.username.toLowerCase())
        );

  return (
    <>
      <nav className='navbar-container'>
        <div className='navbar-inner-container'>
          <Link to='/' className='home'>
            Valostats
          </Link>
          {props.allowSearch && (
            <div className='history-overview-searchbox'>
              <div className='searchbox-input'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    history.push({
                      pathname: `/player/username=${state.username}`,
                    });
                    addToLocalStorage(state.username);
                    e.target.firstElementChild.blur();
                    e.target.firstElementChild.value = '';
                    setState({ ...state, showDropdown: false })
                  }}>
                  <input
                    type='text'
                    className='input'
                    placeholder='Search an Agent'
                    onFocus={(e) => setState({ ...state, showDropdown: true })}
                    onBlur={(e) => setState({ ...state, showDropdown: false })}
                    onChange={(e) =>
                      setState({ ...state, username: e.target.value })
                    }></input>
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
          )}
        </div>
      </nav>
    </>
  );
}
