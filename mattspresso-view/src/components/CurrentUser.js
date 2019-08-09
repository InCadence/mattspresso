import React from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

class CurrentUser extends React.PureComponent {

    componentWillMount() {
        this.props.fetchUser(this.props.userkey);
    }

    render() {
        console.log(this.props.user ? this.props.user.userRecord.fullName : '');
        
        return (
            <div>
                {this.props.user ? this.props.user.userRecord.fullName : ''}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.users.current
})

CurrentUser.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    user: PropTypes.object
}

export default connect(mapStateToProps, {fetchUser})(CurrentUser);