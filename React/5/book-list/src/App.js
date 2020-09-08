import React, { Component } from 'react';
import classes from './App.module.css'
import Table from './components/Table/Table';
import Spinner from './components/UI/Spinner/Spinner';
import instance from './axios-books';


class  App extends Component {

  state={

    loading:false,
      

        checkbox:{
          author:{
            name:"Author",
            checked:true
          },
          title:{
            name:"Title",
            checked:true
          },
          publisher:{
            name:"Manufacturer",
            checked:true
            
          },
          group:{
            name:"Product Group",
            checked:true
          }
        }
      }

  checkChangedHandled=(event,key)=>{
    let checkBoxs={...this.state.checkbox}

    console.log(event.target.checked)

    checkBoxs[key]['checked']=event.target.checked

    this.setState({checkbox:checkBoxs})

  }

  componentDidMount(){
    this.setState({loading:true})
    instance.get("/books.json").then(res=>{
        this.setState({loading:false})

        this.setState({books:res.data})
        console.log(res.data)
    })
}

  render(){

    

   let checks= Object.keys(this.state.checkbox).map(key=>{
    return (<span key={key}>{this.state.checkbox[key].name} : <input onChange={(event)=>this.checkChangedHandled(event,key)} type="checkbox" checked={this.state.checkbox[key].checked} /></span>)
    })

    return (
      <div>
        <header className={classes.Header}><h2 className={classes.Title}>Book List</h2></header>
        <div className={classes.Check}>
          <div>
          {checks}
          </div>

         </div>
    <div  className={classes.Table} style={{margin:'50px'}}>{this.state.books?<Table checks={this.state.checkbox} books={this.state.books}/>:<Spinner show={this.state.loading}/>}</div>
      </div>
    );
  }

}

export default App;
