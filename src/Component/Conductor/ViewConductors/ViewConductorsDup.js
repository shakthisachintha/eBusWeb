import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PermanentDrawerLeft from './../../sidebar/sidebar';
import MaterialTable from 'material-table';



const useStyles = makeStyles((theme) => ({

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


}));

export default function ViewConductorDup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
        ],
        data: [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34,
            },
        ],
    });

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

                    

                        <Typography component="h2" variant="" className={classes.welcome}>
                            View Conductors
                        </Typography>




                        <div>
                            <MaterialTable
                                title="Editable Example"
                                columns={state.columns}
                                data={state.data}
                                editable={{
                                    onRowAdd: (newData) =>
                                        new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                                setState((prevState) => {
                                                    const data = [...prevState.data];
                                                    data.push(newData);
                                                    return { ...prevState, data };
                                                });
                                            }, 600);
                                        }),
                                    onRowUpdate: (newData, oldData) =>
                                        new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                                if (oldData) {
                                                    setState((prevState) => {
                                                        const data = [...prevState.data];
                                                        data[data.indexOf(oldData)] = newData;
                                                        return { ...prevState, data };
                                                    });
                                                }
                                            }, 600);
                                        }),
                                    onRowDelete: (oldData) =>
                                        new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                                setState((prevState) => {
                                                    const data = [...prevState.data];
                                                    data.splice(data.indexOf(oldData), 1);
                                                    return { ...prevState, data };
                                                });
                                            }, 600);
                                        }),
                                }}
                            />
                        </div>
                        <br></br>
                    
                </Paper>
            </Grid>
        </Grid>
    );
}