import {setState, resetGuess, guessed, resetWinner, INITIAL_STATE} from './core';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_STATE':
    return resetGuess(setState(state, action.state));
  case 'HAS_GUESSED':
    return guessed(state, action.character);
  case 'RESET':
  	return resetWinner(state);
  }
  return state;
}