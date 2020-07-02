import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PermanentDrawerLeft from './../../sidebar/sidebar';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];





const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },

  root: {
    flexGrow: 1,
    backgroundColor: '#a503fc',
    //alignItems: 'center',
    justifyContent: 'center',
    width: '99vw',
    height: '125vh',
    spacing: 0,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    border: '1px solid',
    lineHeight: 1.5,
    borderColor: '#0063cc',


  },
  paper: {
    
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  welcome: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: '1.8rem'

  },
  ebus: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: 'white',
    fontSize: '2.5rem'
  },

  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 8,
    border: 0,
    color: 'black',
    height: 48,
    width: "30%",
    padding: '20px 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    justifyContent: 'center'
  },
  image: {
    height: '100px',
    width: '150px',
    paddingTop: '10%'

  },
  card: {
    maxWidth: '180px',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  avatar: {
    backgroundColor: 'black',
  },
}));

export default function ViewConductor() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <PermanentDrawerLeft />
      <Grid item xs={12} sm={6} >


        <Paper style={
          {
            padding: '10px 10px',
            margin: 10,
            textAlign: 'center',
          }}>

          <form>

            <Typography component="h2" variant="" className={classes.welcome}>
              Conductor Registration
            </Typography>


            



            <div>

            </div>
            <br></br>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}