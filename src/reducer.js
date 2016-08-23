import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}
function next(state) {
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
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'NEXT':
  	return next(state);
  }
  return state;
}