import React, { useState } from 'react'
import Todo from './Todo';

import TodoForm from './TodoForm'

const TodoList = () => {
    // todo state
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todoList')) || []);


    //function to add to-do
    const addTodo = (todo) => {
        // if input is not letters it wont show up
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        // add new todo to array
        const newTodos = [todo, ...todos];

        // set the value of todos
        setTodos(newTodos);
        // store in localstorage
        localStorage.setItem('todoList', JSON.stringify(newTodos));
    }

    //function to edit todo
    const updateTodo = (todoId, newValue) => {

        // check if input field is not empty
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        // replace editted todo
        let editTodos = todos.map(todo => {
            if(todo.id === todoId) {
                return newValue;
            } else {
                return todo;
            }
        })

        //set updated todos
        setTodos(editTodos)
        // update local storage
        localStorage.setItem('todoList', JSON.stringify(editTodos));
    }

    // function to confirm completed todo
    const completeTodo = (id) => {
        //check and toggle complete
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        //set updated todos
        setTodos(updatedTodos)
        // update local storage
        localStorage.setItem('todoList', JSON.stringify(updatedTodos));
    }

    //array to check number of completed tasks     
    let doneTodoArr = [...todos].filter(todo => todo.isComplete);

    // function to delete todo
    const deleteTodo = (id) => {
        //filter through todo array to remove matching id
        const removeArray = [...todos].filter(todo => todo.id !== id);

        //set updated todos
        setTodos(removeArray);
        // update local storage
        localStorage.setItem('todoList', JSON.stringify(removeArray));
    }
    

    return (
        <div className="container">
            
            <h1>To-Do List App</h1>

            <TodoForm onSubmit={addTodo} />

            <Todo todos={todos} 
                completeTodo={completeTodo} 
                removeTodo={deleteTodo} 
                updateTodo={updateTodo} 
                totalTodo={todos.length} 
                doneTodo={doneTodoArr.length}
            />

        </div>
    )
}

export default TodoList
