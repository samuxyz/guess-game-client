import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router'

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
    	<div>Hello from the Guess game!
    		<Link to="/play">Start</Link>
    	</div>
    );
  }
});