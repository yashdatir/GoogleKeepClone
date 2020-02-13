import React from 'react';
import { connect } from 'react-redux';
//import {Del} from '../actions';
import { Delete, Edit, Photo } from '@material-ui/icons/';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
class DataItems extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: ''
        };
      }
      handleDelete(){
      }
      _handleEdit(){
      }
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
      }
      _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file)
      }
      render() {
        //console.log(this.props.store);
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img height="200" alt="" src={imagePreviewUrl}/>);
        } else {
          $imagePreview = (<></>);
        }
        return (
            <div className="previewComponent">
            <form onSubmit={(e)=>this._handleSubmit(e)}> 
            <Card style={{marginLeft: '20px', width:'25%',}}>
            <CardActionArea>
              {$imagePreview}
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{this.props.title}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{this.props.note}</Typography>
            <Edit /><Delete onClick={this.handleDelete} />
            <input style={{display:'none'}} id="pic" type="file" onChange={(e)=>this._handleImageChange(e)} />
            <label htmlFor="pic"><Photo /></label>
            </CardContent>
            </CardActionArea>
            </Card>
            </form>
            </div>
        )
      }
    }
    export default connect()(DataItems)