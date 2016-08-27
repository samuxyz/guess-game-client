import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  getName: function() {
    return [this.props.guess.option1, this.props.guess.option2]; 
  },
  getImg: function() {
    let url = [];
    url.push("https://process.filestackapi.com");
    if(this.props.hasGuessed !== this.props.guess.name) {
      url.push("blur_faces=faces:1,a:15,type:oval,buffer:150,blur:20");
    }
    url.push(this.props.guess.picture || "");
    return url.join("/");
  },
  guess: function(name) {
    if(name === this.props.guess.name) {
      toastr.success("Great! You are right.")
      this.props.guessed(name);
      setTimeout(this.props.next, 1000);
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
        <button key={this.props.guess.picture} type="button" className="btn btn-default" key={entry} onClick={() => this.guess(entry)}>
          <h1>{entry}</h1>
        </button>
      )}
      </div>
    </div>;
  }
});