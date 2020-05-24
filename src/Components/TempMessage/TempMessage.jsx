import React, { useState, useEffect } from 'react';
import { ReactComponent as MessageButton } from 'Images/messagebutton.svg';
import './TempMessage.scss';

export default function TempMessage(props) {
  const { open } = props;
  const [state, setState] = useState({
    opened: false,
    counter: 0,
  });

  useEffect(() => {
    if (open) {
      setState((prev) => ({ ...prev, opened: !prev.opened, counter: prev.counter + 1 }));
    }
  }, [open]);

  return (
    <>
      <div
        class={`temp-message-container ${state.opened && state.counter !== 0 && 'fade-in'} ${
          !state.opened && state.counter !== 0 && 'fade-out'
        }`}>
        <span className='header'>Welcome to VALOSTATS</span>
        <span className='sub-header'>The best place for real-time Valorant Stats!</span>
        <p>
          Once Riot Games makes the data available, you will be able to look up any Valorant profile you wish and
          harness the power of global Valorant statistics!
        </p>
        <p>In the meantime, go ahead and get a feel for this amazing tool we built for you guys and girls!</p>
        <p>
          We're extremely eager to know what you think so don't hesitate to reach out and let us know how we can
          improve.{' '}
          <a href='mailto:feedback@valostats.gg' className='valo-email'>
            feedback@valostats.gg{' '}
          </a>
        </p>
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
            class='fas fa-times-circle fa-4x'></i>
        )}
      </div>
    </>
  );
}
