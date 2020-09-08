import React from 'react'
import Cell from '../Cell/Cell'

const Row =(props)=>(
        
        <tr>
                {props.checks['author'].checked? <Cell>{props.book['author']}</Cell>: null}
                {props.checks['title'].checked? <Cell>{props.book['title']}</Cell>: null}
                {props.checks['publisher'].checked? <Cell>{props.book['publisher']}</Cell>: null}
                {props.checks['group'].checked?<Cell>{props.book['group']}</Cell>: null}
                {props.checks['author'].checked || props.checks['title'].checked || props.checks['publisher'].checked || props.checks['group'].checked?<td><i onClick={()=>props.clicked(props.book['key'],props.book['author'],props.book['title'],props.book['publisher'],props.book['group'])} className="fa fa-edit" style={{cursor:"pointer",fontSize:"20px",color:"blue",marginLeft:"10px",float:"left"}}></i>
                <i onClick={()=>props.delClicked(props.book['key'])} className="fa fa-trash" style={{cursor:"pointer", fontSize:"20px",color:"blue",marginRight:"10px",float:"right"}}></i></td>: null}

        </tr>

);

export default Row;