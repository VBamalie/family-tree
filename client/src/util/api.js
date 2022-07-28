export const getVbNuclear = (nuclearId) => {
    return fetch(`/api/vb/nuclear/${nuclearId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
export const getVbTree = (treeId) => {
    return fetch(`/api/vb/tree/${treeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  export const getMicNuclear = (nuclearId) => {
    return fetch(`/api/mic/nuclear/${nuclearId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
export const getMicTree = (treeId) => {
    return fetch(`/api/mic/nuclear/${treeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };