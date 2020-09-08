import React from 'react'
import Cell from '../Cell/Cell'

const Row =(props)=>(
        
        <tr onClick={()=>props.clicked(props.book['key'],props.book['author'],props.book['title'],props.book['publisher'],props.book['group'])}>
                {props.checks['author'].checked? <Cell>{props.book['author']}</Cell>: null}
                {props.checks['title'].checked? <Cell>{props.book['title']}</Cell>: null}
                {props.checks['publisher'].checked? <Cell>{props.book['publisher']}</Cell>: null}
                {props.checks['group'].checked?<Cell>{props.book['group']}</Cell>: null}
     
        </tr>

);

export default Row;