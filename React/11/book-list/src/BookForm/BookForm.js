import React, { Component } from 'react'
import classes from './BookForm.module.css'
import Button from '../components/UI/Button/Button'
import instance from '../axios-books'
import BookContext from '../context/bookContext'



class BookFrom extends Component{

    static contextType=BookContext

    state={formValid:false}

    componentDidMount(){

        var key=this.props.formData.key
        var data={}
        Object.keys(this.props.formData).map(key=>{
            var valid=(this.props.formData[key].length>0)?true:false
            if(key!=="key"){
               data[key]={
                validation:{
                    required:true
                },
                valid:valid,
                value:this.props.formData[key]
               }
            }

            return ""
        })
    
        this.setState({formData:data,key:key})

        console.log(this.props)
            

    }

    checkValidity(value,rules){
        var isvalid=true
        if(rules.required){
            isvalid=value.trim() !==''
        }
     
        return isvalid
    }

    inputChangedHandled=(event,key)=>{
        var formdata={...this.state.formData}

        formdata[key]['value']=event.target.value
        formdata[key]['valid']=this.checkValidity(event.target.value,formdata[key]['validation'])

        var valid=true

        console.log(this.state.formData)


        Object.keys(this.state.formData).map(key=>{
            if(this.state.formData[key]['valid']===false){
                valid=false
            }
            return ""
        })



        this.setState({formData:formdata,formvalid:valid})
    }

    submitHandler=(event)=>{
        event.preventDefault()
        var Book={}
        Object.keys(this.state.formData).map(key=>{
            Book[key]=this.state.formData[key].value
           return ""
        })

        instance.put('/books/'+this.state.key+'.json',Book).then(response=>{
            console.log(response)
        })

        Book['key']=this.state.key


        this.context.updateBookData(Book,this.state.key)
        
        this.props.updatedHandler(Book,this.state.key)
    }
    
    render(){
        
        let inputElements=null
        if(this.state.formData){
            inputElements= Object.keys(this.state.formData).map(key=>{
          
                return (
                    <div key={key} className={classes.Input}>
            <label className={classes.Label}>{key}</label>
            <input onChange={(event)=>this.inputChangedHandled(event,key)} type="text" name={key}  value={this.state.formData[key].value} className={classes.InputElement}/>
            </div>
                
                )
        })
        }
       

        return(
            <div className={classes.ContactData}> 
                <h4>Enter Book Details</h4>
                <br/>
                <form onSubmit={this.submitHandler}>
                {inputElements}
                <div className={classes.Buttons}>
                <Button clicked={this.props.backClicked} btnType="Danger" >Cancel</Button>
                <Button disabled={!this.state.formvalid } btnType="Success" >Submit</Button>
                </div>

                </form>
       


                
            </div>

        )

    }
}



export default BookFrom;