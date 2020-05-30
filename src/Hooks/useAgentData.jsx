import { useState, useEffect } from 'react';

export default function useAgentData(agentName) {
  const [state, setState] = useState({
    agent: '',
    agentImages: {},
    type: '',
  });

  useEffect(() => {
    import(`AgentData/${agentName}.jsx`).then((agent) => {
      setState((prev) => ({ ...prev, agent: agent[agentName], type: agent[agentName].type }));
    });

    const skills = ['c', 'q', 'e', 'x'];

    skills.forEach((letter) => {
      import(`Images/Skills/${agentName}-${letter}.svg`).then((agent) => {
        setState((prev) => ({ ...prev, agentImages: { ...prev.agentImages, [letter]: agent.default } }));
      });
    });
  }, [agentName]);

  return {
    agent: state.agent,
    agentImages: state.agentImages,
    type: state.type,
  };
}
