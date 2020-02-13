import React from 'react';
import { Photo, Palette } from '@material-ui/icons';
import { CirclePicker } from 'react-color';
class DataItems extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: '',
          displayColorPicker: false,
          background: '#fff'
        };
      }
      handleChangeComplete=(color)=>{
        this.setState({background: color.hex})
      }
      handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
    
      handleClose = () => {
        this.setState({ displayColorPicker: false })
      };
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
      render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img height="200" alt="" src={imagePreviewUrl}/>);
        } else {
          $imagePreview = (<></>);
        }
        const popover = {
          position: 'absolute',
          zIndex: '2',
        }
        const cover = {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        }
        return (
            <div className="previewComponent" style={{backgroundColor: this.state.background}}>
            <form onSubmit={(e)=>this._handleSubmit(e)}> 
              {$imagePreview}
            <input style={{display:'none'}} id="pic" type="file" onChange={(e)=>this._handleImageChange(e)} />
            <label htmlFor="pic"><Photo /></label>
            <Palette onClick={ this.handleClick } />
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <CirclePicker color={this.state.background} onChangeComplete={this.handleChangeComplete} />
        </div> : null }
            </form>
            </div>
        )
      }
    }
    export default DataItems