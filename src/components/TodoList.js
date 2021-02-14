import React from 'react'
import { CardItem } from './CardItem'


export const TodoList = ({todoList}) => {

    return (
        <>
            {todoList.map(({description,responsible,status,dueDate},i)=>(
                <CardItem key={i} description={description}
                 responsible={responsible} status={status} dueDate={dueDate} />
            ))}

        </>
    )
}



