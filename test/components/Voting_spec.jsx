import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import {Guessing} from '../../src/components/Guessing';
import {expect} from 'chai';

describe('Guessing', () => {
  it('renders the character with buttons and picture', () => {
  	const guess = {picture: "wQhAl91Q1Cu040HSCcbg", option1: "Legolas", option2: "Aragorn", name: "Aragorn"};
    const component = renderIntoDocument(
      <Guessing guess={guess} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    const filestackUrl = "https://process.filestackapi.com";
    const blurProcessOptions = "blur_faces=faces:1,a:15,type:oval,buffer:150,blur:20";

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Legolas');
    expect(buttons[1].textContent).to.equal('Aragorn');

    const picture = scryRenderedDOMComponentsWithTag(component, 'img');
    expect(picture.length).to.equal(1);
    expect(picture[0].src).to.equal(filestackUrl + "/" + blurProcessOptions + "/" +guess.picture);
  });
  
  it('renders just the winner when there is one', () => {
  	let winner = "you win!";
	  const component = renderIntoDocument(
	    <Guessing winner={winner} />
	  );
	  const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
	  expect(buttons.length).to.equal(0);

	  winner = ReactDOM.findDOMNode(component.refs.winner);
	  expect(winner).to.be.ok;
	  expect(winner.textContent).to.contain('you win!');
	});

});