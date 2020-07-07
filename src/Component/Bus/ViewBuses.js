import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ResponsiveDrawer from './../sidebar/siebardup';
import SimpleTable from './../Layouts/SimpleTable'

import { Link } from "react-router-dom";



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
  createData('1', 455 , 6.0, 24, 4.0),
  createData('2', 237, 9.0, 37, 4.3),
  createData('3', 262, 16.0, 24, 6.0),
  createData('4', 305, 3.7, 67, 4.3),
  createData('5', 356, 16.0, 49, 3.9),
];


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1000,
  },

  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'top',
    // justifyContent: 'center',
    width: '99vw',
    height: '125vh',
    spacing: 0,
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    border: '1px solid',
    lineHeight: 1.5,
    borderColor: '#0063cc',
    paddingTop:'5%'
    // This determines distance from top

  },
  paper: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    opacity: 0.5
  },
  welcome: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: '1.8rem',
    marginTop: 10,
    marginBottom: 10

  },


  card: {
    maxWidth: '180px',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  avatar: {
    backgroundColor: 'black',
  },
  form: {
    marginTop: 10,
    paddingTop: '1%'
  }
}));

export default function ViewBuses() {
  const classes = useStyles();
  

  return (
    <Grid container className={classes.root}>
      <ResponsiveDrawer />
      <Grid item xs={12} sm={10} >




        <form className={classes.form}>


          <Typography component="h2" variant="" className={classes.welcome}>
            Conductors
            </Typography>

               <Button variant="contained" color="primary" href="/busRegister">
                  Add New Bus
              </Button>
            
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Id</StyledTableCell>
                  <StyledTableCell align="right">Bus No</StyledTableCell>
                  <StyledTableCell align="right">Bus Route</StyledTableCell>
                  <StyledTableCell align="right">BusCapacity</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map((row) => ( */}
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell align="right">GL1245</StyledTableCell>
                    <StyledTableCell align="right">138 Kottawa Pitakotuwa</StyledTableCell>
                    <StyledTableCell align="right">45</StyledTableCell>
                    <StyledTableCell align="right"><Link to={'/viewsingleconductor'}>
          <button>View</button>
        </Link></StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell align="right">GL5211</StyledTableCell>
                    <StyledTableCell align="right">138 Kottawa-Maharagama</StyledTableCell>
                    <StyledTableCell align="right">45</StyledTableCell>
                    <StyledTableCell align="right"><Link to={'/viewsingleconductor'}>
          <button>View</button>
        </Link></StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      3
                    </StyledTableCell>
                    <StyledTableCell align="right">KA5417</StyledTableCell>
                    <StyledTableCell align="right">154 Kiribathgoda - Angulana</StyledTableCell>
                    <StyledTableCell align="right">40</StyledTableCell>
                    <StyledTableCell align="right"><Link to={'/viewsingleconductor'}>
          <button>View</button>
        </Link></StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      4
                    </StyledTableCell>
                    <StyledTableCell align="right">GL2132</StyledTableCell>
                    <StyledTableCell align="right">113 Fort - Nugegoda</StyledTableCell>
                    <StyledTableCell align="right">50</StyledTableCell>
                    <StyledTableCell align="right"><Link to={'/viewsingleconductor'}>
          <button>View</button>
        </Link></StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      5
                    </StyledTableCell>
                    <StyledTableCell align="right">NB 4512</StyledTableCell>
                    <StyledTableCell align="right">113 Fort - Nugegoda</StyledTableCell>
                    <StyledTableCell align="right">50</StyledTableCell>
                    <StyledTableCell align="right"><Link to={'/viewsingleconductor'}>
          <button>View</button>
        </Link></StyledTableCell>
                  </StyledTableRow>
                {/* // ))} */}
              </TableBody>
            </Table>
          </TableContainer>
          <div>

          </div>
          <br></br>
        </form>

      </Grid>
    </Grid>
  );
}