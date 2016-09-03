import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Winner extends React.Component{
  render() {
    return <div className="winner">
    	<div className="thumbnail text-center">
    		<img src="https://cdn.filestackcontent.com/op3TowgKQNOQMI7IxliX" alt="winner"></img>
      	<h1>Congratulations, {this.props.winner}</h1>
      	<button className="btn btn-filestack btn-lg btn-filestack-start" onClick={() => this.props.reset()}>Restart</button>
    	</div>
    </div>;
  }
}