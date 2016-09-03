import {Map} from 'immutable';

export function setState(state, newState) {
  const state1 = state.merge(newState);
  return state1;
}
export function resetGuess(state) {
  const hasGuessed = state.get('hasGuessed');
  const currentCharacter = state.get('guess');
  if (hasGuessed && !(currentCharacter.get('name') === hasGuessed)) {
    return state.remove('hasGuessed');
  } else {
    return state;
  }
}
export function resetWinner(state) {
  const winner = state.get('winner');
  if (winner) {
    return state.remove('winner').remove('hasGuessed');
  } else {
    return state;
  }
}
export function guessed(state, characterName) {
  const character = state.get('guess');
  if(character.get('name') === characterName ) {
    return state.set("hasGuessed", characterName)
  } else {
    return state;
  }
}

export const INITIAL_STATE = Map({
  guess: Map({picture: "", option1: "", option2: "", name: ""})
});