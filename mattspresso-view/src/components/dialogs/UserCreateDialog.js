import React from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { createUser } from '../../actions/userActions';
import FieldInput from '../FieldInput';
import CircularProgress from '@material-ui/core/CircularProgress';

class UserCreateDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            user: {
                fullName: "",
                userType: "CUSTOMER",
                email: "",
                mobilePhone: "",
                deliveryAddress: ""
            }
        }
    }

    createUser = () => {
        console.log(this.state.user);
        
        this.setState({submitted: true});
        this.props.createUser(this.state.user);
    }

    render() {
        return (
            <Dialog
                open={this.props.opened}
                onClose={this.props.onClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                PaperProps={{ style: { width: '100%' } }}
                maxWidth={this.props.maxWidth}
            >
                <DialogTitle id="scroll-dialog-title">New User Form</DialogTitle>
                <DialogContent>
                    {this.state.submitted && 
                        <center>
                            <CircularProgress/>
                        </center>
                    }                    
                    {!this.state.submitted &&
                        <div>
                        <FieldInput
                            autoFocus
                            showLabels={true}
                            placeholder="Name"
                            field={this.state.user}
                            attr="fullName"
                            dataType="STRING_TYPE"
                            onChange={this.handleSimpleChange}
                            variant="outlined"
                            disableUnderline={false}
                        />
                        <FieldInput
                            autoFocus
                            showLabels={true}
                            placeholder="Type"
                            field={this.state.user}
                            attr="userType"
                            dataType="ENUMERATION_TYPE"
                            onChange={this.handleSimpleChange}
                            variant="outlined"
                            disableUnderline={false}
                            options={[
                                {
                                    enum: "CUSTOMER",
                                    label: "Customer"
                                },
                                {
                                    enum: "ADMIN",
                                    label: "Admin"
                                }
                            ]}
                        />
                        <FieldInput
                            autoFocus
                            showLabels={true}
                            placeholder="Email"
                            field={this.state.user}
                            attr="email"
                            dataType="STRING_TYPE"
                            onChange={this.handleSimpleChange}
                            variant="outlined"
                            disableUnderline={false}
                        />
                        <FieldInput
                            autoFocus
                            showLabels={true}
                            placeholder="Phone"
                            field={this.state.user}
                            attr="mobilePhone"
                            dataType="STRING_TYPE"
                            onChange={this.handleSimpleChange}
                            variant="outlined"
                            disableUnderline={false}
                        />
                        <FieldInput
                            autoFocus
                            showLabels={true}
                            placeholder="Address"
                            field={this.state.user}
                            attr="deliveryAddress"
                            dataType="STRING_TYPE"
                            onChange={this.handleSimpleChange}
                            variant="outlined"
                            disableUnderline={false}
                        />
                        </div>
                    }
                </DialogContent>
                <DialogActions>
                    <Button
                        label="Close"
                        color='primary'
                        onClick={this.createUser}>Submit</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

UserCreateDialog.propTypes = {
    createUser: PropTypes.func.isRequired,
    opened: PropTypes.bool.isRequired
}

export default connect(null, { createUser })(UserCreateDialog);