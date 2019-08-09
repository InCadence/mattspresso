import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { MainDashboard } from './components'
import { UserCreateDialog, UserSelectionDialog } from './components/dialogs'

import { Switch, HashRouter, Route } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import Icon from '@material-ui/core/Icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { clearError } from './actions';
import { login, logout } from './actions/userActions';

const home = () => (
  <div />
)
var rightAlignStyle = {
  marginLeft: "auto",
  marginRight: -12
}

class App extends React.PureComponent {

  clearError = () => {
    this.props.clearError();
  }

  startSettingsPage() {
    console.log("Starting Settings page.")
  }

  startMenuPage() {
    console.log("Starting Menu page.")
  }


  render() {
    console.log(this.props);

    return (
      <div>
        <AppBar position="static">
          {this.props.user &&
            <Toolbar>
              <Tooltip title={this.props.user.userRecord.fullName} placement='bottom'>
                <Avatar style={{ marginRight: '10px' }} alt={this.props.user.userRecord.fullName} src="/images/mattspresso/avatar.png" />
              </Tooltip>
              <Typography variant="h6" style={{ flexGrow: 1 }}>Mattspresso</Typography>
              <Button variant="contained" color="secondary" style={rightAlignStyle} onClick={this.startMenuPage}>
                  Menu
              </Button>
              <Fab color="primary" aria-label="settings" style={rightAlignStyle} onClick={this.startSettingsPage}>
                <SettingsIcon />
              </Fab>
              <Button color="inherit" onClick={this.props.logout}>Logout</Button>
            </Toolbar>
          }
          {!this.props.user &&
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>Mattspresso</Typography>
              <Button color="inherit" onClick={this.props.login}>Login</Button>
            </Toolbar>
          }
        </AppBar>
        <div className="main-content">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/MainDashboard" component={MainDashboard} />
            </Switch>
          </HashRouter>
        </div>
        {this.props.promptNew &&
          <UserCreateDialog opened />
        }
        {this.props.promptLogin &&
          <UserSelectionDialog opened />
        }
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
