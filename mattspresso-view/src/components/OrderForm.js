import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { connect } from 'react-redux';
import { makePurchase } from '../actions/purchaseActions';
import uuid from 'uuid';

import Paper from '@material-ui/core/Paper';

const imageStyle = {
		width:50,
		height:50
}

class OrderForm extends React.Component {
	
	constructor(props){
		super(props);
		this.state = { 
				products: [],
				purchase: {
					productId:uuid.v4(),
					quantity: 5
				}
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(name) {
		var {products} = this.state;
		var test = products
		test.push(name)
		console.log(test);
		console.log(products);
		this.setState({
			products: test
		});
	}
	
	makePurchase = () => {
		
		console.log("OrderPlaced");
		
		this.props.makePurchase(this.state.purchase);

		var emptyCart = [];
		this.setState({
			products: emptyCart
		});
	}
	
	render() {
		return (
	    <React.Fragment>
	      <Typography variant="display2" gutterBottom>
	        Order Form
	      </Typography>
	      <Grid container spacing={8}>
	        <Grid item xs={12} md={6}>
	          <TextField id="cardName" label={(this.props.user ? this.props.user.userRecord.fullName: "Not Logged In")} />
	        </Grid>
	       <Grid>
	        <GridList >
	         {imageList.map(images => (
	        	<GridListTile key={images.img}>
	        		<img src={images.img} alt="Espresso" style={imageStyle} />
	        		<GridListTileBar
	        		title={images.name}
	        		actionIcon={
	        		  <IconButton onClick={() => this.handleClick(images.name)}>
	        		  	<AddShoppingCartIcon />
	        		  </IconButton>
	        		}
	        		/>
	        	</GridListTile>
	         ))}
	        </GridList>	
	        
	        </Grid>
	      </Grid>
	      
	      <Grid>
	      <Typography variant="display3" gutterBottom>
	        Current Order
	      </Typography>
	        <Paper>
	      <List disablePadding>
		      {this.state.products.map(product => (
		        <ListItem key={product}>
		          <ListItemText primary={product} />
		        </ListItem>
		      ))}
	      <ListItem >
	        <ListItemText primary="Total" />
	        <Typography variant="subheading" >
	        	{this.state.products.length * .75}
	        </Typography>
	      </ListItem>
	    </List>
	      </Paper>
	      </Grid>
	      
	      <Grid>
	      	<Button onClick={this.makePurchase} variant="contained"  color="primary" >
	      {'Place order'}
	    </Button>
	      </Grid>
	  
	    </React.Fragment>
	  );
	 }	
 }
	
const mapStateToProps = state => ({
    user: state.users.current,
})

OrderForm.propTypes = {
		makePurchase: PropTypes.func.isRequired,
		user: PropTypes.object
}

const imageList = [
	{
		img: "/images/mattspresso/pods_png/ciocattino.png",
		name: 'ciocattion'			
	},
	{
		img: "/images/mattspresso/pods_png/arpeggio.png",
		name: 'arpreggio'
	},
	{
		img: "/images/mattspresso/pods_png/capriccio.png",
		name: 'capriccio'
	},
	{
		img: "/images/mattspresso/pods_png/cosi.png",
		name: 'cosi'
	},
	{
		img: "/images/mattspresso/pods_png/fortissio.png",
		name: 'fortissio'
	},
	
];

export default connect(mapStateToProps, {makePurchase} )(OrderForm);