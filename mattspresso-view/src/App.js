import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { CurrentUser, UserList } from './components'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { clearError } from './actions';

class App extends React.PureComponent {

  clearError = () => {
    this.props.clearError();
  }

  render() {
    return (
      <div>
        <UserList />
        <CurrentUser userkey="dce9b003-0b01-4032-9a52-6062c355381c" />
        <Dialog
          open={this.props.error !== undefined}
          onClose={this.clearError}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          PaperProps={{ style: { width: '100%' } }}
          maxWidth={this.props.maxWidth}
        >
          <DialogTitle id="scroll-dialog-title">Error Message</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.error}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              label="Close"
              color='primary'
              onClick={this.clearError}>OK</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  };
}

const mapStateToProps = state => ({
  clearError: PropTypes.func.isRequired,
  error: state.common.error
})

export default connect(mapStateToProps, {clearError})(App);
