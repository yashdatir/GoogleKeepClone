import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import { Edit, Photo } from '@material-ui/icons/';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
   export default class DataItems extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: ''
        };
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
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img height="200" alt="" src={imagePreviewUrl}/>);
        } else {
          $imagePreview = (<></>);
        }
        return (
          <Provider store={store}>
            <div className="previewComponent">
            <form onSubmit={(e)=>this._handleSubmit(e)}> 
            <Card style={{marginLeft: '20px', width:'25%',}}>
            <CardActionArea>
            {$imagePreview}
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{this.props.title}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {this.props.note}
            </Typography>
            <Edit />
            <input style={{display:'none'}} id="pic" type="file" onChange={(e)=>this._handleImageChange(e)} />
            <label htmlFor="pic"><Photo /></label>
            </CardContent>
            </CardActionArea>
            </Card>
            </form>
            </div>
            </Provider>
        )
      }
    }