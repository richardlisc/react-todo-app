import { useRef } from "react"

const AddTodos = ({ todos, setTodos }) => {

    const inputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        var temp = {id: todos[0].id + 1, title: inputRef.current.value, completed: false };
        window.localStorage.removeItem('todos');
        window.localStorage.setItem('todos', temp);
        setTodos([temp, ...todos])
    }

    return (
        <form onSubmit={submitHandler}>
            <input placeholder={"Enter what to do?"} ref={inputRef}></input>
        </form>
    )
}

export default AddTodos;