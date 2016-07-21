import { connect } from 'react-redux';

import { LandingView } from '../components/landing.js'

// Setup mapping and containers for Redux
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const LandingContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LandingView);
