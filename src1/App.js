import React from 'react';
import Header from './Header';
import {Provider} from 'react-redux';
import {store} from './store';
export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      title:"Welcome",
      msg:"Some Message Here",
    }
  }
render(){
  return (
    <Provider store={store}>
      <Header state={this.state} />
    </Provider>
  );
}
}