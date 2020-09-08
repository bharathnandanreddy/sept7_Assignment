import React from 'react'
import Row from '../Row/Row'
import sort from '../../assets/sort.png'
import classes from './Table.module.css'

const Table= (props)=>{

    let rows=Object.keys(props.books).map(key=>{
        return (

            <Row clicked={props.clicked} key={key} checks={props.checks} book={props.books[key]}/>
        )
    })

    return(
        
        <table className="table table-bordered table-hover ">
            <thead>
                <tr>
                {props.checks['author'].checked?   <th style={{width: "25%"}}  onClick={() => props.sortData("author")}>Author <img alt="img" className={classes.Sort} width="18px" src={sort} /></th>: null}
                {props.checks['title'].checked?   <th style={{width: "30%"}} onClick={() => props.sortData("title")}>Title <img alt="img" className={classes.Sort} width="18px" src={sort} /></th>: null}
                {props.checks['publisher'].checked?   <th style={{width: "20%"}} onClick={() => props.sortData("publisher")}>Manufacturer <img alt="img" className={classes.Sort} width="18px" src={sort} /></th>: null}
                {props.checks['group'].checked?   <th style={{width: "20%"}} onClick={() => props.sortData("group")}>Product Group <img alt="img" className={classes.Sort} width="18px" src={sort} /></th>: null}
                </tr>
                </thead>
                <tbody>
                    {rows}
                 </tbody>
       </table>
    )
}

export default Table