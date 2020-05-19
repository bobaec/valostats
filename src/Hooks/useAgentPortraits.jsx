import { useEffect, useState } from 'react';
import heroIcon from 'Images/portraitPlaceholder.png';
export default function useAgentPortraits(agent) {
  const [state, setState] = useState({
    img: '',
  });

  useEffect(() => {
    import(`Images/AgentPortraits/${agent}Portrait.jpg`)
      .then((img) => {
        setState((prev) => ({ ...prev, img: img.default }));
      })
      .catch((img) => {
        setState((prev) => ({ ...prev, img: heroIcon }));
      });
  }, [agent]);

  return state.img;
}
