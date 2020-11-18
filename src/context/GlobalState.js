import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
	watchlist: [],
	watched: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvide = props => {
	const [state, dispatch] = useReducer(AppReducer);
};
