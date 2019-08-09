import React from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchUser, fetchUsers, createAccount } from '../../actions/userActions';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class UserSelectionDialog extends React.PureComponent {

    componentDidMount() {
        this.props.fetchUsers(this.props.userkey);
    }

    render() {

        var users = [];

        if (this.props.users) {
            users = this.props.users.map((item) => {
                return (
                    <ListItem
                        button
                        key={item.key}
                        onClick={() => this.props.fetchUser(item.key)}
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
                    <List dense>
                        <ListItem
                            button
                            key="new"
                            onClick={this.props.createAccount}
                        >
                            <ListItemText primary="New User" />
                        </ListItem>
                        {users}
                    </List>
                </DialogContent>
            </Dialog>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.list
})

UserSelectionDialog.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired,
    opened: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { fetchUsers, fetchUser, createAccount })(UserSelectionDialog);