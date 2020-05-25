import React from 'react';

export default function Footer(props) {
  return (
    <>
      <div className='footer' id={props.home ? 'home' : ''}>
        <footer className='footer-copyright'>
          Valostats.gg isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone
          officially involved in producing or managing Valorant. Riot Games and Valorant are trademarks or registered
          trademarks of Riot Games, Inc. Valorant © Riot Games, Inc.
        </footer>
      </div>
    </>
  );
}
