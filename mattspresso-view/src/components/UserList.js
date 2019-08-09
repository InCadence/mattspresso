import React from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class UserList extends React.PureComponent {

    componentWillMount() {
        this.props.fetchUsers(this.props.userkey);
    }

    render() {
        return (
            <div>
                {this.props.users ? this.props.users.map(user => user.name) : ''}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.list
})

UserList.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    user: PropTypes.object
}

export default connect(mapStateToProps, {fetchUsers})(UserList);