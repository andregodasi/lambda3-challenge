import { useState, useEffect } from 'react';

interface ITheme {
  title: string;
}

function usePersistedState(
  key: string,
  initialState: object,
): [ITheme, (state: object) => void] {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
