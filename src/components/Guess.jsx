import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  getName: function() {
    return [this.props.guess.option1, this.props.guess.option2]; 
  },
  getImg: function() {
    return this.props.guess.picture || [];
  },
  guess: function(name) {
    if(name === this.props.guess.name) {
      alert("Great! You are right.")
      this.props.next();
    }
    else {
      alert("Sorry, you are wrong!");
    }
  },
  render: function() {
    return <div className="guessing">
      <div>
        <img src={this.getImg()} style={{width:500 + 'px'}}/>
      </div>
      {this.getName().map(entry =>
        <button key={entry} onClick={() => this.guess(entry)}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>;
  }
});