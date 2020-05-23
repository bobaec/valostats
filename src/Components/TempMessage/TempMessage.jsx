import React, { useState } from 'react';
import './TempMessage.scss';
export default function TempMessage() {
  const [state, setState] = useState({
    opened: false,
  });

  return (
    <>
      {state.opened && (
        <div class='temp-message-container'>
          <h1>Welcome to VALOSTATS.GG!</h1>
          <h2>The best place for real-time Valorant Stats!</h2>
          <p>
            Once Riot Games makes the data available, you will be able to look
            up any Valorant profile you wish, harnest the power of global
            Valorant statistics and also Live Spectate!
          </p>
          <p>
            In the meantime, go ahead and get a feel for this amazing tool we
            built for you guys and girls!
          </p>
          <p>
            We're extremely eager to know what you think so don't hesitate to
            reach us at feedback@valostats.gg and let us know how we can
            improve.
          </p>
          <p>GG EVERYONE!</p>
        </div>
      )}
      <div id='temp-message-button'>
        {!state.opened && (
          <i
            onClick={() => setState({ opened: !state.opened })}
            class='fas fa-exclamation-circle fa-4x'></i>
        )}
        {state.opened && (
          <i
            onClick={() => setState({ opened: !state.opened })}
            class='fas fa-times-circle fa-4x'></i>
        )}
      </div>
    </>
  );
}
