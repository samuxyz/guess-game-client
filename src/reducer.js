import {Map} from 'immutable';

function setState(state, newState) {
  const state1 = state.merge(newState);
  console.log("state");
  console.log(state1.toJS());
  return state1;
}
function resetGuess(state) {
  console.log("resetGuess");
  const hasGuessed = state.get('hasGuessed');
  const currentCharacter = state.get('guess');
  if (hasGuessed && !(currentCharacter.get('name') === hasGuessed)) {
    console.log("here!");
    return state.remove('hasGuessed');
  } else {
    return state;
  }
}
function resetWinner(state) {
  console.log("reset");
  console.log(state.toJS());

  const winner = state.get('winner');
  if (winner) {
    return state.remove('winner').remove('hasGuessed');
  } else {
    return state;
  }
}
function guessed(state, characterName) {
  const character = state.get('guess');
  if(character.get('name') === characterName ) {
    console.log('setting it');
    return state.set("hasGuessed", characterName)
  } else {
    return state;
  }
}
/*function next(state) {
	const entries = state.get('entries');
  if (entries.size === 0) {
    return state.remove('guess')
                .remove('entries')
                .set('winner', "you win!");
  } else {
  	return state.merge({
    	guess: entries.first(),
    	entries: entries.skip(1)
  	});
	}
}*/

export default function(state = Map(), action) {
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