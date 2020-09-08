import React from 'react'

const Table= (props)=>{
    console.log(props.books)

    let rows=Object.keys(props.books).map(key=>{
        return (

            <tr>
                <td>{props.books[key]['author']}</td>
                <td>{props.books[key]['title']}</td>
                <td>{props.books[key]['publisher']}</td>
                <td>{props.books[key]['group']}</td>
            </tr>
        )
    })

    return(
        <table class="table table-bordered table-hover ">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Manufacturer</th>
                    <th>Product Group</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                 </tbody>
       </table>
    )
}

export default Table