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

  it('handles NEXT', () => {
    const initialState = fromJS({
      guess: Map({picture: "myPic", option1: "Legolas", option2: "Aragorn", name: "Aragorn"}),
      entries: [
        {picture: "myPic", option1: "Gimli", option2: "Frodo", name: "Gimli"}
      ]
    });
    const action = {type: 'NEXT'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      guess: {picture: "myPic", option1: "Gimli", option2: "Frodo", name: "Gimli"},
      entries: []
    }));
  });

});