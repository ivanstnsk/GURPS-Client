import React, { Component } from 'react';
import { connect } from 'react-redux';

import { screenChange } from 'actions/app';

import WorldCreateScreen from './WorldCreateScreen';


class WorldCreateScreenContainer extends Component {
  render() {
    const { onScreenChange } = this.props;
    
    return (
      <WorldCreateScreen onScreenChange={onScreenChange} />
    );
  }
}

function mapStateToProps(state) {
  return {
    gameWorld: state.app.gameWorld
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onScreenChange: (screen) => dispatch(screenChange(screen))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorldCreateScreenContainer);
