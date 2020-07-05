/* eslint-disable prettier/prettier */
import React, { createContext, useReducer } from 'react';

const initialState = {
  from: { name: '', id: '' },
  to: { name: '', id: '' },
  date: new Date().toUTCString(),
  connections: [],
  travel: {},
  query: '',
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'FROM':
        return { ...state, from: action.from };
      case 'TO':
        return { ...state, to: action.to };
      case 'TYPING_SELECTION':
        return { ...state, query: action.query }; // do something with the action
      case 'DATE':
        return { ...state, date: action.date }; // do something with the action
      case 'TRAVEL_SELECTION':
        return { ...state, travel: action.travel };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
