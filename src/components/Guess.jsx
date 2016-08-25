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
      toastr.success("Great! You are right.")
      this.props.next();
    }
    else {
      toastr.error('Sorry wrong choice!');
    }
  },
  render: function() {
    return <div className="guessing">
      <div className="thumbnail">
        <img src={this.getImg()} style={{width:300 + 'px'}}/>
      </div>
      <div className="btn-group" role="group" aria-label="...">
      {this.getName().map(entry =>
        <button type="button" className="btn btn-default" key={entry} onClick={() => this.guess(entry)}>
          <h1>{entry}</h1>
        </button>
      )}
      </div>
    </div>;
  }
});