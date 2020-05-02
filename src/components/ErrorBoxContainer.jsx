import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../slices';

import ErrorBox from './ErrorBox';

const mapStateToProps = (state) => ({ errorStore: state.errors });

class ErrorBoxContainer extends React.Component {
  closeError = () => {
    const { dispatch } = this.props;
    dispatch(actions.clearErrors());
  }

  render() {
    const { errorStore } = this.props;
    return (
      <ErrorBox errorStore={errorStore} closeErrorFunction={this.closeError} />
    );
  }
}

export default connect(mapStateToProps)(ErrorBoxContainer);
