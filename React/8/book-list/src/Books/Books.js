import React, { Component } from 'react';
import classes from './Books.module.css'
import Spinner from '../components/UI/Spinner/Spinner';
import Table from '../components/Table/Table';
import {connect} from 'react-redux'


class  Books extends Component {

  state={
    search:"",

        checkbox:{
          author:{
            name:"Author",
            checked:true,
            sorted:"desc"
          },
          title:{
            name:"Title",
            checked:true,
            sorted:"desc"
          },
          publisher:{
            name:"Manufacturer",
            checked:true,
            sorted:"desc"
            
          },
          group:{
            name:"Product Group",
            checked:true,
            sorted:"desc"
          }
        }
      }

  checkChangedHandled=(event,key)=>{
    let checkBoxs={...this.state.checkbox}

    console.log(event.target.checked)

    checkBoxs[key]['checked']=event.target.checked

    this.setState({checkbox:checkBoxs})

  }




sortData=(key)=> {
  let checkBoxs={...this.state.checkbox}
  let data = Object.values(this.props.books);
  if(this.state.filterBooks){
    data=Object.values(this.state.filterBooks);
  }
  data.sort(this.compareBy(key));

  if(checkBoxs[key]['sorted']==="desc")
    checkBoxs[key]['sorted']="asc"
  else
    checkBoxs[key]['sorted']="desc"

    this.setState({filterBooks: data,checkbox:checkBoxs});
  

}

compareBy=(key) =>{
  return  (a, b) =>{
    if(this.state.checkbox[key].sorted==='desc') 
    {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
    }
    else
    {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
    }

    return 0;
  };
}

search=(event)=>{
  console.log(event.target.value)



  let data = Object.values(this.props.books);
  let filteredData = data.filter(value => {
    return (
        value.author.toLowerCase().includes(event.target.value.toLowerCase()) ||
        value.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        value.group.toLowerCase().includes(event.target.value.toLowerCase()) ||
        value.publisher.toLowerCase().includes(event.target.value.toLowerCase()) 
      );
    });
    this.setState({ filterBooks:filteredData ,search:event.target.value});
}


  render(){

    console.log(this.props.books)
    
    let checks= Object.keys(this.state.checkbox).map(key=>{
    return (<span key={key}>{this.state.checkbox[key].name} : <input onChange={(event)=>this.checkChangedHandled(event,key)} type="checkbox" checked={this.state.checkbox[key].checked} /></span>)
    })

    var view=(<Spinner show={true}/>);

    if(Object.keys(this.props.books).length>0){

      var books=this.props.books;
      if(this.state.filterBooks){
        books=this.state.filterBooks;
      }
      view=(
        <>
        <div className={classes.Check}>
            <div>
            {checks}
            </div>
  
           </div>
           <div  style={{marginTop:'50px',paddingTop:"50px ",marginLeft:"60px"}}>
           <span >Note : Click on headings to sort asc or desc</span>
           </div>
  
      <div  className={classes.Table}>
         <Table sortData={(key)=>this.sortData(key)} checks={this.state.checkbox} books={books} /></div>
        
        </>
      )
    }
      return (
        <div>
          <header className={classes.Header}><h2 className={classes.Title}>Book List</h2> <input value={this.state.search} onChange={(event)=>this.search(event)} className={classes.Search} type="text" placeholder="Search.."></input> </header>
          {view}
        </div>
      );
    
    
    
    
      }

}

const mapStateToProps=(state)=>{

  return{
    books:state.books
  }

}

export default connect(mapStateToProps) (Books);
