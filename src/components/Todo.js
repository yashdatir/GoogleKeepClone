import React,{useState,} from 'react';
import PropTypes from 'prop-types';
import DataItems from './DataItems';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {Button} from '@material-ui/core';
import { Delete } from '@material-ui/icons/';
import Modal from 'react-bootstrap/Modal';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
function Todo ({ dispatch, onClick, completed, text, note }){
  let input1,textarea1;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
  <div className="previewComponent">
    <Modal show={show} onHide={handleClose} size="sm" aria-labelledby="example-modal-sizes-title-lg">
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">Edit</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form onSubmit={e=>{
        e.preventDefault()
        if(!input1.value.trim() && !textarea1.value.trim()) {alert('Please write some note to edit...'); return}
        text=input1.value
        note=textarea1.value
        dispatch(addTodo(input1.value,textarea1.value))
        input1.value = ''; textarea1.value=''
        onClick();
      }}>
        <table>
          <thead><tr><td>Title:</td><td><input ref={node => input1 = node} defaultValue={text} /></td></tr></thead>
          <tbody><tr><td>Note:</td><td><textarea ref={node => textarea1 = node} defaultValue={note} ></textarea></td></tr></tbody>
          <tfoot><tr><td><Button color="primary" type="submit">Update</Button></td><td><Button color="secondary" type="reset">Reset</Button></td></tr></tfoot>
        </table>
      </form>
    </Modal.Body>
  </Modal>
    <Card style={{marginLeft: '20px', width:'25%',}}>
    <DataItems />
    <CardActionArea onClick={handleShow}>
    <CardContent>
    <Typography gutterBottom variant="h5" component="h2">{text}</Typography>
    <Typography variant="body2" color="textSecondary" component="p">{note}</Typography>
    </CardContent>
    <Delete style={{alignSelf:'right'}} onClick={onClick} />
    </CardActionArea>
    </Card>
  </div>
)
}
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default connect()(Todo)