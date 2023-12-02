// TalentTreeContext.js
import React from 'react';

const TalentTreeContext = React.createContext({
  nodeStates: {}, // This will hold the state like { nodeA: 0, nodeB: 0 }
  updateNodeState: (nodeId, newState) => {}, // Function to update node state
});

export default TalentTreeContext;