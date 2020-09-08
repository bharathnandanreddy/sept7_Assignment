import React from 'react'

const Table= (props)=>{

    let rows=Object.keys(props.books).map(key=>{
        return (

            <tr key={key}>
                {props.checks['author'].checked? <td>{props.books[key]['author']}</td>: null}
                {props.checks['title'].checked? <td>{props.books[key]['title']}</td>: null}
                {props.checks['publisher'].checked? <td>{props.books[key]['publisher']}</td>: null}
                {props.checks['group'].checked?<td>{props.books[key]['group']}</td>: null}
            </tr>
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