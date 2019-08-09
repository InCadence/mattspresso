import React from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export const ACTIONS = {
    FETCH_USER: 'FETCH_ACCOUNTS',
    FETCH_USER_SUCCESS: 'FETCH_ACCOUNTS_SUCCESS',

    FETCH_USERS: 'FETCH_USERS',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
    ERROR: 'ERROR'
}

class AdminDashboard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.countUsers();
        this.countProducts();
        this.countPurchases();
        this.countLocations();
    }

    countUsers = () => {
        const query = {"type":"User","pageSize":200,"pageNumber":1,"propertyNames":["CoalesceEntity.name"],"sortBy":[{"propertyName":"CoalesceEntity.LastModified","sortOrder":"ASC"}],"group":{"operator":"AND","criteria":[{"key":"4eba43dd-ec35-451b-a6a2-66eeebfdf13c","recordset":"CoalesceEntity","field":"name","operator":"EqualTo","value":"User","matchCase":false}],"groups":[]}}
    
        fetch(`cxf/data/search/complex/`, {
            method: "POST",
            headers: new Headers({
                'content-type': 'application/json; charset=utf-8'
            }),
            body: JSON.stringify(query)
        })
        .then(res => {
      
            if (!res.ok) {
                throw Error(res.statusText);
            }

            return res.json();
        })
        .then(blob => { 
            this.setState({...this.state,userTotal:blob.total});
         })
    }

    countProducts = () => {
        const query = {"type":"Product","pageSize":200,"pageNumber":1,"propertyNames":["CoalesceEntity.name"],"sortBy":[{"propertyName":"CoalesceEntity.LastModified","sortOrder":"ASC"}],"group":{"operator":"AND","criteria":[{"key":"b5bccafd-42cd-4ef3-938f-a23aa5866f34","recordset":"CoalesceEntity","field":"name","operator":"EqualTo","value":"Product","matchCase":false}],"groups":[]}}

        fetch(`cxf/data/search/complex/`, {
            method: "POST",
            headers: new Headers({
                'content-type': 'application/json; charset=utf-8'
            }),
            body: JSON.stringify(query)
        })
        .then(res => {
      
            if (!res.ok) {
                throw Error(res.statusText);
            }

            return res.json();
        })
        .then(blob => { 
            this.setState({...this.state,productTotal:blob.total});
         })
    }

    countPurchases = () => {
        const query = {"type":"Purchase","pageSize":200,"pageNumber":1,"propertyNames":["CoalesceEntity.name"],"sortBy":[{"propertyName":"CoalesceEntity.LastModified","sortOrder":"ASC"}],"group":{"operator":"AND","criteria":[{"key":"e5f9137b-455b-47e3-9ae8-96037c61a6e7","recordset":"CoalesceEntity","field":"name","operator":"EqualTo","value":"Purchase","matchCase":false}],"groups":[]}}
        fetch(`cxf/data/search/complex/`, {
            method: "POST",
            headers: new Headers({
                'content-type': 'application/json; charset=utf-8'
            }),
            body: JSON.stringify(query)
        })
        .then(res => {
      
            if (!res.ok) {
                throw Error(res.statusText);
            }

            return res.json();
        })
        .then(blob => { 
            this.setState(...this.state,{purchaseTotal:blob.total});
         })
    }

    countLocations = () => {
        const query = {"type":"User","pageSize":200,"pageNumber":1,"propertyNames":["CoalesceEntity.name"],"sortBy":[{"propertyName":"CoalesceEntity.LastModified","sortOrder":"ASC"}],"group":{"operator":"AND","criteria":[{"key":"4eba43dd-ec35-451b-a6a2-66eeebfdf13c","recordset":"CoalesceEntity","field":"name","operator":"EqualTo","value":"User","matchCase":false}],"groups":[]}}
    
        fetch(`cxf/data/search/complex/`, {
            method: "POST",
            headers: new Headers({
                'content-type': 'application/json; charset=utf-8'
            }),
            body: JSON.stringify(query)
        })
        .then(res => {
      
            if (!res.ok) {
                throw Error(res.statusText);
            }

            return res.json();
        })
        .then(blob => { 
            this.setState({...this.state,locationTotal:blob.total});
         })
    }

    render() {
        const userTotal = this.state.userTotal;
        const locationTotal = this.state.locationTotal;
        const purchaseTotal = this.state.purchaseTotal;
        const productTotal = this.state.productTotal;
        return (
            <div>
                <AppBar style={{ background: '#add8e6' }} position="static" color="default">
                        <Toolbar>
                            <Typography variant="display1" color="textPrimary">
                                Administrator Dashboard
                            </Typography>
                        </Toolbar>
                </AppBar>
                <br />
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <Paper>
                            <table width="100%" border='1' >
                                <thead>
                                    <tr><td>Users</td><td>Locations</td><td>Purchases</td><td>Products</td></tr>
                                </thead>
                                <tbody>
                                    <tr><td>{userTotal}</td><td>{locationTotal}</td><td>{purchaseTotal}</td><td>{productTotal}</td></tr>
                                </tbody>
                            </table>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>
                            <img alt="alt1" src="/images/mattspresso/models_drinking_coffee/clooney1.jpg" />
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.users.current
})

AdminDashboard.propTypes = {
    user: PropTypes.object
}

export default connect(mapStateToProps, {})(AdminDashboard);