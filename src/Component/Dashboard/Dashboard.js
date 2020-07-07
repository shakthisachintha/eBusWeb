import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ResponsiveDrawer from './../../Component/sidebar/siebardup';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  export default function AutoGrid() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
          <Grid container spacing={3}>
              <ResponsiveDrawer/>
              <Grid item xs>
                <Paper className={classes.paper} 
                    style={{padding:'20px 50px', margin: 50, textAlign: 'center',}} 
                    >xs</Paper>
              
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper} 
                    style={{padding:'20px 50px', margin: 50, textAlign: 'center',}} 
                    >xs</Paper>
              
              </Grid>
            <Grid item xs>
              <Paper className={classes.paper} 
                  style={{padding:'20px 50px', margin: 50, textAlign: 'center',}} 
                  >xs</Paper>
            
            </Grid>
          </Grid>
      </div>
    );
  }
