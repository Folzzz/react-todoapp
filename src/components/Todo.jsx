import React, { useState } from 'react'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import TodoForm from './TodoForm'

const Todo = ({todos, completeTodo, removeTodo, updateTodo, doneTodo, totalTodo }) => {
    // state
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    
    // create function to submit update
    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        // <div>
        //     {/* <TodoForm/> */}
        // </div>

        <>
        <div className="num-complete">
            <h4>Completed Tasks: <span>{doneTodo}</span> / <span>{totalTodo}</span> </h4>
        </div>
        {
            todos.map( (todo, index) => (
                <div className='todo-row'key={todo.id}>
                    
                    <div className={`row-text ${todo.isComplete ? 'complete' : ''}`}>
                        {todo.text}
                    </div>

                    <div className="todo-navigators">
                        <div>
                            <label>Done</label>
                            <input type="checkbox" defaultChecked={ todo.isComplete }  id="todocheck" onClick={() => completeTodo(todo.id)}/>
                        </div>
                        
                
                        <div className="icons">

                            <FaEdit 
                                onClick={() => 
                                    setEdit({
                                        id: todo.id, 
                                        value: todo.text
                                    }) 
                                } 
                                className='edit-icon' 
                            />

                            <FaWindowClose 
                                onClick={() => removeTodo(todo.id)} 
                                className='delete-icon' 
                            />
                        </div>
                    </div>

                </div>
            ))
        }
        </>
    )
}

export default Todo
