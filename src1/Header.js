import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DataItems from './DataItems';
import {Provider} from 'react-redux';
import {store} from './store';
import { Divider, ExpansionPanel, Button, Badge, InputBase, Typography, IconButton, AppBar, Toolbar, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary, TextField} from '@material-ui/core/';
import { ExpandMore, Notifications, Dehaze, Delete, Search, AccountCircle, Notes, Archive, Edit} from '@material-ui/icons';

var arrayObj=[];
var data=function(title,note){
  this.title=title;
  this.note=note;
};



function Elmt(e){
  var data1=new data(e.target.title, e.target.note);
  arrayObj.push(data1);
  console.log(arrayObj);
}
















    

function cancelText(){
  document.getElementById('title').value="";
  document.getElementById('note').value="";
}













var a=false;
function toggle(){
  if(a){document.getElementById("side").style.visibility= "visible";a=false;}
  else{document.getElementById("side").style.visibility= "hidden";a=true;}
}

function Header(){
    const useStyles = makeStyles(theme => ({
        grow: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: '#f1f1f1',
          marginRight: theme.spacing(2),
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(15),
            width: 'auto',
          },
        },
        searchIcon: {
          width: theme.spacing(7),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputRoot: {
          color: 'inherit',
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 7),
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: 200,
          },
        },
        sectionDesktop: {
          display: 'none',
          [theme.breakpoints.up('md')]: {
            display: 'flex',
          },
        },
        outer:{
            display: 'grid',
            'grid-template-rows': '25% 75%',
        },
        sideMenu:{
            width: '20%', 
            height: '100%',
            backgroundColor: '#ffffff',
            marginTop: '10px',
            display: 'grid',
        },
        mainctn:{
            marginLeft: '20%',
            width: '75%',
            backgroundColor: '#ffffff',
            marginTop: '10px',
        },
        btn:{
            marginLeft: '20px',
            height: '25px',
            padding: '10px',
            textAlign: 'left',
            borderRadius: "0px 20px 20px 0px",
            '&:hover':{
                backgroundColor: '#ffed61',
            },
        },
        inrtxt:{
            marginLeft: '40px',
        },
        root: {
            marginLeft: '100px',
            width: '65%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
        },
        secondaryHeading: {
            color: theme.palette.text.secondary,
        },
        icon: {
            verticalAlign: 'bottom',
            height: 20,
            width: 20,
        },
        details: {
            alignItems: 'center',
        },
        column: {
            flexBasis: '33.33%',
        },
        helper: {
            borderLeft: `2px solid ${theme.palette.divider}`,
            padding: theme.spacing(1, 2),
        },
        link: {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
           },
           TextField:{
               width: 75,
           },
        },
      }));
    const classes = useStyles();
  return (
      <Provider store={store}>
      <AppBar color={'default'} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={toggle} color="inherit"><Dehaze /></IconButton>
          <Typography variant="h6" noWrap>Keep</Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput,}} inputProps={{ 'aria-label': 'search' }} />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="" color="inherit"><Badge color="secondary"><Notifications /></Badge></IconButton>
            <IconButton edge="end" aria-label="account of current user" color="inherit"><AccountCircle /></IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div>
      <div className={classes.outer}>
        <div id="side" className={classes.sideMenu}>
          <div className={classes.btn}><Notes /><label className={classes.inrtxt}>Notes</label></div><br />
          <div className={classes.btn}><Notifications /><label className={classes.inrtxt}>Reminders</label></div><br />
          <Divider />
          <h5>Labels</h5>
          <div className={classes.btn}><Edit /><label className={classes.inrtxt}>Edit</label></div><br />
          <Divider />
          <div className={classes.btn}><Archive /><label className={classes.inrtxt}>Archive</label></div><br />
          <div className={classes.btn}><Delete /><label className={classes.inrtxt}>Trash</label></div>
        </div>
          <div className={classes.mainctn}>
            <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel1c-content" id="panel1c-header">
          <div className={classes.column}>
            <Typography className={classes.heading}>
                <TextField type="text" id="title" placeholder="Enter Title"/>
            </Typography>
          </div>
                </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
<textarea rows={4} cols={50} id="note" placeholder="Enter your Note"></textarea><br />
          <div className={classes.column} />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" onClick={cancelText}>Cancel</Button>
          <Button size="small" color="primary" onClick={Elmt} >Save</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
   </div>
  </div>
  <div id="handle">
    {
      /**
       * //onSubmit={e => {
          //e.preventDefault()
          //if (!input.value.trim()) {
          //  return
          //}
          //dispatch(addComponent(input.value))
          //input.value = ''
       */
      //arrayObj.map((obj)=><DataItems title={obj.title} note={obj.note} />).bind(this)
    }
    <DataItems title="Hello" note="world" />
  </div>
 </div>
</Provider>
)}
export default connect()(Header);