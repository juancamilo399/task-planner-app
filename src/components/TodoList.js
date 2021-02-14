import React from 'react'
import { CardItem } from './CardItem'


export const TodoList = ({todoList}) => {

    return (
        <>

            {todoList.map((todo,i)=>(
                <CardItem key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            ))}

        </>
    )
}



