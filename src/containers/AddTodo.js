import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { ExpandMore } from '@material-ui/icons'
import { ExpansionPanel, Divider, ExpansionPanelActions, Typography, ExpansionPanelSummary, ExpansionPanelDetails, Button} from '@material-ui/core/';
const AddTodo = ({ dispatch }) => {
 let input,textarea
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if(!input.value.trim() && !textarea.value.trim()) {return}
        dispatch(addTodo(input.value,textarea.value))
        input.value = ''
        textarea.value=''
      }}>
        <ExpansionPanel style={{width:'40%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel1c-content" id="panel1c-header">
          <div style={{flexBasis: '33.33%'}}>
            <Typography>
              <input ref={node => input = node} style={{border: 'none'}} type="text" id="title" placeholder="Enter Title"/>
            </Typography>
          </div>
          </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{alignItems: 'center'}}>
          <textarea ref={node=>textarea=node} rows={4} cols={50} id="note" placeholder="Enter your Note"></textarea><br />
          <div style={{flexBasis: '33.33%'}} />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small"  type="reset">Cancel</Button>
          <Button type="submit" size="small" color="primary" >Save</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
      </form>
    </div>
  )
}
export default connect()(AddTodo)