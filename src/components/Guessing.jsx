import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './Winner';
import Guess from './Guess';
import * as actionCreators from '../action_creators';

export class Guessing extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <div className="col-md-6 col-md-offset-3">
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} reset={this.props.reset}/> :
        <Guess {...this.props} />}
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    guess: state.toJS().guess,
    winner: state.toJS().winner,
    hasGuessed: state.toJS().hasGuessed
  };
}

export const GuessingContainer = connect(mapStateToProps, actionCreators)(Guessing);