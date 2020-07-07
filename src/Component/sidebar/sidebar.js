import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CommuteIcon from '@material-ui/icons/Commute';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import G3 from  "../images/G3.png";
const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    backgroundColor: '#a503fc',
    alignItems: 'center',
    justifyContent: 'center',
    width: '0vw',
    height: '100vh',
    spacing: 0,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'white',
    padding: 'fixed'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  card:{
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginTop: 20,
  }
  
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        
      </AppBar>
      
      <Drawer
      
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="eBus image"
                  height="130"
                  image={G3}
                  title="eBus image"
                />
        </Card>
        <div className={classes.toolbar} />
        
        <List>
          {['Test', 'Test', 'Test', 'Test'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <AccountCircleIcon /> : <CommuteIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Test ', 'Test', 'Test'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </div>
  );
}
