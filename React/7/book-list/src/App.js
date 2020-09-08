import React, { Component } from 'react';

import instance from './axios-books';

import Books from './Books/Books';
import bookActions from './actions/bookActions';


class  App extends Component {


  componentDidMount(){
    instance.get("/books.json").then(res=>{
        bookActions.loadData(res.data)
    })
}



  render(){

    return <Books/>

  }

}

export default App;
