import React from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchUserSaga, fetchUsers, createAccount } from '../../actions/userActions';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';

class UserSelectionDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {submitted: false};
    }

    componentDidMount() {
        this.props.fetchUsers(this.props.userkey);
    }

    handleNewUserSelection = () => {
        this.setState({submitted: true});
        this.props.createAccount();
    }

    handleUserSelection = (key) => {
        this.setState({submitted: true});
        this.props.fetchUserSaga(key);
    }

    render() {

        var users = [];

        if (this.props.users) {
            users = this.props.users.map((item) => {
                return (
                    <ListItem
                        button
                        key={item.key}
                        onClick={() => this.handleUserSelection(item.key)}
                    >
                        <ListItemText primary={item.name} />
                    </ListItem>
                )
            });
        }

        console.log(users);

        return (
            <Dialog
                open={this.props.opened}
                onClose={this.props.onClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                PaperProps={{ style: { width: '100%' } }}
                maxWidth={this.props.maxWidth}
            >
                <DialogTitle id="scroll-dialog-title">Select User</DialogTitle>
                <DialogContent>
                    {this.state.submitted && 
                        <center>
                            <CircularProgress/>
                        </center>
                    }
                    {!this.state.submitted &&
                        <List dense>
                            <ListItem button key="new" onClick={this.handleNewUserSelection}>
                                <ListItemText primary="New User" />
                            </ListItem>
                            {users}
                        </List>
                    }
                </DialogContent>
            </Dialog>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.list
})

UserSelectionDialog.propTypes = {
    fetchUserSaga: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired,
    opened: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchUsers, fetchUserSaga, createAccount })(UserSelectionDialog);