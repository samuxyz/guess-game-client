import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        guess: Map({picture: "myPic", option1: "Legolas", option2: "Aragorn", name: "Aragorn"})
      }) 
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      guess: {picture: "myPic", option1: "Legolas", option2: "Aragorn", name: "Aragorn"}
    }));
  });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: { 
        guess: {picture: "myPic", option1: "Legolas", option2: "Aragorn", name: "Aragorn"}     
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      guess: {picture: "myPic", option1: "Legolas", option2: "Aragorn", name: "Aragorn"}
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        guess: {picture: "myPic", option1: "Legolas", option2: "Aragorn", name: "Aragorn"}
      }     
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      guess: {picture: "myPic", option1: "Legolas", option2: "Aragorn", name: "Aragorn"}
    }));
  });
  it('handles HAS_GUESS by setting hasGuessed', () => {
    const state = fromJS({
      guess: {"picture": "wQhAl91Q1Cu040HSCcbg", "option1": "Legolas", "option2": "Aragorn", "name": "Aragorn"}
    });
    const action = {type: 'HAS_GUESSED', character: 'Aragorn'};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      guess: {"picture": "wQhAl91Q1Cu040HSCcbg", "option1": "Legolas", "option2": "Aragorn", "name": "Aragorn"},
      hasGuessed: 'Aragorn'
    }));
  });
  it('Does not add hasGuessed for wrong character', () => {
    const state = fromJS({
      guess: {"picture": "wQhAl91Q1Cu040HSCcbg", "option1": "Legolas", "option2": "Aragorn", "name": "Aragorn"}
    });
    const action = {type: 'HAS_GUESSED', character: 'gandalf'};
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      guess: {"picture": "wQhAl91Q1Cu040HSCcbg", "option1": "Legolas", "option2": "Aragorn", "name": "Aragorn"}
    }));
  });
  it('Remove hasGuessed for a new entry', () => {
    const state = fromJS({
      guess: {"picture": "wQhAl91Q1Cu040HSCcbg", "option1": "Legolas", "option2": "Aragorn", "name": "Aragorn"},
      hasGuessed: "Aragorn"
    });
    const action = {
      type: 'SET_STATE',
      state: {
        guess: {"picture": "eCH1EbE1Q1Sa1OYrdBkx", "option1": "Gimli", "option2": "Frodo", "name": "Gimli"}
      }     
    };
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      guess: {"picture": "eCH1EbE1Q1Sa1OYrdBkx", "option1": "Gimli", "option2": "Frodo", "name": "Gimli"}
    }));
  });
  it('doesnt Remove hasGuessed for a old entry', () => {
    const state = fromJS({
      guess: {"picture": "wQhAl91Q1Cu040HSCcbg", "option1": "Legolas", "option2": "Aragorn", "name": "Aragorn"},
      hasGuessed: "Aragorn"
    });
    const action = {
      type: 'SET_STATE',
      state: {
        guess: {"picture": "wQhAl91Q1Cu040HSCcbg", "option1": "Legolas", "option2": "Aragorn", "name": "Aragorn"}
      }     
    };
    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      guess: {"picture": "wQhAl91Q1Cu040HSCcbg", "option1": "Legolas", "option2": "Aragorn", "name": "Aragorn"},
      hasGuessed: "Aragorn"
    }));
  });
  it('RESET the game', () =>{
    const state = Map({
      winner: 'you win!'
    });
    const action = {
      type: 'RESET'
    };
    const nextState = reducer(state, action);
    expect(nextState).to.equal(fromJS({}));
  });


});