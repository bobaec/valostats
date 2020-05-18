import { useEffect, useState } from 'react';

export default function useAgentPortraits(agent) {
  const [state, setState] = useState({
    img: '',
  });

  useEffect(() => {
    import(`Images/AgentPortraits/${agent}Portrait.jpg`).then((img) => {
      setState((prev) => ({ ...prev, img: img.default }));
    });
  }, [agent]);

  return state.img;
}
