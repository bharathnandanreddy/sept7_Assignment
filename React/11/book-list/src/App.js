import React, { Component } from 'react';

import instance from './axios-books';

import Books from './Books/Books';

import BookContext from './context/bookContext'


class  App extends Component {

  state={}


  componentDidMount(){
    instance.get("/books.json").then(res=>res.data).then(data=>Object.keys(data).map(key=>{
      data[key]['key']=key;
      return data[key];
    })).then(data=>{
      this.setState({books:data})
    
    })
}

  updateBookData=(book,key)=>{
    let data={...this.state}
      
    let n =true

    Object.keys(data['books']).map(index=>{
        if(data['books'][index]["key"]===key){
            data["books"][index]=book
            n=false
        }
        return ""
    })

    if(n){
        data['books'][key]=book

    }
    
    console.log(data['books'])
    this.setState({books:{...data['books']}})
  };

  deleteBookData=(key)=>{

      let data={...this.state}
      

        let newData={}

        Object.keys(data['books']).map(index=>{
            if(data['books'][index].key!==key){
                newData[index]=data['books'][index]
            }
            return ""
        })

    
        
        this.setState({books:{...newData}})

  };



  render(){

    return <BookContext.Provider value={{
                                            books:this.state.books,
                                            updateBookData:this.updateBookData,
                                            deleteBookData:this.deleteBookData

                                         }}>
      
       <Books/>
      
      </BookContext.Provider>

  }

}



export default App;
