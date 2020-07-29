import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from './../sidebar/siebardup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Paper from  '@material-ui/core/Paper';
import  {KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        backgroundColor: '#ede7f6',
        width: '100vw',
        height: '100vh',

    },

    feild:{
        width:'80%',
        //marginLeft:'50px',
        //marginLeft:'50px',
    },
    button:{
        backgroundColor: '#aa00ff',
        borderRadius: 6,
        border: 0,
        color: 'white',
        height: 40,
        width: "30%",
        padding: '10px 30px',
        marginBottom:'10px',
        marginTop:'20px'
    },
    content:{
        alignItems:'center',
        justifyContent:'center',
    }
}));

export default function DatePic(){
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-07-12T21:11:54'));

    return(
        <Grid className={classes.root}>
        <ResponsiveDrawer/>
        <Grid item xs={12} sm={12} className={classes.content}>
        <Paper  style={{
               textAlign:'center',
               padding: '20px 20px',
               marginTop: '7%',
               marginLeft:'30%',
               marginRight:'30%',
               borderRadius:10,
               width:'50%',
            
        }}>
          
        <form >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid>
        <KeyboardDatePicker className ={classes.feild}
          margin="normal"
          id="date-picker-dialog"
          label="Enter Start Date"
          format="MM/dd/yyyy"
          value={selectedDate}
        //   onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> 
        </Grid>
        <Grid>
        <KeyboardDatePicker className ={classes.feild}
          margin="normal"
          id="date-picker-dialog"
          label="Enter End Date"
          format="MM/dd/yyyy"
          value={selectedDate}
        //   onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />  
        </Grid> 
       </MuiPickersUtilsProvider>
         <Button className={clsx(classes.button)} 
                type="submit"
                variant="contained"
                >
                 {'Report Generate'}
        </Button>                
                       
        </form>

     </Paper>
     </Grid>
      </Grid>
    );
}