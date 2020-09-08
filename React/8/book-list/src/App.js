import React, { Component } from 'react';

import instance from './axios-books';

import Books from './Books/Books';
import {connect} from'react-redux'


class  App extends Component {


  componentDidMount(){
    instance.get("/books.json").then(res=>res.data).then(data=>Object.keys(data).map(key=>{
      data[key]['key']=key;
      return data[key];
    })).then(data=>{this.props.onLoadData(data)})
}



  render(){

    return <Books/>

  }

}

const mapDispatchtoProps= dispatch=>{
  return {
    onLoadData:(books)=>dispatch({type:'LOAD_DATA',payload:books})
  }
}


export default connect(null,mapDispatchtoProps)(App);
