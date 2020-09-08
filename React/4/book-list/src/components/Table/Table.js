import React from 'react'
import Row from '../Row/Row'

const Table= (props)=>{

    let rows=Object.keys(props.books).map(key=>{
        return (

            <Row key={key} checks={props.checks} book={props.books[key]}/>
        )
    })

    return(
        
        <table className="table table-bordered table-hover ">
            <thead>
                <tr>
                {props.checks['author'].checked?   <th>Author</th>: null}
                {props.checks['title'].checked?   <th>Title</th>: null}
                {props.checks['publisher'].checked?   <th>Manufacturer</th>: null}
                {props.checks['group'].checked?   <th>Product Group</th>: null}
                </tr>
                </thead>
                <tbody>
                    {rows}
                 </tbody>
       </table>
    )
}

export default Table