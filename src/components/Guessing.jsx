import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './Winner';
import Guess from './Guess';
import * as actionCreators from '../action_creators';

export const Guessing = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Guess {...this.props} />}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    guess: state.toJS().guess,
    winner: state.toJS().winner
  };
}

export const GuessingContainer = connect(mapStateToProps, actionCreators)(Guessing);