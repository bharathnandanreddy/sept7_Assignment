import React, { Component } from 'react';
import classes from './App.module.css'
import Table from './components/Table/Table';


class  App extends Component {

  state={
        books:{
        1:  {
          author: "Sidney Sheldon",
          title: "Master of the Game",
          publisher : "Warner books",
          group:"Book"
          },
        2: {
          author: "Sidney Sheldon",
          title: "Are You Afraid of the Dark? ",
          publisher : "Warner books",
          group:"Book"
          },
        3:  {
          author: "Sidney Sheldon",
          title: "The Sky Is Falling",
          publisher : "Warner books",
          group:"Book"
          },
        4:  {
          author: "Sidney Sheldon",
          title: "The Stars Shine Down ",
          publisher : "Warner books",
          group:"Book"
          },
        5:  {
          author: "Sidney Sheldon",
          title: "The Sands of Time",
          publisher : "Warner books",
          group:"Book"
          },
        6:  {
          author: "Sidney Sheldon",
          title: "If Tomorrow Comes  ",
          publisher : "Warner books",
          group:"Book"
          },
        7:  {
          author: "Sidney Sheldon",
          title: "A Stranger in the Mirror ",
          publisher : "Warner books",
          group:"Book"
          },
        8: {
          author: "Sidney Sheldon",
          title: "The Other Side of Me ",
          publisher : "Warner books",
          group:"Book"
          }
        }
        ,

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
        <div  className={classes.Table} style={{margin:'50px'}}><Table checks={this.state.checkbox} books={this.state.books}/></div>
      </div>
    );
  }

}

export default App;
