import React, { useState, useEffect } from 'react';
import { ReactComponent as MessageButton } from 'Images/messagebutton.svg';
import { checkIfVisited, setHasVisited } from 'Helpers/localStorageManipulation';

export default function TempMessage(props) {
  const { open } = props;
  const [state, setState] = useState({
    opened: false,
    counter: 0,
  });

  useEffect(() => {
    const hasVisited = checkIfVisited();
    if (!hasVisited && open) {
      setState((prev) => ({ ...prev, opened: !prev.opened, counter: prev.counter + 1 }));
      setHasVisited();
    }
  }, [open]);

  return (
    <>
      <div
        className={`temp-message-container ${state.opened && state.counter !== 0 && 'fade-in'} ${
          !state.opened && state.counter !== 0 && 'fade-out'
        }`}>
        <span className='header'>Welcome to VALOSTATS</span>
        <span className='sub-header'>The best place for real-time Valorant Statistics!</span>
        <p>
          Currently, our match history is simply mock data - once Riot Games provides us with the data, you will be able
          to look up any Valorant profile and their respective match history.
        </p>
        <p>There is also an agents page which includes agent specific information not listed in game or online.</p>
        <p>In the meantime, please try and test out our initial design of the website.</p>
        <span>
          We're extremely eager to know what you think so don't hesitate to reach out and let us know how we can
          improve.{' '}
          <p>
            Contact us at:{' '}
            <a href='mailto:feedback@valostats.gg' className='valo-email'>
              feedback@valostats.gg{' '}
            </a>
          </p>
        </span>
        <footer className='message-footer'>GG EVERYONE!</footer>
      </div>

      {!state.opened && (
        <MessageButton
          className='message-button'
          onClick={() => {
            setState({ ...state, opened: !state.opened, counter: state.counter + 1 });
          }}
        />
      )}
      <div id='temp-message-button'>
        {state.opened && (
          <i
            onClick={() => setState({ ...state, opened: !state.opened, counter: state.counter + 1 })}
            className='fas fa-times-circle fa-4x'></i>
        )}
      </div>
    </>
  );
}
