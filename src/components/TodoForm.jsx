import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {
    // state
    // const [input, setInput] = useState('');
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    // ref
    const inputRef = useRef(null)

    // useeffect
    useEffect(() => {
        // focus inputref
        inputRef.current.focus()
    }, [])

    // function to handle change on form input
    const handleChange = (e) => {
        // set input to empty string 
        setInput(e.target.value);
    }

    // function to handle form seubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        // add props to add data other component
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        // set input to empty string 
        setInput('')
    }
    
    return (
        <>
        <form className="todo-form" onSubmit={handleSubmit}>
            {
                props.edit ? (
                    <>
                        <input 
                        type="text" 
                        placeholder="Update item" 
                        value={input} name="text" 
                        className="todo-input edit" 
                        onChange={handleChange} 
                        ref={inputRef}
                        required
                        />
                        <button className="todo-btn edit"> Update </button>
                    </>
                ) :
                (
                    <>
                    <input 
                        type="text" 
                        placeholder="Add new task" 
                        value={input} name="text" 
                        className="todo-input" 
                        onChange={handleChange} 
                        ref={inputRef}
                        required
                    />
                    <button className="todo-btn">Add ToDo</button>
                    </>
                )
            }
            {/* <input 
                type="text" 
                placeholder="Add a todo" 
                value={input} name="text" 
                className="todo_input" 
                onChange={handleChange} 
                ref={inputRef}
                required
            />
            <button className="todo_btn">Add ToDo</button> */}
        </form>
        {/* <div className="num-complete">
            <h4>Completed Tasks: <span>{props.doneTodo}</span> / <span>{props.totalTodo}</span> </h4>
        </div> */}
        </>
    )
}

export default TodoForm
