import React from 'react'
import classes from './Spinner.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Spinner= (props)=>{
    if(props.show){
        return( 
            <>
       
            <div className={classes.Loader} />
            <Backdrop show={props.show} />
   
            </>
            
            )
    }
    else
    return null
   
      
   
} 
export default Spinner