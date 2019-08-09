import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { CurrentUser, UserList } from './components'
import { UserCreateDialog, UserSelectionDialog } from './components/dialogs'

import { Switch, HashRouter, Route } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { clearError } from './actions';
import { login, logout } from './actions/userActions';

const home = () => (
  <CurrentUser userkey="c9449e43-5e2c-4874-8900-55d5708f2005" />
)

class App extends React.PureComponent {

  clearError = () => {
    this.props.clearError();
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>{this.props.user ? this.props.user.userRecord.fullName : ""}</Typography>
            <Button color="inherit" onClick={this.props.user ? this.props.logout : this.props.login}>{this.props.user ? "Logout" :"Login"}</Button>
          </Toolbar>
        </AppBar>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/users" component={UserList} />
          </Switch>
        </HashRouter>
        <UserCreateDialog opened={this.props.promptNew} />
        <UserSelectionDialog opened={this.props.promptLogin} />
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
  error: state.common.error,
  promptNew: state.users.promptNew,
  promptLogin: state.users.promptLogin,
  user: state.users.current

})

App.propTypes = {
  clearError: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { clearError, login, logout })(App);
