import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import { Badge, Divider, InputBase, Typography, IconButton, AppBar, Toolbar} from '@material-ui/core/';
import { Edit, Archive, Delete, Notes, Notifications, Dehaze, Search, AccountCircle } from '@material-ui/icons';
import VisibleTodoList from '../containers/VisibleTodoList';
let a=true;
function toggle(){
if(a) {a=false; document.getElementById('sidebar').style.visibility="hidden"}
else {a=true; document.getElementById('sidebar').style.visibility="visible"}
}
const App = () => (
  <div>
      <AppBar color={'default'} position="static">
        <Toolbar>
          <IconButton style={{marginRight: '2px'}} edge="start" color="inherit" onClick={toggle}><Dehaze /></IconButton>
          <Typography variant="h6" noWrap>Keep</Typography>
            <div style={{position: 'relative', borderRadius: '10px', backgroundColor: '#f1f1f1', marginRight: '10px', marginLeft: '10px', width: '50%'}}>
            <div style={{width: '14px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px'}}>
              <Search />
            </div>
            <InputBase style={{marginLeft:'30px'}} placeholder="Search…" />
          </div>
          <div style={{marginLeft:'350px'}}>
            <IconButton aria-label="" color="inherit"><Badge color="secondary"><Notifications /></Badge></IconButton>
            <IconButton edge="end" aria-label="account of current user" color="inherit"><AccountCircle /></IconButton>
          </div>
        </Toolbar>
        </AppBar>
      <div style={{display: 'grid','gridTemplateRows': '15% 60%',}}>
        <div id="sidebar" style={{width: '20%', height: '100%', backgroundColor: '#ffffff', marginTop: '10px', display: 'grid',}}>
          <div style={{marginLeft: '20px', height: '25px', padding: '10px', textAlign: 'left', borderRadius: "0px 20px 20px 0px",}}>
              <Notes />
              <label style={{marginLeft: '40px',}}>Notes</label></div><br />
          <div style={{marginLeft: '20px', height: '25px', padding: '10px', textAlign: 'left', borderRadius: "0px 20px 20px 0px",}}>
              <Notifications /><label style={{marginLeft: '40px',}}>Reminders</label></div><br />
          <Divider />
          <h5>Labels</h5>
          <div style={{marginLeft: '20px', height: '25px', padding: '10px', textAlign: 'left', borderRadius: "0px 20px 20px 0px",}}>
              <Edit /><label style={{marginLeft: '40px',}}>Edit</label></div><br />
          <Divider />
          <div style={{marginLeft: '20px', height: '25px', padding: '10px', textAlign: 'left', borderRadius: "0px 20px 20px 0px",}}>
              <Archive /><label style={{marginLeft: '40px',}}>Archive</label></div><br />
          <div style={{marginLeft: '20px', height: '25px', padding: '10px', textAlign: 'left', borderRadius: "0px 20px 20px 0px",}}><Delete /><label style={{marginLeft: '40px',}}>Trash</label></div>
        </div>
        <div style={{width: '70%', height: '100%', backgroundColor: '#ffffff', marginTop: '10px', marginLeft:'25%', display: 'grid',}}>
          <AddTodo />
        </div>
    <VisibleTodoList />
    <Footer />
  </div>
  </div>
)
export default App