export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function next() {
  return {
  	meta: {remote: true},
    type: 'NEXT'
  };
}

export function guessed(character) {
	return {
    meta: {remote: true},
		type: 'HAS_GUESSED',
		character
	}
}

export function reset() {
  return {
    meta: {remote: true},
    type: 'RESET'
  };
}

export function add(character) {
  return {
    meta: {remote: true},
    type: 'ADD',
    character
  }
}