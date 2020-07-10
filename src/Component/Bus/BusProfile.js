import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Buses from "./../images/Buses.jpg";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import FormDialog from './../Layouts/DialogForm';

const useStyles = makeStyles((theme) =>({
    appBar: {
        backgroundColor: "#aa00ff"
    }, 
    // body:{
    //     backgroundColor: '#d7a8df',
    //     paddingBottom: theme.spacing(10)
    // },
    buses: {
        backgroundImage: 'https://unsplash.com/photos/y2b2nPmy_LY',
        height: "100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
        // color: "#fff",
        fontSize: "4rem",
    },
    exampleContainer: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10)
    },
    dashBody: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%",
        
    },
    media: {
        height: 240,
        component:"img",
        alt:"eBus image"
    },
    button:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 8,
        border: 0,
        color: 'black',
        height: 48,
        width: "50%",
        padding: '20px 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        alignItems: 'center',
        fontSize: '20px'
    },
    reportButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'black',
        height: 48,
        width: "100%",
        padding: '20px 30px',
        fontSize: '20px'
    }

}));

export default function BusProfile() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className={classes.body}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h4" className={classes.title}>
                    eBus | Dashboard
                </Typography>     
                </Toolbar>
            </AppBar>
            <Box className={classes.buses}>
                {/* <Box>
                    <Typography variant="h6" className={classes.dashBody}>
                        Add image if Wanted 
                    </Typography> 
                </Box> */}
            </Box>
            <Container maxWidth="lg" className={classes.exampleContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={Buses}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Bus Details
                                </Typography>
                                    <TextField
                                            id="outlined-read-only-input"
                                            label="Weekly income"
                                            defaultValue="Rs 10,000"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            variant="outlined"
                                            />
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Weekly income"
                                        defaultValue="Rs 10,000"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                        />
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Weekly income"
                                        defaultValue="Rs 10,000"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                        />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <div>
                                    <Button className={clsx(classes.button)} variant="outlined" 
                                        onClick={handleClickOpen}>
                                        Update Details
                                    </Button>
                                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                      <DialogTitle id="form-dialog-title">Update Bus Details</DialogTitle>
                                      <DialogContent>
                                        <DialogContentText>
                                            
                                        </DialogContentText>
                                        <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="username"
                                                    label="user Name"
                                                    name="username"
                                                    autoComplete="User Name"
                                                    autoFocus
                                                />

                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="address"
                                                    label="Address"
                                                    name="address"
                                                    autoComplete="address"
                                                    
                                                />
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Cancel
                                        </Button>
                                        <Button onClick={handleClose} color="primary">
                                            Subscribe
                                        </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                                <Button className={clsx(classes.button)} 
                    
                                    variant="contained" href="/viewBuses">
                                    {'Delete Details'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Weekly Income
                                </Typography>
                                <CardContent>

                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Weekly income"
                                        defaultValue="Rs 10,000"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                        />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                
                                <Button className={clsx(classes.reportButton)} 
                                    
                                    variant="contained" href="/generateReport">
                                    {'Report Generation'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    


                </Grid>
            </Container>

        </div>

    )
}


