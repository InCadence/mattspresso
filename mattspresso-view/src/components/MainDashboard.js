import React from "react";
import Paper from '@material-ui/core/Paper'
import _ from "lodash";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import Icon from '@material-ui/core/Icon';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LinearProgress from '@material-ui/core/LinearProgress';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';

var rightAlignStyle = {
  marginLeft: "auto",
  marginRight: -12
}
var imageStyle = {
  width:500,
  height:500
}

var favImageStyle = {
  width:50,
  height:50
}

const jbImage = "/images/mattspresso/models_drinking_coffee/jackblack2.png"

class MainDashboard extends React.Component {
  componentDidMount() {}
  generateFavorites(){
    return(
      <div>
        <Typography variant="body1" style={rightAlignStyle} gutterBottom>
        Quick Order
        </Typography>
        <GridList>
          <GridListTile >

          </GridListTile>

        </GridList>

      </div>
    )
  }

  startSettingsPage(){
    console.log("Starting Settings page.")
  }

  startMenuPage(){
    console.log("Starting Menu page.")
  }



  render(){
      return(
        <div>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" component="h2" gutterBottom>
          Hello, User
          </Typography>
          <Button variant="contained" color="secondary" style={rightAlignStyle} onClick={this.startMenuPage}>
          Menu
          </Button>
          <Fab color="primary" aria-label="settings" style={rightAlignStyle} onClick={this.startSettingsPage}>
          <SettingsIcon />
          </Fab>
        </Toolbar>
          </AppBar>
        <Grid>
          <Grid item xs={6}>
            <Typography variant="body1" style={rightAlignStyle} gutterBottom>
              Achievements Progress
            </Typography>
            <LinearProgress color="secondary" variant="determinate" value={25} />
            <Typography variant="subtitle1" gutterBottom>
            Reward Points: 123456
            </Typography>

          </Grid>
          <Grid item xs={6} style={rightAlignStyle}>
            <img src={jbImage} style={imageStyle}/>
          </Grid>
          <Grid item xs={6} >
              {this.generateFavorites()}
          </Grid>
        </Grid>

      </div>
    )
    }
  }

  export default MainDashboard;
