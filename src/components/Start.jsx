import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
    	<div className="jumbotron">
	      <div className="container text-center">
	        <h1>The Lord of the Rings Guess Game</h1>
	        <p>By applying face detection Filestack can blur faces. Try the game!</p>
	        <p><Link className="btn btn-filestack btn-lg btn-filestack-start" to="/play" role="button">Start</Link></p>
          <p><Link className="btn btn-filestack btn-lg btn-filestack-start" to="/add" role="button">Upload</Link></p>
	      </div>
	    </div>
    	
    );
  }
});